import React, { useState, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'
import styles from './CalculatorConstructor.module.scss'
import EqualityOperatorDesk from './EqualityOperatorDesk'
import NumbersDesk from './NumbersDesk'
import OperatorsDesk from './OperatorsDesk'
import ResultDesk from './ResultDesk'
import { stateNames } from '../../utils/entities/stateNames'
import { Draggable } from 'react-beautiful-dnd'

interface ICalculatorConstructorProps {
  placeholder: React.ReactNode
}

const CalculatorConstructor = (props: ICalculatorConstructorProps) => {

  const { placeholder } = props

  const currentWay = useAppSelector(state => state.currentWay)

  const [isVisible, setIsVisible] = useState<boolean>(true)

  let [id1, id2, id3, id4] = [1, 2, 3, 4]

  useEffect(() => {
    currentWay === stateNames.constructorWay ? setIsVisible(true) : setIsVisible(false)
  }, [currentWay])

  return (
    <article className={styles.CalculatorConstructor}>
      {isVisible ?
        <>
          <Draggable draggableId='RESULT_DESK' index={id1} key={id1}>
            {(provided) => (
              <>
                <ResultDesk dragHandleProps={provided.dragHandleProps} draggableProps={provided.draggableProps} ref={provided.innerRef} />
                {placeholder}
              </>
            )}
          </Draggable>

          <Draggable draggableId='OPERATORS_DESK' index={id2} key={id2}>
            {(provided) => (
              <>
                <OperatorsDesk dragHandleProps={provided.dragHandleProps} draggableProps={provided.draggableProps} ref={provided.innerRef} />
                {placeholder}
              </>
            )}
          </Draggable>

          <Draggable draggableId='OPERANDS_DESK' index={id3} key={id3}>
            {(provided) => (
              <>
                <NumbersDesk dragHandleProps={provided.dragHandleProps} draggableProps={provided.draggableProps} ref={provided.innerRef} />
                {placeholder}
              </>
            )}
          </Draggable>

          <Draggable draggableId='EQUALITY_DESK' index={id4} key={id4}>
            {(provided) => (
              <>
                <EqualityOperatorDesk dragHandleProps={provided.dragHandleProps} draggableProps={provided.draggableProps} ref={provided.innerRef} />
                {placeholder}
              </>
            )}
          </Draggable>

        </> :
        <></>}
    </article>
  )
}

export default CalculatorConstructor