import { useDrag } from 'react-dnd'
import { typeFieldStrings, idFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import styles from './ResultDesk.module.scss'

const ResultDesk = () => {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorResultDeskId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} className={`${styles.ResultDesk} ${isDragging && styles.ResultContainer_isDragging}`}>
      <div className={styles.ResultContainer}>0</div>
    </div>
  )
}

export default ResultDesk