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
      {numbers.map((num) => (<ConstructorButton key={num} clickHandler={handleOperandButtonClick} value={num} />))}
    </div>
  )
}

export default NumbersDesk