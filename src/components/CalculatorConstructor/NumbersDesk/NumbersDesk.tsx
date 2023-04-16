import { useDrag } from 'react-dnd'
import { calculatorOperands } from '../../../utils/entities/calculatorOperands'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import { useRef } from 'react'
import { useAppSelector } from '../../../store/hooks'
import { stateNames } from '../../../utils/entities/stateNames'
import { IDeskProps } from '../../../utils/types/deskTypes'
import styles from './NumbersDesk.module.scss'
import { useListenerOnDeskDblclick } from '../../../hooks/useListenerOnDeskDblclick'

interface INumbersDeskProps extends IDeskProps {
}

const NumbersDesk = (props: INumbersDeskProps) => {
  const { isInWorkspace } = props

  const reference = useRef<HTMLDivElement>(null)
  const currentWay = useAppSelector(state => state.currentWay)

  useListenerOnDeskDblclick(idFieldStrings.calculatorOperandsDeskId, reference, currentWay)

  const numbers = calculatorOperands

  const handleOperandButtonClick = () => {
    if (currentWay === stateNames.constructorWay) return
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
        {numbers.map((num, index) => (
          index == numbers.length - 2 ?
            <ConstructorButton customClass={`${styles.ConstructorOperandButton} ${styles.BeforeLastOperandButton}`} key={num} clickHandler={handleOperandButtonClick} value={num} /> :
            <ConstructorButton customClass={styles.ConstructorOperandButton} key={num} clickHandler={handleOperandButtonClick} value={num} />))}
      </div>
    </div>
  )
}

export default NumbersDesk