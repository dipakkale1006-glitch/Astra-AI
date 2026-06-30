# Astra AI Productivity Companion - Product Requirements Document (PRD)
## Codename: "Astra AI" - Hackathon Winning Strategy

---

### 1. Problem Statement
In today's digital landscape, users do not suffer from a lack of reminders; they suffer from **execution paralysis**. Standard task managers are passive receptacles of anxiety—lists of ever-growing, overdue checkmarks that rely entirely on the user's willpower to initiate action. When a deadline looms, current tools notify the user *that* something is due, but offer zero assistance on *how* or *when* to execute it given their current cognitive load, energy levels, and schedule fragmentation. 

**The Core Pain Point:** The transition from "I have a task due in 3 days" to "I am sitting down, distraction-free, executing the first sub-task right now" is entirely broken.

---

### 2. Existing Problems with Current Apps
*   **Notion:** Highly customizable but requires immense manual setup. It is a passive database that quickly becomes a "digital graveyard" of half-written notes and forgotten tasks.
*   **Todoist / Microsoft To Do:** Linear checklist apps. They treat all tasks equally and rely on manual scheduling. They do not understand the user's actual schedule or calendar conflicts.
*   **Google Calendar:** Excellent for fixed appointments, but terrible for dynamic task integration. Tasks are either detached or manually blocked, leading to immediate schedule collapse when a meeting overruns.
*   **Habitica:** Gamifies tasks but requires manual check-ins. If the user stops opening the app, the gamification loops break immediately.

---

### 3. How Our Solution is Different
"Astra AI" is **proactive, contextual, and generative**. Instead of waiting for the user to fail, it actively intervenes. 
*   **Dynamic Time-Blocking:** It reads your calendar, automatically finds fragmented gaps, and schedules micro-blocks for your tasks based on cognitive difficulty.
*   **Breakdown on Entry:** Every major task is immediately decomposed by local AI into ultra-achievable micro-steps (under 15 minutes each) to eliminate initiation friction.
*   **Adaptive Rescheduling:** If a user misses a block, Astra AI does not yell or leave an red "overdue" flag. It quietly recalculates the entire schedule using a fluid physics-like resource allocation algorithm.

---

### 4. Unique Selling Proposition (USP)
> **"The calendar that executes itself."**
> Astra AI is the world’s first AI-first calendar-task hybrid that doesn’t just remind you of deadlines—it proactively schedules, micro-blocks, and guides you through the work based on your real-time cognitive energy levels.

---

### 5. AI-First Features
*   **Cognitive Load Forecasting:** AI analyzes the user’s meeting frequency and schedules deep-work blocks during peak cognitive hours (e.g., morning for analytical work, late afternoon for administrative work).
*   **Generative Task Decomposer (Micro-stepping):** Turns "Write Research Paper" into 12 sequential 15-minute tasks (e.g., "Draft outline of intro", "Find 3 sources on X").
*   **The Proactive Intervention Engine:** When the AI detects a looming deadline with zero progress, it sends a high-priority, actionable card: *"I noticed you have 6 hours left for Project X and your calendar is packed tomorrow. Let's block 45 minutes right now and snooze your non-essential meetings."*

---

### 6. Features That Impress Hackathon Judges
*   **Real-time Adaptive Calendar Engine:** Fully interactive timeline visualizer where tasks glide and adapt instantly when events are added or dragged.
*   **Natural Language Schedule Ingestion:** A single chat interface that accepts hyper-complex prompts (e.g., *"I have a biology exam in 5 days, 2 math assignments due this Thursday, and I work part-time on Tuesday afternoons"* ) and instantaneously outputs a perfectly distributed schedule.
*   **Predictive Risk Analysis Dashboard:** Displays a "Deadline Risk Index" using color-graded radial charts to show which tasks are at risk of slip-up.

---

### 7. Features Users Will Actually Love
*   **"One-Click Start" Focus Mode:** An immersive workspace overlay with ambient soundscapes (Lo-Fi, rain, white noise) and a floating minimalist micro-step indicator.
*   **"No-Guilt" Smart Reschedule Button:** Instead of feeling like a failure for missing a task, users click one button and see the AI gracefully slide everything forward, reassuring them: *"No worries! Adjusted your schedule. You are still 100% on track."*
*   **Intelligent Quick-Add Bar:** A command-K bar that parses inputs like a human assistant (e.g., *"remind me to buy milk tonight after gym"*).

---

### 8. User Personas
#### Persona A: "Overwhelmed Olivia" (University Student)
*   *Goals:* Pass exams, manage 5 courses, keep sanity.
*   *Pain Points:* Procrastinates until 2am before exams; forgets minor assignments until they are late.
*   *Astra AI Value:* Auto-breaks exam topics into 30-minute daily blocks starting 10 days out.

#### Persona B: "Freelancing Frank" (Independent Contractor)
*   *Goals:* Manage 4 client pipelines, hit delivery dates, avoid burnout.
*   *Pain Points:* Context switching between clients; poor estimation of project timelines.
*   *Astra AI Value:* Accurately predicts "time-to-complete" based on historical performance and blocks focus time accordingly.

---

### 9. User Journey
1.  **Onboarding:** Olivia logs in with Google; Astra AI immediately syncs her Google Calendar.
2.  **The Prompt:** Olivia types: *"I have an organic chemistry mid-term on Friday and I haven't started studying."*
3.  **The Blueprint:** Astra AI's AI decomposes the syllabus into 6 micro-study sessions, runs a predictive conflict analysis against her calendar, and locks in optimal study blocks.
4.  **Proactive Assistance:** On Wednesday, she gets a push notification: *"Your afternoon class was cancelled. I've moved your study block up so you can have your evening free!"*
5.  **Execution:** Olivia clicks "Start Block", entering an immersive focus mode.
6.  **Victory:** She finishes early, raising her weekly "Productivity Flow Score" and earning a streak badge.

---

### 10. User Flow Diagram (Textual Representation)
```
[User Lands / Google OAuth Login]
               │
               ▼
   [Dashboard Landing] ◄──────────────┐
         │       │                    │
         │       ├─► [Quick Add Input]─┘
         │       │
         ▼       ▼
   [AI Planner Command Interface]
         │
         ▼ (AI parses input & creates blueprint)
   [AI Schedule Preview & Risk Analysis]
         │
         ▼ (User accepts schedule)
   [Dynamic Timeline / Kanban Board Update]
         │
         ▼ (User clicks "Start Block")
   [Immersive Focus State (Pomodoro, Ambient Sound, Micro-step tracer)]
         │
         ▼ (Task complete!)
   [Gamified Completion Overlay & Score Adjust]
```

---

### 11. Information Architecture
*   **Root Level:**
    *   `/dashboard`: Core analytical command center.
    *   `/planner`: Natural Language processing block generator.
    *   `/tasks`: Kanban / Timeline execution board.
    *   `/habits`: Heatmaps and micro-routines.
    *   `/profile`: Settings, integrations, and gamification ranks.

---

### 12. Complete Feature List
1.  Dynamic AI Task Decomposition (Generative UI)
2.  Interactive Unified Timeline (Drag and drop calendar + tasks)
3.  Natural Language Processing Engine (Command Bar)
4.  Predictive Deadline Risk Analyzer (Color-graded Gauges)
5.  Immersive "Focus Stage" (Soundboard, micro-step progress tracker, fullscreen mode)
6.  Resilience Rescheduler ("No-Guilt" engine)
7.  Gamified Level & Badge Progression System
8.  Streak & Habit Tracker Heatmaps
9.  Cognitive Load Hour Insights (Chart showing peak performance times)
10. Context-aware notifications with Priority Grouping

---

### 13. MVP Features
*   Natural Language Schedule Ingestion (via Gemini API).
*   Unified Dashboard containing "Today's Plan", "AI Summary", and "Focus Timer".
*   Dynamic Kanban Board with priority drag-and-drop.
*   "No-Guilt" reschedule system.
*   Beautiful local persistence using React state and LocalStorage.

---

### 14. Advanced Features (Post-MVP)
*   **Google Calendar Sync & Conflict Detection:** Real two-way synchronization.
*   **Slack/Discord Proactive Bot:** Intervenes where you work.
*   **Collaborative Team Space:** Autonomously schedules team meetings based on individual energy curves.

---

### 15. Future Roadmap
*   *Phase 1:* Client-side local prototype (Hackathon Version).
*   *Phase 2:* Secure Node/Express Server Integration with full Firebase Auth + Firestore.
*   *Phase 3:* Google Workspace API integration (Mail, Calendar, Sheets).
*   *Phase 4:* Mobile application wrapper (React Native).

---

### 16. Gamification Strategy
*   **Flow State Score:** Users earn points for uninterrupted focus blocks.
*   **The "Astra AI Streak" Level:** Tracks consecutive days hitting scheduled micro-blocks.
*   **Adaptive Avatar / Badge System:** Unlocks aesthetic upgrades for the UI theme as the user increases their productivity level (e.g., "Focus Monk", "Flow State Wizard").

---

### 17. AI Workflow
1.  **Ingestion:** User inputs raw unstructured text.
2.  **Structuring:** Sent to Gemini model using a highly tuned system prompt requiring structured JSON response (`name`, `estimated_minutes`, `subtasks`, `priority`, `risk_level`).
3.  **Scheduling:** Algorithm evaluates existing blocks in the user's active calendar and inserts the new subtasks seamlessly.
4.  **Rendering:** Frontend updates in real-time, displaying beautiful interactive layout cards.

---

### 18. AI Decision Making Process
```
[Unstructured Goal Input]
         │
         ▼
[Is there a strict deadline?]
   ├── YES ──► Analyze timeline -> Decompose to steps -> Rank by risk level
   └── NO  ──► Decompose to steps -> Fit into cognitive low-load gaps
         │
         ▼
[Is calendar congested?]
   ├── YES ──► Prompt user to reschedule low-priority events
   └── NO  ──► Direct reservation of calendar time blocks
```

---

### 19. Database Requirements (Firestore Schema)
*   `users`: `{ uid, email, displayName, currentLevel, totalExperience }`
*   `tasks`: `{ id, userId, title, description, parentId, isCompleted, estimatedTime, actualTime, scheduledStart, scheduledEnd, priority, riskLevel }`
*   `habits`: `{ id, userId, name, streak, history: [dates] }`

---

### 20. API Requirements
*   `GET /api/tasks`: Fetch sorted task queues.
*   `POST /api/ai/decompose`: Process text and return structured micro-blocks.
*   `POST /api/ai/reschedule`: Gracefully re-balance schedule when blocks are missed.

---

### 21. Third-Party Integrations
*   **Google Calendar API:** For seamless event ingestion.
*   **Gemini 2.5 Flash / Pro API:** For speed, structured JSON outputs, and reasoning.
*   **Lucide Icons:** For unified visual style.

---

### 22. Security Considerations
*   **Server-Side Proxied Keys:** All API keys (e.g., `GEMINI_API_KEY`) remain strictly server-side inside `server.ts` to prevent client-side exfiltration.
*   **Firebase Auth Guarding:** Strict Firestore security rules ensuring users can only read/write their own objects.

---

### 23. Performance Goals
*   **Load Time:** Under 1.5 seconds.
*   **Interactive Fluidity:** 60fps for all drag-and-drop actions.
*   **AI Turnaround Time:** Under 2 seconds using lightweight optimized system instructions on Gemini Flash.

---

### 24. Accessibility Goals
*   **WCAG 2.1 AA Compliance:** Minimum color contrast ratio of 4.5:1.
*   **Keyboard Navigable:** Accessible modal elements and escape routes.
*   **Screen Reader Friendly:** Described layout attributes for complex visual timelines.

---

### 25. Complete App Architecture
```
┌────────────────────────────────────────────────────────┐
│                        CLIENT                          │
│  ┌───────────────────────┐   ┌──────────────────────┐  │
│  │   Vite React Front    │   │  Tailwind Styling    │  │
│  └───────────┬───────────┘   └───────────▲──────────┘  │
│              │ (HTTPS)                   │             │
└──────────────┼───────────────────────────┼─────────────┘
               ▼                           │
┌──────────────────────────────────────────┼─────────────┐
│                        BACKEND           │             │
│  ┌───────────────────────┐   ┌───────────┴──────────┐  │
│  │   Express API Server  ├─► │  Vite Middleware     │  │
│  └───────────┬───────────┘   └──────────────────────┘  │
│              │ (Google GenAI SDK)                      │
│              ▼                                         │
│  ┌───────────────────────┐                             │
│  │   Gemini 2.5 API      │                             │
│  └───────────────────────┘                             │
└────────────────────────────────────────────────────────┘
```

---

### 26. Suggested Folder Structure
```
/
├── src/
│   ├── components/
│   │   ├── dashboard/
│   │   ├── planner/
│   │   ├── tasks/
│   │   └── ui/              # Reusable premium components
│   ├── hooks/
│   ├── types/
│   ├── utils/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── server.ts                 # Express/Vite Full-Stack Entry
├── package.json
└── tsconfig.json
```

---

### 27. Competitive Comparison
| Feature | Astra AI | Notion | Todoist |
| :--- | :--- | :--- | :--- |
| **Proactive Scheduling** | Yes (Autonomous) | No | No |
| **Generative Breakdown** | Yes (AI-decomposed) | No | No |
| **No-Guilt Rescheduling**| Yes (Fluid physics) | No | No |
| **Deadline Risk Index**  | Yes (AI-calculated) | No | No |

---

### 28. Monetization Ideas (Startup Pitch)
*   **Pro tier ($8/month):** Real-time multi-calendar sync, unlimited AI decompositions, custom ambient soundboards.
*   **Enterprise tier ($15/user/month):** Team energy alignment, calendar defragmentation dashboard.

---

### 29. Demo Strategy (How to win in 3 minutes)
1.  **The Hook (0:00 - 0:30):** Show the blank dashboard. Say: *"We have all experienced deadline anxiety."*
2.  **The Magic Input (0:30 - 1:15):** Paste a chaotic prompt (e.g., *"I have 3 assignments due in 4 days..."*). Hit "Plan". Watch the AI instantly create beautifully structured micro-steps and lay them cleanly across a glowing visual timeline.
3.  **The Focus Experience (1:15 - 2:15):** Enter the "Focus Mode". Play the subtle rain soundscape. Show the active step indicator tracking progress. Complete a step, watch the glowing animation fire!
4.  **The Resolution (2:15 - 3:00):** Show the "No-Guilt" rescheduling in action by dragging a block. End with: *"Astra AI turns task dread into flow state. That is how we help people win."*

---

### 30. Why Judges Will Remember This Product
Judges see hundreds of basic to-do list clones. They will remember **Astra AI** because it shifts the entire paradigm of productivity from *passive tracking* to *proactive partnership*. The beautiful visual transitions, immediate AI-generated micro-steps, and cohesive "Stripe-meets-Linear" dark aesthetic make the app look and feel like a highly funded, pre-launch SaaS.
