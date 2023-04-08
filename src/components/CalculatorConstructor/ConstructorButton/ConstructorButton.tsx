import React from 'react'
import styles from './ConstructorButton.module.scss'

interface IConstructorButtonProps {
  value: string,
  clickHandler: React.MouseEventHandler<HTMLButtonElement>,
  customStyles?: React.CSSProperties
}

const ConstructorButton = (props: IConstructorButtonProps) => {

  const { clickHandler, value, customStyles } = props

  return (
    <button
      className={styles.ConstructorButton}
      style={{ ...customStyles }}
      onClick={clickHandler}>

      {value}
    </button>
  )
}

export default ConstructorButton