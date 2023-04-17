import { useDrag } from 'react-dnd'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useRef } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'
import { IDeskProps } from '../../../utils/types/deskTypes'
import styles from './EqualityOperatorDesk.module.scss'
import { useListenerOnDeskDblclick } from '../../../hooks/useListenerOnDeskDblclick'
import { ACTIONS } from '../../../utils/entities/calculatorReducerActions'

interface IEqualityOperatorProps extends IDeskProps {

}
const EqualityOperatorDesk = (props: IEqualityOperatorProps) => {
  const { isInWorkspace, calculatorReducerDispatch } = props

  const reference = useRef<HTMLDivElement>(null)
  const currentWay = useAppSelector(state => state.currentWay)

  useListenerOnDeskDblclick(idFieldStrings.calculatorEqualityDeskId, reference, currentWay)

  const handleEqualityButtonClick = () => {
    if (currentWay === stateNames.constructorWay) return
    if (calculatorReducerDispatch !== undefined) {
      calculatorReducerDispatch({ type: ACTIONS.EVALUATE })
    }
    console.log('equality has been clicked')

  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorEqualityDeskId },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag}>
      <div ref={reference} className={`${styles.EqualityOperatorDesk} ${isDragging && styles.EqualityOperatorDesk_isDragging} ${isInWorkspace && styles.EqualityOperatorDesk_didDrop}`}>
        <ConstructorButton customClass={styles.EqualityOperatorButton} value='=' clickHandler={handleEqualityButtonClick} />
      </div>
    </div>
  )
}

export default EqualityOperatorDesk