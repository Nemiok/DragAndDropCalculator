import { useDrag } from 'react-dnd'
import { calculatorOperands } from '../../../utils/entities/calculatorOperands'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import styles from './NumbersDesk.module.scss'

const NumbersDesk = () => {

  const numbers = calculatorOperands

  const handleOperandButtonClick = () => {
    console.log('clicked operand')
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorOperandsDeskId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))


  return (
    <div ref={drag} className={`${styles.NumbersDesk} ${isDragging && styles.NumbersDesk_isDragging}`}>
      {numbers.map((num, index) => (
        index == numbers.length - 2 ?
          <ConstructorButton customClass={`${styles.ConstructorOperandButton} ${styles.BeforeLastOperandButton}`} key={num} clickHandler={handleOperandButtonClick} value={num} /> :
          <ConstructorButton customClass={styles.ConstructorOperandButton} key={num} clickHandler={handleOperandButtonClick} value={num} />))}
    </div>
  )
}

export default NumbersDesk