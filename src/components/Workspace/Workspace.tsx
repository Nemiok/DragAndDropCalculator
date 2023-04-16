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

const Workspace = () => {
  const dispatch = useAppDispatch()

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
    dispatch(updateConstructionState({ id, currentWay }))
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
                return <OperatorsDesk key={el.id} />
              case idFieldStrings.calculatorOperandsDeskId:
                return <NumbersDesk key={el.id} />
              case idFieldStrings.calculatorEqualityDeskId:
                return <EqualityOperatorDesk key={el.id} />
              case idFieldStrings.calculatorResultDeskId:
                return <ResultDesk key={el.id} />
              default: return null
            }
          })}
        </div>}
    </article>
  )
}

export default Workspace