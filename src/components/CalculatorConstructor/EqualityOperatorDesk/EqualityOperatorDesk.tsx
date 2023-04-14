import { useDrag } from 'react-dnd'
import ConstructorButton from '../ConstructorButton'
import { idFieldStrings, typeFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import styles from './EqualityOperatorDesk.module.scss'

const EqualityOperatorDesk = () => {

  const handleEqualityButtonClick = () => {
    console.log('equality has been clicked')
  }

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorOperandsDeskId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} className={`${styles.EqualityOperatorDesk} ${isDragging && styles.EqualityOperatorDesk_isDragging}`}>
      <ConstructorButton customClass={styles.EqualityOperatorButton} value='=' clickHandler={handleEqualityButtonClick} />
    </div>
  )
}

export default EqualityOperatorDesk