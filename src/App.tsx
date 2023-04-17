
import CalculatorConstructor from './components/CalculatorConstructor'
import WaySwitcher from './components/WaySwitcher'
import Workspace from './components/Workspace'
import styles from './App.module.scss'
import { useReducer } from 'react'
import { reducer } from './utils/functions/calculatorCountReducer'


function App() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(reducer, {})

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
