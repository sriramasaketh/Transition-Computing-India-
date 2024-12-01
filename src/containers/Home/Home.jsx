import React from 'react'
import styles from './Home.module.css'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to our Website</h1>
        {}
      </main>
      <Footer />
    </div>
  )
}

export default Home
