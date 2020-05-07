import React from 'react'
import { buildImageObj } from '../lib/helpers'
import { imageUrlFor } from '../lib/image-url'
import styles from './landing-hero.module.css'

export default function LandingHero ({ heroImage, description }) {
  return (
    <section className={styles.root}>
      <div className={styles.hero}>
        <h3 className={styles.description}>{description}</h3>
        {heroImage && heroImage.asset && (
          <img
            className={styles.heroImage}
            src={imageUrlFor(buildImageObj(heroImage))
              .width(200)
              .height(Math.floor((9 / 16) * 200))
              .fit('crop')
              .url()}
            alt={heroImage.alt}
          />
        )}
      </div>
    </section>
  )
}
