import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Us</h1>
      <p className={styles.description}>
        Welcome to the About Us page. Here we share our story, mission, and
        values.
      </p>
    </div>
  )
}

export default About
