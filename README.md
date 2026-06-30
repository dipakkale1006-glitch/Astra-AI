<div align="center">
  <img width="1200" height="475" alt="Astra AI Banner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
  
  # 🌌 Astra AI
  ### *“The calendar that executes itself.”*
  
  [![Vite](https://img.shields.io/badge/Vite-6.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Gemini](https://img.shields.io/badge/Gemini_AI-3.5_Flash-00F?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)
</div>

---

## 📖 Table of Contents
1. [Introduction & Vision](#-introduction--vision)
2. [The Core Problem](#-the-core-problem)
3. [Key Features](#-key-features)
4. [Technology Stack](#-technology-stack)
5. [Architecture & Flow](#-architecture--flow)
6. [Design System ("Stripe-meets-Linear")](#-design-system-stripe-meets-linear)
7. [Directory Structure](#-directory-structure)
8. [Getting Started](#-getting-started)
9. [Hackathon Demo Strategy](#-hackathon-demo-strategy-3-minutes)
10. [Future Roadmap](#-future-roadmap)

---

## 🌟 Introduction & Vision

**Astra AI** is a proactive, contextual, and generative calendar-task hybrid. Instead of acting as a passive list of tasks that causes anxiety, Astra AI actively intervenes to help you schedule, break down, and execute your work based on your real-time cognitive energy levels.

> **Astra AI shifts the productivity paradigm from *passive tracking* to *proactive partnership*.**

---

## ⚠️ The Core Problem

Traditional task managers (Notion, Todoist, Google Calendar) suffer from the same issue: they are **passive receptacles of anxiety**. They tell you *what* is due and *when*, but they do not help you with the actual transition from a looming deadline to distraction-free execution. This gap leads to **execution paralysis**. 

Astra AI bridges this gap by:
* 🧠 **Decomposing** overwhelming goals into bite-sized, 15-minute micro-steps.
* 📅 **Time-blocking** tasks automatically into calendar gaps.
* 🔄 **Rescheduling** missed tasks fluidly without making the user feel guilty.

---

## ⚡ Key Features

*   **🪄 Generative Task Decomposer (Micro-stepping):** Powered by Gemini 3.5 Flash. Instantly breaks down large goals (e.g., *"Write Research Paper"*) into a sequence of highly actionable subtasks under 15 minutes each.
*   **📅 Dynamic Time-Blocking & Unified Timeline:** An interactive timeline where tasks glide and adapt. It automatically reads your calendar and schedules micro-blocks for tasks based on cognitive difficulty.
*   **🛡️ Predictive Deadline Risk Analyzer:** Displays a "Deadline Risk Index" using color-graded gauges, alerting you when a task is likely to slip based on schedule congestion.
*   **🌈 "No-Guilt" Resilience Rescheduler:** Missed a study block? Instead of showing red "overdue" flags, click one button to watch the AI fluidly slide everything forward and re-balance your calendar.
*   **🎵 Immersive Focus Arena (Focus Mode):** A distraction-free workspace overlay with ambient soundscapes (Lo-Fi, rain, white noise) and a floating minimalist micro-step progress tracker.
*   **💬 Natural Language Ingestion (AI Planner):** Input complex prompts (e.g., *"I have a biology exam in 5 days, 2 math assignments due this Thursday, and I work part-time on Tuesday afternoons"*) and watch the AI construct a distributed schedule instantly.
*   **🏆 Gamified Flow State Progression:** Earn Experience Points (EXP) for completing focus blocks, maintain streaks, and level up your productivity avatar (from *Focus Monk* to *Flow State Wizard*).

---

## 🛠️ Technology Stack

*   **Frontend:**
    *   **React 19** – Component-driven UI.
    *   **Vite 6** – Ultra-fast build tool and dev server.
    *   **Tailwind CSS v4** – Modern, utility-first styling.
    *   **Motion (Framer Motion)** – Smooth micro-animations and physics-based transitions.
    *   **Recharts** – High-performance data visualization for analytics and risk gauges.
    *   **Lucide React** – Consistent, minimalist icon pack.
*   **Backend:**
    *   **Node.js & Express** – Secure API server proxy.
    *   **TSX** – Execute TypeScript files directly in development.
    *   **Google GenAI SDK** – Direct server-side integration with **Gemini 3.5 Flash**.
*   **Database & Auth (Roadmap):**
    *   **Firebase Auth** – Secure user authentication.
    *   **Cloud Firestore** – Real-time database for task and habit persistence.

---

## 🏗️ Architecture & Flow

Astra AI is designed with **security** and **performance** in mind. All Gemini API keys are kept strictly server-side inside the Express server to prevent client-side exposure.

```
┌────────────────────────────────────────────────────────┐
│                        CLIENT                          │
│  ┌───────────────────────┐   ┌──────────────────────┐  │
│  │   Vite React Front    │   │  Tailwind Styling    │  │
│  └───────────┬───────────┘   └───────────▲──────────┘  │
│              │ (HTTPS API Calls)         │             │
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
│  │   Gemini 3.5 API      │                             │
│  └───────────────────────┘                             │
└────────────────────────────────────────────────────────┘
```

### AI Decision Flow:
```
[Unstructured Goal Input]
         │
         ▼
[Is there a strict deadline?]
   ├── YES ──► Analyze timeline ──► Decompose to steps ──► Rank by risk level
   └── NO  ──► Decompose to steps ──► Fit into cognitive low-load gaps
         │
         ▼
[Is calendar congested?]
   ├── YES ──► Prompt user to reschedule low-priority events
   └── NO  ──► Direct reservation of calendar time blocks
```

---

## 🎨 Design System ("Stripe-meets-Linear")

Astra AI implements a high-impact, dark-mode design system optimized for modern SaaS aesthetics.

*   **Colors:**
    *   *Base Background:* `#0B0F19` (Dark Cosmic Slate)
    *   *Card Background:* `#131B2E` (Semi-translucent Sapphire)
    *   *AI Accent:* `#6366F1` (Indigo-500) & Violet Gradient
    *   *Flow Success:* `#10B981` (Emerald-500)
    *   *Risk Warnings:* `#F59E0B` (Amber) & `#EF4444` (Rose)
*   **Typography:**
    *   *Headings:* `Space Grotesk` (Tech-forward & bold)
    *   *Body UI:* `Inter` (Clean & highly readable)
    *   *Metrics/Times:* `JetBrains Mono` (High-precision numbers)

For full specifications, see [DESIGN_SYSTEM.md](file:///c:/Users/Dipak/Downloads/astra-ai/DESIGN_SYSTEM.md).

---

## 📁 Directory Structure

```text
astra-ai/
├── src/
│   ├── components/       # UI & Feature Components
│   │   ├── dashboard/    # Analytics, greeting, active tasks
│   │   ├── planner/      # Natural language scheduling chat
│   │   ├── tasks/        # Kanban Board & Timeline
│   │   └── ui/           # Buttons, cards, and input fields
│   ├── lib/              # Library configurations (Firebase, etc.)
│   ├── types/            # TypeScript Interface Declarations
│   ├── App.tsx           # Application Router and Core Layout
│   ├── index.css         # Global Styles & Tailwind Directives
│   └── main.tsx          # React Entrypoint
├── assets/               # Static Assets & Images
├── server.ts             # Express Server with Vite Middleware & Gemini API
├── tsconfig.json         # TypeScript Config
├── vite.config.ts        # Vite Config
├── .env.example          # Template for Environment Variables
└── README.md             # Project Documentation
```

---

## 🚀 Getting Started

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18 or higher recommended)

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment Variables
Copy the `.env.example` file to `.env`:
```bash
cp .env.example .env
```
Open `.env` and configure your keys:
```ini
GEMINI_API_KEY="your-actual-gemini-api-key"
APP_URL="http://localhost:3000"
```
*Note: If no `GEMINI_API_KEY` is provided, the application will automatically fall back to **Offline Mock Mode** so you can still explore and test the entire interface.*

### 3. Run the Development Server
```bash
npm run dev
```
The application will start, and you can view it at:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 🏆 Hackathon Demo Strategy (3 Minutes)

1.  **The Hook (0:00 - 0:30):** Show the empty, glowing dashboard. Talk about the psychological weight of traditional, passive to-do lists and the concept of *execution paralysis*.
2.  **The Magic Ingestion (0:30 - 1:15):** Go to the **AI Planner** and paste a chaotic, real-world prompt: *"I have an organic chemistry mid-term this Friday, a lab report due Thursday, and I work part-time Tuesday afternoon."* Click **Plan** and watch Gemini instantly decompose it into 15-minute micro-steps and distribute them beautifully across the timeline.
3.  **The Focus Experience (1:15 - 2:15):** Click **Enter Focus Arena** on the active task. Turn on the ambient rain soundscape. Complete a micro-step and watch the emerald XP confetti burst!
4.  **The No-Guilt Reschedule (2:15 - 3:00):** Drag a time block on the timeline to simulate a calendar conflict. Show how the rest of the schedule fluidly shifts forward without red warning errors, keeping the user calm and on track. End with: *"Astra AI turns task dread into flow state. That is how we help people win."*

---

## 🗺️ Future Roadmap

*   **Phase 1:** Local client-side prototype with Gemini integration (Current).
*   **Phase 2:** Two-way **Google Calendar & Outlook** sync with conflict detection.
*   **Phase 3:** Dedicated integrations (Slack & Discord bots) to nudge you where you work.
*   **Phase 4:** Collaborative team workspaces to automatically align group meetings based on individual energy levels.
