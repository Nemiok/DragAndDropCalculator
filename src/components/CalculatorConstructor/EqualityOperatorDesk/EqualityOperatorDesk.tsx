import { DraggableProvided } from 'react-beautiful-dnd'
import ConstructorButton from '../ConstructorButton'
import styles from './EqualityOperatorDesk.module.scss'
import { forwardRef } from 'react'

interface IEqualityOperatorDeskProps extends Omit<DraggableProvided, 'innerRef'> {

}

const EqualityOperatorDesk = forwardRef<HTMLDivElement, IEqualityOperatorDeskProps>((props, ref) => {

  const { dragHandleProps, draggableProps } = props

  const handleEqualityButtonClick = () => {
    console.log('equality has been clicked')
  }

  return (
    <div {...dragHandleProps} {...draggableProps} ref={ref} className={styles.EqualityOperatorDesk}>
      <ConstructorButton customClass={styles.EqualityOperatorButton} value='=' clickHandler={handleEqualityButtonClick} />
    </div>
  )
})

export default EqualityOperatorDesk