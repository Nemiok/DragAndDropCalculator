import React from 'react'
import styles from './ConstructorButton.module.scss'

interface IConstructorButtonProps {
  value: string,
  clickHandler: React.MouseEventHandler<HTMLButtonElement>,
  customClass?: string
}

const ConstructorButton = (props: IConstructorButtonProps) => {

  const { clickHandler, value, customClass } = props

  return (
    <button
      className={`${styles.ConstructorButton} ${customClass}`}
      onClick={clickHandler}>
      {value}
    </button>
  )
}

export default ConstructorButton