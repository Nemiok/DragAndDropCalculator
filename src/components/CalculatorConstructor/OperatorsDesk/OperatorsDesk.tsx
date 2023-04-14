import { calculatorOperators } from '../../../utils/entities/calculatorOperators'
import ConstructorButton from '../ConstructorButton'
import styles from './OperatorsDesk.module.scss'

const OperatorsDesk = () => {

  const operators = calculatorOperators

  const handleOperatorButtonClick = () => {
    console.log('operator has been clicked')
  }

  return (
    <div className={styles.OperatorsDesk}>
      {operators.map((operator) => (<ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={handleOperatorButtonClick} value={operator} />))}
    </div>
  )
}

export default OperatorsDesk