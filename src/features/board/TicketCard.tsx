import { useDraggable } from "@dnd-kit/core"
import type { CSSProperties } from "react"
import type { Ticket } from "../../types/board"

interface TicketCardProps {
  ticket: Ticket
}

export function TicketCard({ ticket }: TicketCardProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: ticket.id,
    })

  const style: CSSProperties = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
    opacity: isDragging ? 0.85 : 1,
    cursor: "grab",
  }

  return (
    <article
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="rounded-lg border border-slate-700 bg-slate-800/80 px-3 py-2 text-sm shadow-sm"
    >
      <h3 className="font-medium mb-1">{ticket.title}</h3>
      {ticket.description && (
        <p className="text-xs text-slate-300">{ticket.description}</p>
      )}
    </article>
  )
}
