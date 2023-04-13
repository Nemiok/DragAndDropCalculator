import { DraggableProvided } from 'react-beautiful-dnd'
import { calculatorOperators } from '../../../utils/entities/calculatorOperators'
import ConstructorButton from '../ConstructorButton'
import styles from './OperatorsDesk.module.scss'
import { forwardRef } from 'react'

interface IOperatorsDeskProps extends Omit<DraggableProvided, 'innerRef'> {

}

const OperatorsDesk = forwardRef<HTMLDivElement, IOperatorsDeskProps>((props, ref) => {
  const { dragHandleProps, draggableProps } = props

  const operators = calculatorOperators

  const handleOperatorButtonClick = () => {
    console.log('operator has been clicked')
  }

  return (
    <div {...dragHandleProps} {...draggableProps} ref={ref} className={styles.OperatorsDesk}>
      {operators.map((operator) => (<ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={handleOperatorButtonClick} value={operator} />))}
    </div>
  )
})

export default OperatorsDesk