import { calculatorSVGs } from '../../../utils/entities/calculatorSVGs';
import styles from './WaySwitcherButton.module.scss'

interface IWaySwitcherButtonProps {
  value: string,
  clickHandler: React.MouseEventHandler<HTMLButtonElement>,
  customClass?: string,
  isActive: boolean
}

const WaySwitcherButton = (props: IWaySwitcherButtonProps) => {

  const { clickHandler, value, isActive } = props;

  return (
    <button onClick={clickHandler} className={`${styles.WaySwitcherButton} ${isActive ? styles.WaySwitcherButton_active : styles.WaySwitcherButton_default}`}>
      <div className={styles.WaySwitcherButtonSVGContainer}>{calculatorSVGs[value]}</div>
      <div className={styles.WaySwitcherButtonText}>{value}</div>
    </button>
  )
}

export default WaySwitcherButton