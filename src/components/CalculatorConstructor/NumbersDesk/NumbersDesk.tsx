import { useDrag } from 'react-dnd'
import { ICalculatorOperand, calculatorOperands } from '../../../utils/entities/calculatorOperands'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useRef } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'
import { IDeskProps } from '../../../utils/types/deskTypes'
import styles from './NumbersDesk.module.scss'
import { useListenerOnDeskDblclick } from '../../../hooks/useListenerOnDeskDblclick'
import { ACTIONS } from '../../../utils/entities/calculatorReducerActions'

interface INumbersDeskProps extends IDeskProps {
}

const NumbersDesk = (props: INumbersDeskProps) => {
  const { isInWorkspace, calculatorReducerDispatch } = props

  const reference = useRef<HTMLDivElement>(null)
  const currentWay = useAppSelector(state => state.currentWay)

  useListenerOnDeskDblclick(idFieldStrings.calculatorOperandsDeskId, reference, currentWay)

  const handleOperandButtonClick = (e: React.MouseEvent<HTMLButtonElement>, digit: ICalculatorOperand) => {
    if (currentWay === stateNames.constructorWay) return
    if (calculatorReducerDispatch !== undefined) {
      calculatorReducerDispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })
    }
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
    <div ref={drag}>
      <div ref={reference} className={`${styles.NumbersDesk} ${isDragging && styles.NumbersDesk_isDragging} ${isInWorkspace && styles.NumbersDesk_didDrop}`}>
        {calculatorOperands.map((num, index) => (
          index == calculatorOperands.length - 2 ?
            <ConstructorButton customClass={`${styles.ConstructorOperandButton} ${styles.BeforeLastOperandButton}`} key={num} clickHandler={(e) => handleOperandButtonClick(e, num)} value={num} /> :
            <ConstructorButton customClass={styles.ConstructorOperandButton} key={num} clickHandler={(e) => handleOperandButtonClick(e, num)} value={num} />))}
      </div>
    </div>
  )
}

export default NumbersDesk