import React from 'react'

import Button from '../../atoms/button'

import s from './menu.module.scss'

interface Props {
  items: { name: string; onClick: () => void }[]
}

const Menu: React.FC<Props> = ({ items }) => {
  return (
    <aside className={s.Menu}>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.name}>
              <Button type="menu" onClick={item.onClick}>
                {item.name}
              </Button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Menu
