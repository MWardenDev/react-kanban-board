# React Kanban Board

<img width="1743" height="326" alt="Kanban_Screenshot" src="https://github.com/user-attachments/assets/6c68cb41-201c-46c2-9acc-e8548fd06528" />

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

🚀 **Deployed on Vercel:**

- **Version 2.0 (current):** https://react-kanban-board-rosy.vercel.app/
- **Version 1.0:** https://github.com/MWardenDev/react-kanban-board/releases

This project evolves over time.  
All prior versions can be viewed here:  
https://github.com/MWardenDev/react-kanban-board/releases

---

## Version History

- **v2.0.0** — Added drag-and-drop support using @dnd-kit/core.
- **v1.0.0** — Initial release: basic Kanban board, add ticket, localStorage persistence.

---

## Tech Stack

- **React** (with hooks)
- **TypeScript**
- **Vite**
- **Tailwind CSS (v4)**
- **localStorage** for persistence

---

## Features

- Drag-and-drop ticket movement between columns (`@dnd-kit/core`)
- Four Kanban columns with distinct IDs and titles
- Add tickets via inline form in each column
- Real-time column highlighting during drag-over
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

## Planned Improvements

These next steps will further evolve the project:

1. **Ticket Details + Editing**

   - Click a ticket to open a detail or modal panel
   - Allow editing title/description and deleting tickets

2. **Filtering & Search**

   - Add global search box to filter tickets by text
   - Optional: tag-based filtering (priority, owner, etc.)

3. **In-Column Reordering**

   - Allow reordering tickets within a column using drag-and-drop

4. **Tests**

   - Add unit tests with Vitest + React Testing Library
   - Cover `useLocalStorageState` and basic board operations

5. **Accessibility Improvements**

   - Add list/listitem roles
   - Improve keyboard navigation
   - Add drag handles for keyboard-driven reordering

6. **Backend Integration (Stretch Goal)**
   - Replace `localStorage` with backend support
   - Add basic auth and multi-user boards

---

## Why This Project Exists

This app is designed to demonstrate:

- Practical use of **React + TypeScript** for a non-trivial UI
- Sensible **state management** and data modeling
- Clean, reusable separation of **features**, **hooks**, and **types**
- Awareness of **future improvements** and how I would evolve a small
  codebase over time
