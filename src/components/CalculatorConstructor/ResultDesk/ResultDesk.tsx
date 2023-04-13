import { DraggableProvided } from 'react-beautiful-dnd'
import styles from './ResultDesk.module.scss'
import { forwardRef } from 'react'

interface IResultDeskProps extends Omit<DraggableProvided, 'innerRef'> {

}

const ResultDesk = forwardRef<HTMLDivElement, IResultDeskProps>((props, ref) => {

  const { dragHandleProps, draggableProps } = props

  return (
    <div {...dragHandleProps} {...draggableProps} ref={ref} className={styles.ResultDesk}>
      <div className={styles.ResultContainer}>0</div>
    </div>
  )
})

export default ResultDesk