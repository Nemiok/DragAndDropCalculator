import { DraggableProvided } from 'react-beautiful-dnd'
import { calculatorOperands } from '../../../utils/entities/calculatorOperands'
import ConstructorButton from '../ConstructorButton'
import styles from './NumbersDesk.module.scss'
import { forwardRef } from 'react'

interface INumbersDeskProps extends Omit<DraggableProvided, 'innerRef'> {

}

const NumbersDesk = forwardRef<HTMLDivElement, INumbersDeskProps>((props, ref) => {

  const { dragHandleProps, draggableProps } = props

  const numbers = calculatorOperands

  const handleOperandButtonClick = () => {
    console.log('clicked operand')
  }

  return (
    <div {...dragHandleProps} {...draggableProps} ref={ref} className={styles.NumbersDesk}>
      {numbers.map((num, index) => (
        index == numbers.length - 2 ?
          <ConstructorButton customClass={`${styles.ConstructorOperandButton} ${styles.BeforeLastOperandButton}`} key={num} clickHandler={handleOperandButtonClick} value={num} /> :
          <ConstructorButton customClass={styles.ConstructorOperandButton} key={num} clickHandler={handleOperandButtonClick} value={num} />))}
    </div>
  )
})

export default NumbersDesk