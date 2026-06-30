import express from "express";
import path from "path";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

// Lazy initialization of GoogleGenAI
let ai: GoogleGenAI | null = null;
const apiKey = process.env.GEMINI_API_KEY;

if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
  try {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
    console.log("Gemini API initialized successfully.");
  } catch (err) {
    console.error("Failed to initialize GoogleGenAI client:", err);
  }
} else {
  console.warn("GEMINI_API_KEY not found or using placeholder. Running in Offline Mock mode.");
}

// Helper to clean markdown formatting from response strings if necessary
function cleanJsonText(text: string): string {
  let cleaned = text.trim();
  if (cleaned.startsWith("```json")) {
    cleaned = cleaned.substring(7);
  }
  if (cleaned.endsWith("```")) {
    cleaned = cleaned.substring(0, cleaned.length - 3);
  }
  return cleaned.trim();
}

// 1. Decompose Task Endpoint
app.post("/api/ai/decompose", async (req, res) => {
  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required." });
  }

  if (!ai) {
    // Elegant fallback simulation
    console.log("Executing simulation for decompose...");
    const mockOutput = [
      {
        id: "mock-s1",
        title: "Break syllabus into high-level themes",
        isCompleted: false,
        estimatedMinutes: 25,
        priority: "high"
      },
      {
        id: "mock-s2",
        title: "Compile textbook chapters & practice exam questions",
        isCompleted: false,
        estimatedMinutes: 45,
        priority: "high"
      },
      {
        id: "mock-s3",
        title: "Draft summaries of weak conceptual spots",
        isCompleted: false,
        estimatedMinutes: 30,
        priority: "medium"
      },
      {
        id: "mock-s4",
        title: "Attempt full mock-test under timed limits",
        isCompleted: false,
        estimatedMinutes: 60,
        priority: "high"
      }
    ];
    return res.json({
      title: "Prepared Exam Study Schedule",
      estimatedMinutes: 160,
      priority: "high",
      riskLevel: "warning",
      subTasks: mockOutput,
      category: "Academics",
      reasoning: "Given the short timeframe, focused summaries and active recall (practice tests) are prioritized to maximize score output with minimum friction."
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are an expert Productivity AI Coach. Take the following task, assignment, or exam objective and break it down into achievable micro-steps (under 60 minutes each). Create a realistic plan.
Input: "${prompt}"

Return ONLY a raw JSON object matching the following TypeScript schema:
{
  "title": string (the main refined task title),
  "estimatedMinutes": number (total combined minutes),
  "priority": "low" | "medium" | "high",
  "riskLevel": "safe" | "warning" | "critical",
  "category": string (e.g., Work, Academics, Personal, Health),
  "reasoning": string (brief, reassuring human explanation of why this plan works),
  "subTasks": Array<{
    "id": string (unique ID e.g. "step-1"),
    "title": string,
    "isCompleted": boolean (default false),
    "estimatedMinutes": number
  }>
}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            estimatedMinutes: { type: Type.NUMBER },
            priority: { type: Type.STRING, description: "low, medium, or high" },
            riskLevel: { type: Type.STRING, description: "safe, warning, or critical" },
            category: { type: Type.STRING },
            reasoning: { type: Type.STRING },
            subTasks: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  title: { type: Type.STRING },
                  isCompleted: { type: Type.BOOLEAN },
                  estimatedMinutes: { type: Type.NUMBER }
                },
                required: ["id", "title", "isCompleted", "estimatedMinutes"]
              }
            }
          },
          required: ["title", "estimatedMinutes", "priority", "riskLevel", "category", "reasoning", "subTasks"]
        }
      }
    });

    const text = response.text || "{}";
    const parsed = JSON.parse(cleanJsonText(text));
    res.json(parsed);
  } catch (error: any) {
    console.error("Gemini decompose error:", error);
    res.status(500).json({ error: error.message || "Failed to process blueprint." });
  }
});

// 2. Active Companion Summary & Recommendations
app.post("/api/ai/summary", async (req, res) => {
  const { tasks, habits } = req.body;

  if (!ai) {
    return res.json({
      summary: "Welcome! We're in offline preview. You have critical tasks due soon. It's best to initiate focus on high-priority items like Chapter study blocks to build immediate momentum.",
      focusRecommendation: "Focus on your upcoming mock exams to reduce academic friction."
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are Astra AI (Astra Assistant), a friendly, ultra-intelligent, proactive AI Productivity Companion. 
Analyze the user's current tasks and habits:
Tasks: ${JSON.stringify(tasks)}
Habits: ${JSON.stringify(habits)}

Write a concise, personal, and reassuring summary. Highlight what they should work on right now and why.
Avoid robotic formulas or logs. Speak like an elegant, encouraging performance coach.

Return ONLY a raw JSON object:
{
  "summary": string (concise paragraph summarizing their day, deadlines, and calming encouragement),
  "focusRecommendation": string (single specific task title or action they should start IMMEDIATELY)
}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING },
            focusRecommendation: { type: Type.STRING }
          },
          required: ["summary", "focusRecommendation"]
        }
      }
    });

    const parsed = JSON.parse(cleanJsonText(response.text || "{}"));
    res.json(parsed);
  } catch (error: any) {
    console.error("Gemini summary error:", error);
    res.status(500).json({ error: error.message || "Failed to generate summary." });
  }
});

// 3. Resilience Reschedule Endpoint
app.post("/api/ai/reschedule", async (req, res) => {
  const { taskToShift, otherTasks } = req.body;

  if (!ai) {
    return res.json({
      comfortMessage: "No guilt at all! Flexibility is key to dynamic momentum. I've shifted this task to tomorrow afternoon and re-aligned your remaining time-blocks seamlessly.",
      newTimeBlockStart: "16:00",
      newTimeBlockEnd: "17:00"
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are Astra AI (Astra Assistant), a compassionate, hyper-flexible AI Productivity Companion. 
The user is struggling to start or finish this task: "${JSON.stringify(taskToShift)}".
They need to reschedule it. We practice "No-Guilt" productivity.

Suggest a reassuring comfort sentence and a realistic alternative 1-hour time slot (between 08:00 and 19:00, standard format e.g., "15:00" to "16:00").
Return ONLY a raw JSON object:
{
  "comfortMessage": string (e.g. "Don't sweat it! Energy levels fluctuate. Let's move this to a fresh slot tomorrow."),
  "newTimeBlockStart": string (e.g. "14:00"),
  "newTimeBlockEnd": string (e.g. "15:00")
}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            comfortMessage: { type: Type.STRING },
            newTimeBlockStart: { type: Type.STRING },
            newTimeBlockEnd: { type: Type.STRING }
          },
          required: ["comfortMessage", "newTimeBlockStart", "newTimeBlockEnd"]
        }
      }
    });

    const parsed = JSON.parse(cleanJsonText(response.text || "{}"));
    res.json(parsed);
  } catch (error: any) {
    console.error("Gemini reschedule error:", error);
    res.status(500).json({ error: error.message || "Failed to reschedule." });
  }
});

// 4. Burnout Detection & Focus Recommendations Endpoint
app.post("/api/ai/burnout", async (req, res) => {
  const { tasks, focusHours, habitConsistency } = req.body;

  if (!ai) {
    return res.json({
      burnoutIndex: 42,
      riskLevel: "medium",
      analysis: "Your cognitive loading is within steady thresholds, but successive deep focus blocks require scheduled pauses. Your current academic backlog warrants mild pacing adjustments.",
      recommendations: [
        "Introduce a 10-minute synthesised soundscape between study blocks",
        "Defer lower priority draft tasks to Thursday morning to buffer tomorrow's lab session",
        "Enforce a strict 45-minute focus session ceiling tonight"
      ]
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are Astra AI Coach (Astra Assistant), specializing in Cognitive Load Balancing and Burnout Prevention.
Analyze the user's workload state:
Tasks: ${JSON.stringify(tasks)}
Weekly Focus Hours: ${focusHours || 12}
Habit Completion Rate: ${habitConsistency || "65%"}

Calculate a Burnout Index (0 to 100 percentage) and provide a detailed analysis and actionable recovery tasks.
Return ONLY a raw JSON object matching the schema:
{
  "burnoutIndex": number (percentage),
  "riskLevel": "low" | "medium" | "high" | "critical",
  "analysis": string (detailed description explaining WHY this assessment was made),
  "recommendations": Array<string> (at least 3 actionable recommendations)
}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            burnoutIndex: { type: Type.NUMBER },
            riskLevel: { type: Type.STRING },
            analysis: { type: Type.STRING },
            recommendations: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["burnoutIndex", "riskLevel", "analysis", "recommendations"]
        }
      }
    });

    const parsed = JSON.parse(cleanJsonText(response.text || "{}"));
    res.json(parsed);
  } catch (error: any) {
    console.error("Gemini burnout error:", error);
    res.status(500).json({ error: error.message || "Failed to calculate burnout metrics." });
  }
});

// 5. Smart Calendar Sync & Conflict Auto-Scheduling Endpoint
app.post("/api/ai/calendar-optimize", async (req, res) => {
  const { events, tasks } = req.body;

  if (!ai) {
    return res.json({
      conflictDetected: true,
      alternatives: [
        {
          title: "Staggered Study Reservation",
          originalDate: "Today",
          suggestedDate: "Tomorrow",
          startTime: "11:00",
          endTime: "12:30",
          reason: "Staggering prevents consecutive high-complexity tasks and reduces morning stress before your Chemistry lab."
        }
      ]
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are Astra AI Planner, an elite cognitive calendar optimizer.
Review these calendar events and tasks to detect conflicts (overlaps or over-scheduling):
Calendar Events: ${JSON.stringify(events)}
Active Tasks: ${JSON.stringify(tasks)}

Analyze if conflicts exist (e.g. multiple events at the same hour, or extreme task clutter on a single day). Recommend alternative slots. Always explain WHY.
Return ONLY a raw JSON object matching the schema:
{
  "conflictDetected": boolean,
  "alternatives": Array<{
    "title": string (Event or Task name),
    "originalDate": string,
    "suggestedDate": string (YYYY-MM-DD),
    "startTime": string (HH:MM),
    "endTime": string (HH:MM),
    "reason": string (clear, empathetic explanation of why this alternative is proposed)
  }>
}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            conflictDetected: { type: Type.BOOLEAN },
            alternatives: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  originalDate: { type: Type.STRING },
                  suggestedDate: { type: Type.STRING },
                  startTime: { type: Type.STRING },
                  endTime: { type: Type.STRING },
                  reason: { type: Type.STRING }
                },
                required: ["title", "originalDate", "suggestedDate", "startTime", "endTime", "reason"]
              }
            }
          },
          required: ["conflictDetected", "alternatives"]
        }
      }
    });

    const parsed = JSON.parse(cleanJsonText(response.text || "{}"));
    res.json(parsed);
  } catch (error: any) {
    console.error("Gemini calendar-optimize error:", error);
    res.status(500).json({ error: error.message || "Failed to resolve scheduling conflicts." });
  }
});

// 6. Voice Assistant NLP Endpoint
app.post("/api/ai/voice-parse", async (req, res) => {
  const { command } = req.body;

  if (!command) {
    return res.status(400).json({ error: "Voice input is empty." });
  }

  if (!ai) {
    return res.json({
      action: "ADD_TASK",
      taskTitle: "Chemistry Practice Quiz",
      dueDate: new Date().toISOString().split("T")[0],
      responseText: "Sure! I have scheduled a new high-priority Chemistry Practice Quiz on your board for today. Let me know when you are ready to focus."
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are Astra Assistant, a hands-free executive assistant.
Parse the user's spoken instruction: "${command}"

Map it to one of these system actions:
- "ADD_TASK" (user wants to add/schedule a task or meeting)
- "PLAN_DAY" (user asks to plan, show, or optimize their day)
- "RESCHEDULE" (user wants to shift, postpone, or move an item)
- "SUGGEST_WORK" (user asks 'what should I do next?')
- "CHITCHAT" (general greeting or query)

Formulate a warm, vocal-friendly response (keep it brief and natural for TTS synthesis).
Return ONLY a raw JSON object matching the schema:
{
  "action": "ADD_TASK" | "PLAN_DAY" | "RESCHEDULE" | "SUGGEST_WORK" | "CHITCHAT",
  "taskTitle": string | null (extracted task or meeting title if applicable),
  "dueDate": string | null (YYYY-MM-DD format if date mentioned),
  "responseText": string (voice synthesis script to read back to the user)
}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            action: { type: Type.STRING },
            taskTitle: { type: Type.STRING, nullable: true },
            dueDate: { type: Type.STRING, nullable: true },
            responseText: { type: Type.STRING }
          },
          required: ["action", "taskTitle", "dueDate", "responseText"]
        }
      }
    });

    const parsed = JSON.parse(cleanJsonText(response.text || "{}"));
    res.json(parsed);
  } catch (error: any) {
    console.error("Gemini voice parse error:", error);
    res.status(500).json({ error: error.message || "Failed to parse spoken audio command." });
  }
});

// 7. Analytics Engine Insights Endpoint
app.post("/api/ai/analytics-insights", async (req, res) => {
  const { completedCount, totalCount, focusMinutes, habitStreak } = req.body;

  if (!ai) {
    return res.json({
      productivityTrend: "upward",
      focusEfficiency: 87,
      aiInsights: [
        "Your focus sessions peak between 10:00 AM and 1:00 PM, generating 65% of your total task progress.",
        "A strong 3-day habit streak is driving a 15% lift in mid-term preparation consistency.",
        "Warning: Missed study blocks typically happen after 4:00 PM. Recommend shifting heavy cognitive loads to morning blocks."
      ]
    });
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: `You are Astra AI Analytics Engine, a quantitative performance optimizer.
Analyze this raw user productivity data:
- Tasks Completed: ${completedCount || 4} out of ${totalCount || 6}
- Total Deep Focus Duration: ${focusMinutes || 120} minutes
- Active Habit Streak: ${habitStreak || 5} days

Generate three high-value, specific, data-driven productivity insights and track efficiency levels.
Return ONLY a raw JSON object matching the schema:
{
  "productivityTrend": "upward" | "stable" | "declining",
  "focusEfficiency": number (0 to 100 percentage score),
  "aiInsights": Array<string> (exactly 3 distinct, specific, analytical suggestions)
}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            productivityTrend: { type: Type.STRING },
            focusEfficiency: { type: Type.NUMBER },
            aiInsights: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["productivityTrend", "focusEfficiency", "aiInsights"]
        }
      }
    });

    const parsed = JSON.parse(cleanJsonText(response.text || "{}"));
    res.json(parsed);
  } catch (error: any) {
    console.error("Gemini analytics insights error:", error);
    res.status(500).json({ error: error.message || "Failed to compile metrics analytics." });
  }
});

// Serve frontend assets using Vite middleware or static delivery
async function setupServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Astra AI full-stack server running on http://localhost:${PORT}`);
  });
}

setupServer();
