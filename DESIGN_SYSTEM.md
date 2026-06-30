# Astra AI UI/UX Design System Specification
## "Stripe-meets-Linear" Aesthetic — Hackathon Winning Hand-off

This document contains the complete UI/UX specification for **Astra AI**. It is designed to create a "WOW" factor within the first 30 seconds of a demo.

---

### 1. Design Philosophy & Tone
Astra AI’s design language is built around **calmness, clarity, and precision**. It aims to reduce cognitive load, encourage focus, and build trust.

*   **Aesthetic Tone:** Dark Cosmic Slate with vivid glowing accents (emerald green for productivity, indigo/violet for AI intelligence).
*   **Architectural Honesty:** No tech-larping or mock command line outputs. We use clean, modern, high-contrast layouts, elegant cards, and clear typography.

---

### 2. Typography
We use Google Fonts loaded dynamically to convey premium Swiss-modern craft.

*   **Primary Font Family:** `Inter` (sans-serif) - used for clean UI text, cards, and labels.
*   **Display Font Family (Headings):** `Space Grotesk` - used for elegant, tech-forward headings that create instant visual punch.
*   **Mono Font Family:** `JetBrains Mono` - used for times, scores, metrics, and risk calculations.

#### Type Scale:
| Element | Font Family | Size | Weight | Tracking | Line Height |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display Large** | Space Grotesk | 36px (`text-4xl`) | 700 (Bold) | `-0.03em` | 1.1 |
| **Display Medium** | Space Grotesk | 24px (`text-2xl`) | 600 (Semibold)| `-0.02em` | 1.2 |
| **Section Header** | Space Grotesk | 18px (`text-lg`) | 600 (Semibold)| `-0.01em` | 1.3 |
| **Body Standard** | Inter | 14px (`text-sm`) | 400 (Regular) | `0` | 1.5 |
| **Body Medium** | Inter | 14px (`text-sm`) | 500 (Medium) | `0` | 1.5 |
| **Label / Caption**| Inter | 12px (`text-xs`) | 600 (Semibold)| `0.05em` (Caps)| 1.4 |
| **Metadata Mono** | JetBrains Mono| 12px (`text-xs`) | 500 (Medium) | `-0.01em` | 1.4 |

---

### 3. Color System
The color system is balanced to create premium contrast and clean dark interfaces with elegant soft-glow accents.

#### Theme: Dark Cosmic Slate (Primary Option for Hackathon High-Impact Demo)
*   **Base Background:** `#0B0F19` (Very dark blue-gray space slate)
*   **Card Background:** `#131B2E` (Semi-translucent dark sapphire card)
*   **Card Background Hover:** `#1A243F` (Slightly lighter blue-gray for interactive depth)
*   **Borders:** `#223156` (Crisp, thin blue-gray border)
*   **Text Primary:** `#F8FAFC` (Slate-50, soft high-contrast white)
*   **Text Secondary:** `#94A3B8` (Slate-400, muted gray-blue)
*   **Text Muted:** `#64748B` (Slate-500, silent details)

#### System Accent States:
*   **AI Blue/Indigo:** `#6366F1` (Indigo-500, representative of intelligence)
*   **AI Violet Gradient:** `from-indigo-500 to-violet-600` (Used for AI action buttons)
*   **Success (Productivity/Flow):** `#10B981` (Emerald-500, represents focused progression)
*   **Success Gradient:** `from-emerald-400 to-teal-500` (Used for completed blocks)
*   **Warning (Risk of Slip):** `#F59E0B` (Amber-500, medium priority risk)
*   **Danger (Looming Deadline Conflict):** `#EF4444` (Rose-500, critical attention needed)

---

### 4. Spacing System
A rigorous 8pt grid is implemented globally to maintain strict spacing rhythms.

*   **4px (`p-1`):** Tight label gaps, miniature badges.
*   **8px (`p-2`):** Button padding, list item gaps, small card content.
*   **12px (`p-3`):** Sidebar items, standard interactive inputs.
*   **16px (`p-4`):** Default card padding, grid gaps.
*   **24px (`p-6`):** Section margins, main page content padding.
*   **32px (`p-8`):** Main Dashboard layout gaps.
*   **48px / 64px (`p-12` / `p-16`):** Hero section spacing, empty state layouts.

---

### 5. Components Specification

#### A. Interactive Buttons
*   **Primary AI Action:** Button with high-contrast `bg-gradient-to-r from-indigo-500 to-violet-600 hover:opacity-90`, rounded corners (`rounded-lg`), thin border (`border border-indigo-400/20`), soft glow shadow (`shadow-[0_0_20px_rgba(99,102,241,0.2)]`).
*   **Success Focus Button:** Emerald green filled buttons for entering focus mode.
*   **Ghost/Muted Icon Button:** Transparent background, slate border on hover, seamless hover shift.

#### B. Generative AI Cards
*   Border colored with a 1px soft vertical gradient (`border-l-2 border-l-indigo-500`).
*   Background incorporates a very subtle radial mesh pattern (`bg-gradient-to-b from-[#18223C] to-[#131B2E]`).

#### C. Smart Inputs
*   Background: `#111827`. Border: `#374151`.
*   Focus state: Border changes to `#6366F1` (AI Indigo) with a subtle transition speed of 150ms.

---

### 6. Animations (using `motion/react`)
Every interaction must feel organic, responsive, and responsive:

*   **Page Transitions:**
    ```typescript
    initial={{ opacity: 0, y: 15 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -15 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    ```
*   **Hover Lift Effect:** Add a gentle scale up and box-shadow expansion.
    ```typescript
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    ```
*   **AI Pulse/Thinking State:**
    An ambient soft glow pulsing background inside the AI components.
    ```typescript
    animate={{ opacity: [0.5, 1, 0.5] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    ```
*   **Confetti Spark:** Emerald green sparks bursting outwards on task completion.

---

### 7. Core Views Layout & Wireframe Hand-off

#### A. Landing Page Layout
*   **Hero Section:** Centered high-impact title: *"Plan Smarter. Finish Strong."* in Space Grotesk. Underneath, a single conversational input field representing the planning bar.
*   **Visual Asset:** A simulated 3D glowing dashboard mock showing floating cards that automatically organize themselves.
*   **Interactive Demo Playground:** A sandbox right on the landing page where judges can type one sentence and see Astra AI's AI break it down instantly into glowing subtasks.

#### B. Dashboard Architecture ("What do I do next?")
*   **Top Rail:** Beautiful welcoming greeting with current level and "Productivity Score" (e.g., `850` EXP).
*   **Primary Section (Left column, 65% width):**
    *   **The Focus Arena:** A prominent card displaying the *currently active task* and its 3 micro-steps. Contains a large green "Enter Focus Arena" button.
    *   **AI Companion Summary:** A conversational card summarizing the day: *"You have 2 hours of deep work scheduled. Your highest risk item is 'Physics Homework' due tomorrow. I've blocked time at 2:00 PM for it."*
*   **Sidebar/Right Column (35% width):**
    *   **Adaptive Timeline:** An elegant list of today's time blocks.
    *   **Productivity Risk Gauges:** Circular charts displaying deadline risk factors.

#### C. Task & Board View (The Kanban Arena)
*   Three beautifully columned states: `Incoming Queue`, `In Progress (Scheduled)`, and `Completed`.
*   Tasks carry glowing priority tags and an indicator of their AI-decomposed subtasks (e.g., `3/5 subtasks done`).

#### D. AI Planner Page
*   A clean, centered, full-screen chat-style input box reading: *"Tell me about your upcoming week, exams, or projects..."*
*   Once submitted, a vertical, staggered timeline slides up showing the recommended plan, time allocations, and a "Lock It In" validation button.

---

### 8. Icon System
We use Lucide Icons exclusively to maintain high design consistency:
*   `Sparkles`: AI interactions, planning, suggestions.
*   `Play`: Entering Focus Arena.
*   `CheckCircle2`: Task completion.
*   `Calendar`: Timeline views.
*   `AlertTriangle`: Deadline warning and risk levels.
*   `Zap`: Streak meters and energy scores.
*   `Clock`: Time blocks and Pomodoro meters.

---

### 9. Accessibility & Mobile Optimization
*   **Touch Targets:** Buttons on mobile view have a minimum height of 48px to prevent touch error.
*   **Responsive Collapsible Rails:** Sidebars collapse into a beautiful, bottom-navigation tab layout (`Dashboard`, `Planner`, `Board`, `Settings`) on mobile view.
*   **Contrast Safeguards:** Muted text preserves a minimum color contrast of 4.5:1 against card backgrounds to remain easily legible in bright environments.
