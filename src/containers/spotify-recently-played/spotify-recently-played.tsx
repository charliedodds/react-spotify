import React, { useEffect, useState } from 'react'
import { FULL_SPOTIFY_AUTH_URL, SPOTIFY_REQUEST_URL } from '../../constants'
import ITrack from '../../types/track'

import Menu from '../../components/molecules/menu'
import Button from '../../components/atoms/button'
import Track from '../../components/atoms/track'

import s from './spotify-recently-played.module.scss'

const SpotifyRecentlyPlayed: React.FC = () => {
  const [accessToken, setAccessToken] = useState('')
  const [tracks, setTracks] = useState<ITrack[]>(
    typeof window !== 'undefined' &&
      JSON.parse(localStorage.getItem('tracks') || '[]')
  )
  const [artist, setArtist] = useState<string>(
    typeof window !== 'undefined' ? localStorage.getItem('artist') || '' : ''
  )

  const logIntoSpotify = () => {
    window.location.href = FULL_SPOTIFY_AUTH_URL
  }

  const getRecentlyPlayed = async () => {
    const response = await fetch(SPOTIFY_REQUEST_URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
    })
    const json = await response.json()
    const tracks = json.items.map((item: { track: ITrack }) => item.track)
    setTracks(tracks)
    localStorage.setItem('tracks', JSON.stringify(tracks))
  }

  const clearArtist = () => {
    setArtist('')
    localStorage.removeItem('artist')
  }

  useEffect(() => {
    const urlAccessToken = window.location.hash
      .substring(1)
      .split('&')[0]
      .split('=')[1]
    setAccessToken(urlAccessToken)
  }, [])

  return (
    <div className={s.SpotifyRecentlyPlayed}>
      <h1 className={s.title}>Spotify Recently Played</h1>
      <p className={s.description}>
        Log into Spotify to see your recently played artists
      </p>
      {tracks && (
        <Menu
          items={tracks.reduce((acc, val) => {
            const artistName = val.artists[0].name
            return !acc.find((artist) => artist.name === artistName)
              ? [
                  ...acc,
                  {
                    name: artistName,
                    onClick: () => {
                      setArtist(artistName)
                      localStorage.setItem('artist', artistName)
                    },
                  },
                ]
              : acc
          }, [] as { name: string; onClick: () => void }[])}
        />
      )}
      <section className={s.actions}>
        <Button type="primary" onClick={logIntoSpotify}>
          Log into Spotify
        </Button>
        <Button type="primary" onClick={getRecentlyPlayed}>
          Get recently played
        </Button>
        <Button type="primary" onClick={clearArtist}>
          Clear artist filter
        </Button>
      </section>
      <main className={s.grid}>
        {tracks
          ?.filter((track) => {
            if (!artist) return true
            return track.artists.find(
              (trackArtist) => trackArtist.name === artist
            )
          })
          .map((track, idx) => {
            return <Track key={`${track.id}${idx}`} track={track} />
          })}
      </main>
    </div>
  )
}

export default SpotifyRecentlyPlayed
