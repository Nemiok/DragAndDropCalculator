import { useDrop } from 'react-dnd'
import WorkspaceConstruction from './WorkspaceConstruction'
import { typeFieldStrings } from '../../utils/entities/reactDnDHookStrings'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { updateConstructionState } from '../../store/reducers/constructionStateReducer'
import { idFieldStrings } from '../../utils/entities/reactDnDHookStrings'
import OperatorsDesk from '../CalculatorConstructor/OperatorsDesk'
import NumbersDesk from '../CalculatorConstructor/NumbersDesk'
import EqualityOperatorDesk from '../CalculatorConstructor/EqualityOperatorDesk'
import ResultDesk from '../CalculatorConstructor/ResultDesk'
import styles from './Workspace.module.scss'
import CleaningDesk from '../CalculatorConstructor/CleaningDesk/CleaningDesk'
import { Reducer, useReducer } from 'react'
import { reducer } from '../../utils/functions/calculatorCountReducer'
import { ICalculatorReactReducerAction, ICalculatorReactReducerState } from '../../utils/types/utilityFunctionTypes'

const Workspace = () => {

  const [calculatorReducerState, dispatch] = useReducer<Reducer<ICalculatorReactReducerState, ICalculatorReactReducerAction>>(reducer, {} as ICalculatorReactReducerState)

  const storeDispatch = useAppDispatch()

  const constructionState = useAppSelector(state => state.constructionState)
  const currentWay = useAppSelector(state => state.currentWay)

  const hasDropped = constructionState.length !== 0

  const [{ isOver }, drop] = useDrop(() => ({
    accept: typeFieldStrings.calculatorDeskType,
    drop: (item: { id: string }) => addItemToWorkspace(item.id),
    collect: (monitor) => {
      console.log()
      return {
        isOver: !!monitor.isOver()
      }
    }
  }))

  const addItemToWorkspace = (id: string) => {
    storeDispatch(updateConstructionState({ id, currentWay }))
  }

  return (
    <article ref={drop} className={`${styles.Workspace} ${isOver && styles.Workspace_isOver} ${hasDropped && styles.Workspace_hasDropped}`}>
      {constructionState.length === 0 ?
        <WorkspaceConstruction />
        :
        <div className={styles.CalculatorConstructor}>
          {constructionState.map((el): any => {
            switch (el.id) {
              case idFieldStrings.calculatorOperatorsDeskId:
                return <OperatorsDesk calculatorReducerDispatch={dispatch} calculatorReducerState={calculatorReducerState} key={el.id} />
              case idFieldStrings.calculatorOperandsDeskId:
                return <NumbersDesk calculatorReducerDispatch={dispatch} calculatorReducerState={calculatorReducerState} key={el.id} />
              case idFieldStrings.calculatorEqualityDeskId:
                return <EqualityOperatorDesk calculatorReducerDispatch={dispatch} calculatorReducerState={calculatorReducerState} key={el.id} />
              case idFieldStrings.calculatorResultDeskId:
                return <ResultDesk calculatorReducerDispatch={dispatch} calculatorReducerState={calculatorReducerState} key={el.id} />
              case idFieldStrings.calculatorCleaningDeskId:
                return <CleaningDesk calculatorReducerDispatch={dispatch} calculatorReducerState={calculatorReducerState} key={el.id} />
              default: return null
            }
          })}
        </div>}
    </article>
  )
}

export default Workspace