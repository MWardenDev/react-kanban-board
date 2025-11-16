import { AppShell } from "./components/layout/AppShell"
import { BoardPage } from "./features/board/BoardPage"

function App() {
  return (
    <AppShell>
      <BoardPage />
    </AppShell>
  )
}

export default App
