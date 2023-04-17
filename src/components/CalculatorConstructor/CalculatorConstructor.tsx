import { useState, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'
import styles from './CalculatorConstructor.module.scss'
import EqualityOperatorDesk from './EqualityOperatorDesk'
import NumbersDesk from './NumbersDesk'
import OperatorsDesk from './OperatorsDesk'
import ResultDesk from './ResultDesk'
import { stateNames } from '../../utils/entities/stateNames'
import { idFieldStrings } from '../../utils/entities/reactDnDHookStrings'
import CleaningDesk from './CleaningDesk'

const CalculatorConstructor = () => {

  const currentWay = useAppSelector(state => state.currentWay)
  const constructionState = useAppSelector(state => state.constructionState)
  const isResultDeskInWorkspace = !!constructionState.find(desk => desk.id === idFieldStrings.calculatorResultDeskId)
  const isOperandsDeskInWorkspace = !!constructionState.find(desk => desk.id === idFieldStrings.calculatorOperandsDeskId)
  const isOperatorsDeskInWorkspace = !!constructionState.find(desk => desk.id === idFieldStrings.calculatorOperatorsDeskId)
  const isEqualityDeskInWorkspace = !!constructionState.find(desk => desk.id === idFieldStrings.calculatorEqualityDeskId)
  const isCleaningDeskInWorkspace = !!constructionState.find(desk => desk.id === idFieldStrings.calculatorCleaningDeskId)


  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    currentWay === stateNames.constructorWay ? setIsVisible(true) : setIsVisible(false)
  }, [currentWay])

  return (
    <article className={styles.CalculatorConstructor}>
      {isVisible ?
        <>
          <ResultDesk isInWorkspace={isResultDeskInWorkspace} />
          <CleaningDesk isInWorkspace={isCleaningDeskInWorkspace} />
          <OperatorsDesk isInWorkspace={isOperatorsDeskInWorkspace} />
          <NumbersDesk isInWorkspace={isOperandsDeskInWorkspace} />
          <EqualityOperatorDesk isInWorkspace={isEqualityDeskInWorkspace} />
        </> :
        <></>}
    </article>
  )
}

export default CalculatorConstructor