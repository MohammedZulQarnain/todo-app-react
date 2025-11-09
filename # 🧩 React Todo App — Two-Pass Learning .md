# 🧩 React Todo App — Two-Pass Learning Plan

> A structured worksheet to master logic + syntax for your Todo App by building it *twice*: first for understanding, then for recall and fluency.

---

## ✅ Progress Tracker

| Day | Focus | Status |
|------|--------|--------|
| Day 1 | PASS 1 — Understand Mode (Read & Explain) | [ ] |
| Day 2 | PASS 2 — Active Mode (Rebuild from Scratch) | [ ] |
| Day 3 | Optional — Add Extra Features (Clear Completed, Sort, Animation) | [ ] |

---

## 🧠 PASS 1 — UNDERSTAND MODE

### 🎯 Goal:
Understand what each part of the app does — don’t code yet.

### 📋 Steps

#### 1️⃣ Read your full working Todo app carefully
Observe how components, hooks, and logic flow together.

#### 2️⃣ Break it into sections and write your notes

| Section | What to look for | My Notes |
|----------|------------------|-----------|
| **Imports** | Which hooks are imported (`useState`, `useEffect`) and why | |
| **State setup** | What states exist? (`todos`, `filter`, `inputValue`) | |
| **Add Todo** | Where is new todo created? What does each todo object contain? | |
| **Render list** | How `.map()` generates elements and why we use `key` | |
| **Delete logic** | How `.filter()` removes an item | |
| **Edit logic** | How todo text is updated | |
| **Toggle complete** | How the `completed` flag is switched | |
| **Filter logic** | How `filter` state controls what’s displayed | |
| **LocalStorage** | How data is saved and read with `useEffect` | |

---

### 💬 3️⃣ Explain each section in plain language

Speak aloud or write simple sentences:
> “useState holds my todos.”  
> “Filter changes what is rendered.”  
> “LocalStorage saves todos after every change.”

---

### 🧠 4️⃣ Quick self-check quiz
Try answering these *without looking at code*:
- What happens when I click “Add”?
- What’s inside each todo object?
- How does React re-render when I delete or edit?

When you can answer 80% confidently → move to Pass 2.

---

## 🧩 PASS 2 — ACTIVE MODE (REBUILD)

### 🎯 Goal:
Rebuild the app line by line from logic, not memory.

### ⚙️ Setup
```bash
npx create-react-app todo-app
cd todo-app
