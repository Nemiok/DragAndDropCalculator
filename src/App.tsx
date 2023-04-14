
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import CalculatorConstructor from './components/CalculatorConstructor'
import WaySwitcher from './components/WaySwitcher'
import Workspace from './components/Workspace'
import styles from './App.module.scss'
import { StrictModeDroppableHelper as Droppable } from './helpers/components/StrictModeDroppableHelper'

function App() {

  const handleDragDrop = (result: DropResult) => {
    console.log(result)
  }

  return (
    <main className={styles.App}>
      <section className={styles.App__Conainer}>
        <WaySwitcher />
        <CalculatorConstructor />
        <Workspace />

      </section>
    </main>
  )
}

export default App
