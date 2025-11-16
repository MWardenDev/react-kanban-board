import type { ReactNode } from "react"

interface AppShellProps {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100">
      <header className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <h1 className="text-x1 tont semibold tracking-tight">
          React Kanban Board
        </h1>
        <span className="text-xs text-slate-400">
          Drag-and-drop coming soon. For now: state & persistence.
        </span>
      </header>

      <main className="flex-1 px-6 py-6">
        <div className="mx-auto max-w-6x1">{children} </div>
      </main>

      <footer className="border-t border-slate-800 px-6 py-3 text-xs text-slate-500 text-right">
        © {new Date().getFullYear()} C. Michael Warden
      </footer>
    </div>
  )
}
