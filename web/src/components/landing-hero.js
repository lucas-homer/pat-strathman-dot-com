import React from 'react'
import styles from './landing-hero.module.css'

export default function LandingHero () {
  return (
    <section className={styles.root}>
      <div className={styles.hero}>
        <h3>Hi! I'm Pat. Welcome to my site.</h3>
        <img src='undraw_basketball.svg' />
      </div>
    </section>
  )
}
