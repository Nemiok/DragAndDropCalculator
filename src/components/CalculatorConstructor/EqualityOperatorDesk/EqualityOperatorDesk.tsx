import ConstructorButton from '../ConstructorButton'
import styles from './EqualityOperatorDesk.module.scss'

const EqualityOperatorDesk = () => {

  const handleEqualityButtonClick = () => {
    console.log('equality has been clicked')
  }

  return (
    <div className={styles.EqualityOperatorDesk}>
      <ConstructorButton customClass={styles.EqualityOperatorButton} value='=' clickHandler={handleEqualityButtonClick} />
    </div>
  )
}

export default EqualityOperatorDesk