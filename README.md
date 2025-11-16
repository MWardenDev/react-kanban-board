# React Kanban Board
<img width="174.6" height="102.2" alt="Kanban_Screenshot" src="https://github.com/user-attachments/assets/aa32d95b-8087-4b86-b6d8-870fe7c44daf" />


A simple, single-page Kanban board built with **React**, **TypeScript**,
**Vite**, and **Tailwind CSS**.

- Four standard columns: **Backlog**, **In Progress**, **Review**,
  **Done**
- Add new tickets directly into any column
- Move tickets between columns
- State persisted in **localStorage** (refresh-safe)
- Clean, responsive layout

> This project is part of my personal portfolio. It's intentionally
> small but structured like a "real" app, with clear separation of
> features, hooks, and types.

---

## Live Demo

🚀 **Deployed on Vercel:** https://react-kanban-board-rosy.vercel.app/

---

## Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS (v4)**
- **localStorage** for persistence

---

## Features

- Four Kanban columns with distinct IDs and titles
- Add tickets with a small inline form per column
- Move tickets between columns via a "Move to" dropdown
- Ticket counts displayed per column
- Data stored and loaded from `localStorage` under a dedicated key
- Simple, dark-themed UI with responsive grid layout

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/YOUR_GITHUB_USERNAME/react-kanban-board.git
cd react-kanban-board

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Then open the printed URL (typically `http://localhost:5173`) in your
browser.

---

## Scripts

- `npm run dev` -- Start the Vite dev server
- `npm run build` -- Build the app for production
- `npm run preview` -- Preview the production build locally

---

## Project Structure

```text
src/
  components/
    layout/
      AppShell.tsx       # Page chrome (header/footer/layout)
  features/
    board/
      BoardPage.tsx      # Main Kanban board page
      Column.tsx         # Renders a single column and its tickets
      TicketCard.tsx     # Renders a single ticket
  hooks/
    useLocalStorageState.ts  # Reusable localStorage-backed state hook
  types/
    board.ts             # Column and Ticket TypeScript types
  App.tsx
  main.tsx
  index.css              # Tailwind v4 entrypoint + global styles
```

---

## Implementation Notes

- **State & Types**\
  Tickets and columns are strongly typed using TypeScript interfaces
  and union types (`ColumnId`). This keeps the code self-documenting
  and reduces errors when moving tickets across columns.

- **Persistence**\
  A custom hook, `useLocalStorageState`, wraps `useState` +
  `localStorage` read/write logic. It's generic and can be reused in
  other React projects.

- **UI & Layout**\
  Tailwind CSS v4 is used for layout and styling via utility classes.
  The board is responsive, using a CSS grid that collapses gracefully
  on smaller screens.

---

## Planned Improvements

These are deliberate "next steps" I would explore in a real-world
setting:

1.  **Drag-and-Drop Support**
    - Replace the dropdown-based move logic with drag-and-drop using
      `@dnd-kit` or `react-beautiful-dnd`.
    - Add keyboard-accessible drag handles where possible.
2.  **Ticket Details + Editing**
    - Click a ticket to open a detail panel or modal.
    - Support editing title/description and deleting tickets.
3.  **Filtering & Search**
    - Add a global search box to filter tickets by text.
    - Optional: tag-based filtering (e.g., priority, owner).
4.  **Tests**
    - Add unit tests with Vitest + React Testing Library.
    - Cover `useLocalStorageState` and basic board operations.
5.  **Accessibility Improvements**
    - Audit the markup for ARIA roles (e.g., list / listitem).
    - Improve focus states and keyboard navigation.
6.  **Backend Integration (Stretch Goal)**
    - Replace localStorage with a simple backend (Node/Express,
      ASP.NET, etc.).
    - Add basic auth and multi-user boards.

---

## Why This Project Exists

This app is designed to demonstrate:

- Practical use of **React + TypeScript** for a non-trivial UI
- Sensible **state management** and data modeling
- Clean, reusable separation of **features**, **hooks**, and **types**
- Awareness of **future improvements** and how I would evolve a small
  codebase over time
