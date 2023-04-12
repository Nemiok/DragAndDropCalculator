import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { setCurrentWay } from '../../store/reducers/currentWayReducer'
import { stateNames } from '../../utils/entities/stateNames'
import styles from './WaySwitcher.module.scss'
import WaySwitcherButton from './WaySwitcherButton'

const WaySwitcher = () => {
  const runtimeWay = stateNames.runtimeWay
  const constructorWay = stateNames.constructorWay

  const dispatch = useAppDispatch()
  const currentWay = useAppSelector(state => state.currentWay)

  const [isActiveRuntimeButton, setIsActiveRuntimeButton] = currentWay === stateNames.runtimeWay ? useState<boolean>(true) : useState<boolean>(false)
  const [isActiveConstructorButton, setIsActiveConstructorButton] = currentWay === stateNames.constructorWay ? useState<boolean>(true) : useState<boolean>(false)

  const runtimeButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setCurrentWay(runtimeWay))
    setIsActiveRuntimeButton(true)
    setIsActiveConstructorButton(false)
  }

  const constructorButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    dispatch(setCurrentWay(constructorWay))
    setIsActiveConstructorButton(true)
    setIsActiveRuntimeButton(false)
  }

  return (
    <article className={styles.WaySwitcher}>
      <WaySwitcherButton isActive={isActiveRuntimeButton} value={runtimeWay} clickHandler={runtimeButtonClickHandler} />
      <WaySwitcherButton isActive={isActiveConstructorButton} value={constructorWay} clickHandler={constructorButtonClickHandler} />
    </article>
  )
}

export default WaySwitcher