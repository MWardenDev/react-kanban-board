import type { ColumnId, Ticket } from "../../types/board"

interface TicketCardProps {
  ticket: Ticket
  onMove: (ticketId: string, toColumnId: ColumnId) => void
}

export function TicketCard({ ticket, onMove }: TicketCardProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onMove(ticket.id, e.target.value as ColumnId)
  }

  return (
    <article className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm">
      <h3 className="font-medium mb-1">{ticket.title}</h3>
      {ticket.description && (
        <p className="text-xs text-slate-300 mb-2">{ticket.description}</p>
      )}
      <div className="flex items-center justify-between gap-2">
        <span className="text-[10px] uppercase tracking-wide text-slate-500">
          Move to:
        </span>
        <select
          value={ticket.columnId}
          onChange={handleChange}
          className="bg-slate-900 border border-slate-600 rounded px-2 py-1 text-xs text-slate-100 focus:outline-none focus:ring-1 focus:ring-sky-500"
        >
          <option value="backlog">Backlog</option>
          <option value="in-progress">In Progress</option>
          <option value="review">Review</option>
          <option value="done">Done</option>
        </select>
      </div>
    </article>
  )
}
