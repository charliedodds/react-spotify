import React from 'react'
import { FULL_SPOTIFY_URL } from '../../../helpers/spotify-url'

import Button from '../../atoms/button'

import s from './spotify-recently-played.module.scss'

const SpotifyRecentlyPlayed: React.FC = () => {
  const logIntoSpotify = () => {
    window.location.href = FULL_SPOTIFY_URL
  }
  return (
    <div className={s.SpotifyRecentlyPlayed}>
      <h1 className={s.title}>Spotify Recently Played</h1>
      <p className={s.description}>
        Log into Spotify to see your recently played artists
      </p>
      <aside>{/* menu here */}</aside>
      <section>
        <Button type="primary" onClick={logIntoSpotify}>
          Log into Spotify
        </Button>
      </section>
      <main>{/* grid here */}</main>
    </div>
  )
}

export default SpotifyRecentlyPlayed
