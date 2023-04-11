import { useState, useEffect } from 'react'
import { useAppSelector } from '../../store/hooks'
import styles from './CalculatorConstructor.module.scss'
import EqualityOperatorDesk from './EqualityOperatorDesk'
import NumbersDesk from './NumbersDesk'
import OperatorsDesk from './OperatorsDesk'
import ResultDesk from './ResultDesk'
import { stateNames } from '../../utils/entities/stateNames'

const CalculatorConstructor = () => {


  const currentWay = useAppSelector(state => state.currentWay)

  const [isVisible, setIsVisible] = useState<boolean>(true)

  useEffect(() => {
    currentWay === stateNames.constructorWay ? setIsVisible(true) : setIsVisible(false)
  }, [currentWay])

  return (
    <article className={styles.CalculatorConstructor}>
      {isVisible ?
        <>
          <ResultDesk />
          <OperatorsDesk />
          <NumbersDesk />
          <EqualityOperatorDesk />
        </> :
        <></>}
    </article>
  )
}

export default CalculatorConstructor