import React from 'react'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className={styles.header}>
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
