export type ColumnId = "backlog" | "in-progress" | "review" | "done"

export interface Ticket {
  id: string
  title: string
  description?: string
  columnId: ColumnId
}

export interface Column {
  id: ColumnId
  title: string
}
