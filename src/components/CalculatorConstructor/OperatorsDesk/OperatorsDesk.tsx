import { useDrag } from 'react-dnd'
import { calculatorOperators } from '../../../utils/entities/calculatorOperators'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import styles from './OperatorsDesk.module.scss'
import { useState } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'

const OperatorsDesk = () => {

  const currentWay = useAppSelector(state => state.currentWay)
  const constructionState = useAppSelector(state => state.constructionState)

  const operators = calculatorOperators

  const handleOperatorButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentWay === stateNames.constructorWay) return
    console.log('operator has been clicked')
  }

  const [didDrop, setDidDrop] = useState<boolean>(false)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorOperatorsDeskId },
    end: (draggedItem, monitor) => {
      const hasAlreadyBeenAdded = constructionState.find(item => item.id === draggedItem.id)
      if (hasAlreadyBeenAdded) return
      setDidDrop(monitor.didDrop())
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <div ref={drag} className={`${styles.OperatorsDesk} ${isDragging && styles.OperatorsDesk_isDragging} ${didDrop && styles.OperatorsDesk_didDrop}`}>
      {operators.map((operator) => (<ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={handleOperatorButtonClick} value={operator} />))}
    </div>
  )
}

export default OperatorsDesk