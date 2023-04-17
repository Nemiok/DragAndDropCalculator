import { useDrag } from 'react-dnd'
import { typeFieldStrings, idFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useRef } from 'react'
import { useAppSelector } from '../../../store/hooks'
import styles from './ResultDesk.module.scss'
import { IDeskProps } from '../../../utils/types/deskTypes'
import { useListenerOnDeskDblclick } from '../../../hooks/useListenerOnDeskDblclick'
import { stateNames } from '../../../utils/entities/stateNames'
import { formatOperand } from '../../../utils/functions/calculatorFormatOperand'

interface IResultDeskProps extends IDeskProps {
}

const ResultDesk = (props: IResultDeskProps) => {
  const { isInWorkspace, calculatorReducerState } = props

  const currentWay = useAppSelector(state => state.currentWay)
  const reference = useRef<HTMLDivElement>(null)

  useListenerOnDeskDblclick(idFieldStrings.calculatorResultDeskId, reference, currentWay)

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorResultDeskId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    })
  }))

  return (
    <div ref={drag}>
      <div ref={reference} className={`${styles.ResultDesk} ${isDragging && styles.ResultContainer_isDragging} ${isInWorkspace && styles.ResultContainer_didDrop}`}>
        <div className={styles.ResultContainer}>
          <div className={styles.ResultContainer__previousOperand}>{calculatorReducerState?.previousOperand && (currentWay === stateNames.constructorWay ? '' : `${formatOperand(calculatorReducerState?.previousOperand)} ${calculatorReducerState?.operation}`)}</div>
          <div className={styles.ResultContainer__currentOperand}>{currentWay === stateNames.constructorWay ? '0' : calculatorReducerState?.currentOperand}</div>
        </div>
      </div>
    </div>
  )
}

export default ResultDesk