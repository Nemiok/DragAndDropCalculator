import { useDrag } from 'react-dnd'
import { calculatorOperators } from '../../../utils/entities/calculatorOperators'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import styles from './OperatorsDesk.module.scss'

const OperatorsDesk = () => {

  const operators = calculatorOperators

  const handleOperatorButtonClick = () => {
    console.log('operator has been clicked')
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorOperandsDeskId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} className={`${styles.OperatorsDesk} ${isDragging && styles.OperatorsDesk_isDragging}`}>
      {operators.map((operator) => (<ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={handleOperatorButtonClick} value={operator} />))}
    </div>
  )
}

export default OperatorsDesk