import React from 'react'
import classnames from 'classnames'

import s from './button.module.scss'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  type: 'primary' | 'menu'
}

const Button: React.FC<Props> = ({ type, onClick, children }) => {
  return (
    <button className={classnames(s.Button, s[type])} onClick={onClick}>
      {children}
    </button>
  )
}

export default Button
