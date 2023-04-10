import React from 'react'
import styles from './WaySwitcherButton.module.scss'
import { calculatorSVGs } from '../../../utils/entities/calculatorSVGs';

interface IWaySwitcherButtonProps {
  value: string,
  clickHandler: React.MouseEventHandler<HTMLButtonElement>
}

const WaySwitcherButton = (props: IWaySwitcherButtonProps) => {

  const { clickHandler, value } = props;

  return (
    <button onClick={clickHandler} className={styles.WaySwitcherButton}>
      <div className={styles.WaySwitcherButtonSVGContainer}>{calculatorSVGs[value]}</div>
      <div className={styles.WaySwitcherButtonText}>{value}</div>
    </button>
  )
}

export default WaySwitcherButton