import React from 'react'
import styles from './Header.module.css'
import Logo from './Logo'

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <nav className={styles.nav}>
        <a href='#home' className={styles.navLink}>
          Home
        </a>
        <a href='#about' className={styles.navLink}>
          About
        </a>
        <a href='#contact' className={styles.navLink}>
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
