import { useDrag } from 'react-dnd'
import { typeFieldStrings, idFieldStrings } from '../../../utils/entities/reactDnDHookStrings'
import React, { useEffect, useRef, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { removeItem } from '../../../store/reducers/constructionStateReducer'
import { stateNames } from '../../../utils/entities/stateNames'
import styles from './ResultDesk.module.scss'

const ResultDesk = () => {

  const [didDrop, setDidDrop] = useState<boolean>(false)
  const currentWay = useAppSelector(state => state.currentWay)
  const constructionState = useAppSelector(state => state.constructionState)
  const dispatch = useAppDispatch()

  const reference = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let dblClickEvent: any

    dblClickEvent = reference.current?.addEventListener('dblclick', () => {
      dispatch(removeItem({ id: idFieldStrings.calculatorResultDeskId }))
    })

    return () => {
      reference.current?.removeEventListener('dblclick', dblClickEvent)
    }
  }, [currentWay])

  useEffect(() => {
    const isItemInWorkspace = constructionState.find(item => item.id === idFieldStrings.calculatorResultDeskId)
    console.log(constructionState)
    if (!isItemInWorkspace) setDidDrop(false)

  }, [constructionState])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: typeFieldStrings.calculatorDeskType,
    item: { id: idFieldStrings.calculatorResultDeskId },
    end: (draggedItem, monitor) => {

      const hasAlreadyBeenAdded = constructionState.find(item => item.id === draggedItem.id)
      if (hasAlreadyBeenAdded) return
      setDidDrop(monitor.didDrop())
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} className={`${styles.ResultDesk} ${isDragging && styles.ResultContainer_isDragging} ${didDrop && styles.ResultContainer_didDrop}`}>
      <div ref={reference} className={styles.ResultContainer}>0</div>
    </div>
  )
}

export default ResultDesk