import { useDrag } from 'react-dnd'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useState } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'
import styles from './EqualityOperatorDesk.module.scss'

const EqualityOperatorDesk = () => {

  const currentWay = useAppSelector(state => state.currentWay)
  const constructionState = useAppSelector(state => state.constructionState)

  const handleEqualityButtonClick = () => {
    if (currentWay === stateNames.constructorWay) return
    console.log('equality has been clicked')
  }

  const [didDrop, setDidDrop] = useState<boolean>(false)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorEqualityDeskId },
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
    <div ref={drag} className={`${styles.EqualityOperatorDesk} ${isDragging && styles.EqualityOperatorDesk_isDragging} ${didDrop && styles.EqualityOperatorDesk_didDrop}`}>
      <ConstructorButton customClass={styles.EqualityOperatorButton} value='=' clickHandler={handleEqualityButtonClick} />
    </div>
  )
}

export default EqualityOperatorDesk