import { DndContext, type DragEndEvent } from "@dnd-kit/core"
import { useCallback } from "react"
import { useLocalStorageState } from "../../hooks/useLocalStorageState"
import type { Column, ColumnId, Ticket } from "../../types/board"
import { Column as ColumnComponent } from "./Column"

const columns: Column[] = [
  { id: "backlog", title: "Backlog" },
  { id: "in-progress", title: "In Progress" },
  { id: "review", title: "Review" },
  { id: "done", title: "Done" },
]

const initialTickets: Ticket[] = [
  { id: "t1", title: "Set up project", columnId: "backlog" },
  { id: "t2", title: "Design board layout", columnId: "in-progress" },
  { id: "t3", title: "Wire localStorage", columnId: "review" },
  { id: "t4", title: "Write README", columnId: "done" },
]

const STORAGE_KEY = "react-kanban-board:tickets"

export function BoardPage() {
  const [tickets, setTickets] = useLocalStorageState<Ticket[]>(
    STORAGE_KEY,
    () => initialTickets
  )

  const ticketsByColumn = useCallback(
    (columnId: ColumnId) => tickets.filter((t) => t.columnId === columnId),
    [tickets]
  )

  const handleAddTicket = (columnId: ColumnId, title: string) => {
    setTickets((prev) => [
      ...prev,
      {
        id: `t-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        title,
        columnId,
      },
    ])
  }

  const handleMoveTicket = (ticketId: string, toColumnId: ColumnId) => {
    setTickets((prev) =>
      prev.map((t) =>
        t.id === ticketId
          ? {
              ...t,
              columnId: toColumnId,
            }
          : t
      )
    )
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    const ticketId = String(active.id)
    const toColumnId = over.id as ColumnId

    const isKnownTicket = tickets.some((t) => t.id === ticketId)
    const isKnownColumn = columns.some((c) => c.id === toColumnId)

    if (!isKnownTicket || !isKnownColumn) return

    handleMoveTicket(ticketId, toColumnId)
  }

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="grid gap-4 md:grid-cols-4">
        {columns.map((column) => (
          <ColumnComponent
            key={column.id}
            column={column}
            tickets={ticketsByColumn(column.id)}
            onAddTicket={handleAddTicket}
          />
        ))}
      </div>
    </DndContext>
  )
}
