import { useDrag } from 'react-dnd'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useRef } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'
import { IDeskProps } from '../../../utils/types/deskTypes'
import styles from './OperatorsDesk.module.scss'
import { useListenerOnDeskDblclick } from '../../../hooks/useListenerOnDeskDblclick'
import { ACTIONS } from '../../../utils/entities/calculatorReducerActions'
import { ICalculatorOperation, calculatorOperations } from '../../../utils/entities/calculatorOperators'

interface IOperatorsDeskProps extends IDeskProps {
}

const OperatorsDesk = (props: IOperatorsDeskProps) => {
  const { isInWorkspace, calculatorReducerState, calculatorReducerDispatch } = props
  const currentWay = useAppSelector(state => state.currentWay)
  const reference = useRef<HTMLDivElement>(null)

  useListenerOnDeskDblclick(idFieldStrings.calculatorOperatorsDeskId, reference, currentWay)

  const handleOperatorButtonClick = (e: React.MouseEvent<HTMLButtonElement>, operation: ICalculatorOperation) => {
    e.preventDefault()
    if (currentWay === stateNames.constructorWay) return
    if (calculatorReducerDispatch !== undefined) {
      calculatorReducerDispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
    }
    console.log('operator has been clicked')
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorOperatorsDeskId },

    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <div ref={drag} >
      <div className={`${styles.OperatorsDesk} ${isDragging && styles.OperatorsDesk_isDragging} ${isInWorkspace && styles.OperatorsDesk_didDrop}`} ref={reference}>
        {calculatorOperations.map((operator) => (<ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={(e) => handleOperatorButtonClick(e, operator)} value={operator} />))}
      </div>
    </div>
  )
}

export default OperatorsDesk