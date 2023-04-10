import styles from './WaySwitcher.module.scss'
import WaySwitcherButton from './WaySwitcherButton'

const WaySwitcher = () => {

  const runtimeButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('runtime way is on')
  }

  const constructorButtonClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    console.log('constructor way is on')
  }

  return (
    <article className={styles.WaySwitcher}>
      <WaySwitcherButton value='Runtime' clickHandler={runtimeButtonClickHandler} />
      <WaySwitcherButton value='Constructor' clickHandler={constructorButtonClickHandler} />
    </article>
  )
}

export default WaySwitcher