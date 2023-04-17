import { useDrag } from 'react-dnd'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useRef } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'
import { IDeskProps } from '../../../utils/types/deskTypes'
import styles from './CleaningDesk.module.scss'
import { useListenerOnDeskDblclick } from '../../../hooks/useListenerOnDeskDblclick'
import { calculatorClearOperations } from '../../../utils/entities/calculatorOperators'
import { ACTIONS } from '../../../utils/entities/calculatorReducerActions'

interface ICleaningDeskProps extends IDeskProps {
}

const CleaningDesk = (props: ICleaningDeskProps) => {
  const { isInWorkspace, calculatorReducerDispatch } = props

  const currentWay = useAppSelector(state => state.currentWay)
  const reference = useRef<HTMLDivElement>(null)

  useListenerOnDeskDblclick(idFieldStrings.calculatorCleaningDeskId, reference, currentWay)

  const handleClearDeskButtonClick = () => {
    if (currentWay === stateNames.constructorWay) return
    if (calculatorReducerDispatch !== undefined) {
      calculatorReducerDispatch({ type: ACTIONS.CLEAR })
    }
    console.log('operator clear has been clicked')
  }

  const handleDeleteDigitButtonClick = () => {
    if (currentWay === stateNames.constructorWay) return
    if (calculatorReducerDispatch !== undefined) {
      calculatorReducerDispatch({ type: ACTIONS.DELETE_DIGIT })
    }
    console.log('operator clear has been clicked')
  }


  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorCleaningDeskId },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <div ref={drag} >
      <div className={`${styles.CleaningDesk} ${isDragging && styles.CleaningDesk_isDragging} ${isInWorkspace && styles.CleaningDesk_didDrop}`} ref={reference}>
        {calculatorClearOperations.map((operator) => {
          return operator === 'AC' ? <ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={handleClearDeskButtonClick} value={operator} /> :
            <ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={handleDeleteDigitButtonClick} value={operator} />
        })}
      </div>
    </div>
  )
}

export default CleaningDesk