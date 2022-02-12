import React from 'react'
import classnames from 'classnames'

import s from './track.module.scss'
import ITrack from '../../../types/track'

interface Props extends React.HTMLProps<HTMLButtonElement> {
  track: ITrack
}

const Track: React.FC<Props> = ({ track }) => {
  const albumArt = track.album.images[0].url
  return (
    <article className={s.Track}>
      <img className={s.albumArt} src={albumArt} alt="" />
      <h2 className={s.title}>{track.name}</h2>
      <h3 className={s.artists}>
        {track.artists.map((artist) => artist.name).join(', ')}
      </h3>
    </article>
  )
}

export default Track
