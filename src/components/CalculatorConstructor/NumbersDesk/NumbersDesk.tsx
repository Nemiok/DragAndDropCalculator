import { calculatorOperands } from '../../../utils/entities/calculatorOperands'
import ConstructorButton from '../ConstructorButton'
import styles from './NumbersDesk.module.scss'

const NumbersDesk = () => {
  const numbers = calculatorOperands

  const handleOperandButtonClick = () => {
    console.log('clicked operand')
  }

  return (
    <div className={styles.NumbersDesk}>
      {numbers.map((num, index) => (
        index == numbers.length - 2 ?
          <ConstructorButton customClass={`${styles.ConstructorOperandButton} ${styles.BeforeLastOperandButton}`} key={num} clickHandler={handleOperandButtonClick} value={num} /> :
          <ConstructorButton customClass={styles.ConstructorOperandButton} key={num} clickHandler={handleOperandButtonClick} value={num} />))}
    </div>
  )
}

export default NumbersDesk