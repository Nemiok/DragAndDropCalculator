import CalculatorConstructor from './components/CalculatorConstructor'
import WaySwitcher from './components/WaySwitcher'
import Workspace from './components/Workspace'
import styles from './App.module.scss'

function App() {

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
