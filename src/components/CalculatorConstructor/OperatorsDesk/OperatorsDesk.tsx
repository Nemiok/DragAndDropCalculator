import { useDrag } from 'react-dnd'
import { calculatorOperators } from '../../../utils/entities/calculatorOperators'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useRef } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'
import { IDeskProps } from '../../../utils/types/deskTypes'
import styles from './OperatorsDesk.module.scss'
import { useListenerOnDeskDblclick } from '../../../hooks/useListenerOnDeskDblclick'

interface IOperatorsDeskProps extends IDeskProps {
}

const OperatorsDesk = (props: IOperatorsDeskProps) => {
  const { isInWorkspace } = props
  const currentWay = useAppSelector(state => state.currentWay)
  const reference = useRef<HTMLDivElement>(null)

  useListenerOnDeskDblclick(idFieldStrings.calculatorOperatorsDeskId, reference, currentWay)

  const operators = calculatorOperators

  const handleOperatorButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (currentWay === stateNames.constructorWay) return
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
        {operators.map((operator) => (<ConstructorButton customClass={styles.ConstructorOperatorButton} key={operator} clickHandler={handleOperatorButtonClick} value={operator} />))}
      </div>
    </div>
  )
}

export default OperatorsDesk