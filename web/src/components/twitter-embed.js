import React from 'react'
import styles from './twitter-embed.module.css'
import { TwitterTimelineEmbed } from 'react-twitter-embed'

export default function TwitterEmbed () {
  return (
    <div className={styles.container}>
      <TwitterTimelineEmbed
        sourceType='profile'
        screenName='patstrathman'
        options={{ width: '100%', height: '400px' }}
      />
    </div>
  )
}
