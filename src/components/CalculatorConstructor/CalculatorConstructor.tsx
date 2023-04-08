import styles from './CalculatorConstructor.module.scss'
import EqualityOperatorDesk from './EqualityOperatorDesk'
import NumbersDesk from './NumbersDesk'
import OperatorsDesk from './OperatorsDesk'
import ResultDesk from './ResultDesk'

const CalculatorConstructor = () => {
  return (
    <article className={styles.CalculatorConstructor}>
      <ResultDesk />
      <OperatorsDesk />
      <NumbersDesk />
      <EqualityOperatorDesk />
    </article>
  )
}

export default CalculatorConstructor