import React from 'react'
import styles from './spotify-recently-played.module.scss'

const SpotifyRecentlyPlayed: React.FC = () => {
  return (
    <div className={styles.SpotifyRecentlyPlayed}>
      <h1 className={styles.title}>Spotify Recently Played</h1>
      <aside>{/* menu here */}</aside>
      <main>{/* grid here */}</main>
    </div>
  )
}

export default SpotifyRecentlyPlayed
