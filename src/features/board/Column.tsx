import { useState } from "react"
import type { Column as ColumnType, ColumnId, Ticket } from "../../types/board"
import { TicketCard } from "./TicketCard"

interface ColumnProps {
  column: ColumnType
  tickets: Ticket[]
  onAddTicket: (columnId: ColumnId, title: string) => void
  onMoveTicket: (ticketId: string, toColumnId: ColumnId) => void
}

export function Column({
  column,
  tickets,
  onAddTicket,
  onMoveTicket,
}: ColumnProps) {
  const [newTitle, setNewTitle] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = newTitle.trim()
    if (!trimmed) return
    onAddTicket(column.id, trimmed)
    setNewTitle("")
  }

  return (
    <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-3 flex flex-col gap-3">
      <header className="flex items-center justify-between mb-1">
        <h2 className="text-sm font-semibold tracking-tight">{column.title}</h2>
        <span className="text-xs text-slate-500">
          {tickets.length} ticket{tickets.length === 1 ? "" : "s"}
        </span>
      </header>

      <div className="flex flex-col gap-2 flex-1">
        {tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} onMove={onMoveTicket} />
        ))}
        {tickets.length === 0 && (
          <p className="text-xs text-slate-500 italic">
            No tickets yet. Add one below.
          </p>
        )}
      </div>

      <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-2">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder={`Add to ${column.title}`}
          className="w-full rounded border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
        />
        <button
          type="submit"
          className="self-end text-[11px] px-2 py-1 rounded bg-sky-600 hover:bg-sky-500 text-white font-medium"
        >
          Add
        </button>
      </form>
    </section>
  )
}
