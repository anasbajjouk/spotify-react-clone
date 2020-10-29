import React from 'react'
import { H1 } from '../Elements'
import { PlaylistHeaderContainer } from './PlaylistHeader.styles'

const PlaylistHeader = ({ type, name, images, owner, tracks }) => {
  const imageHolder =
    'https://www.iconninja.com/files/639/91/607/play-music-note-song-audio-sound-player-icon.png'

  const img =
    images?.length > 0
      ? images?.length === 1
        ? images[0]?.url
        : images[1]?.url
      : imageHolder

  return (
    <PlaylistHeaderContainer>
      <img src={img} alt={name} />
      <div>
        <small>{type?.toUpperCase()}</small>
        <H1>{name}</H1>
        <p>
          {owner}
          <strong>
            &bull; {tracks?.total} {tracks?.total > 1 ? 'songs' : 'song'}
          </strong>
        </p>
      </div>
    </PlaylistHeaderContainer>
  )
}

export default PlaylistHeader
