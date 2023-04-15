import { useDrag } from 'react-dnd'
import { calculatorOperands } from '../../../utils/entities/calculatorOperands'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import styles from './NumbersDesk.module.scss'
import { useState } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'

const NumbersDesk = () => {

  const [didDrop, setDidDrop] = useState<boolean>(false)

  const currentWay = useAppSelector(state => state.currentWay)
  const constructionState = useAppSelector(state => state.constructionState)

  const numbers = calculatorOperands

  const handleOperandButtonClick = () => {
    if (currentWay === stateNames.constructorWay) return
    console.log('clicked operand')
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorOperandsDeskId },
    end: (draggedItem, monitor) => {
      const hasAlreadyBeenAdded = constructionState.find(item => item.id === draggedItem.id)
      if (hasAlreadyBeenAdded) return
      setDidDrop(monitor.didDrop())
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))


  return (
    <div ref={drag} className={`${styles.NumbersDesk} ${isDragging && styles.NumbersDesk_isDragging} ${didDrop && styles.NumbersDesk_didDrop}`}>
      {numbers.map((num, index) => (
        index == numbers.length - 2 ?
          <ConstructorButton customClass={`${styles.ConstructorOperandButton} ${styles.BeforeLastOperandButton}`} key={num} clickHandler={handleOperandButtonClick} value={num} /> :
          <ConstructorButton customClass={styles.ConstructorOperandButton} key={num} clickHandler={handleOperandButtonClick} value={num} />))}
    </div>
  )
}

export default NumbersDesk