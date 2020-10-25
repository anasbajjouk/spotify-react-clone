import React from 'react'
import PlaylistHeader from '../../components/playlistHeader/PlaylistHeader'
import SongsTable from '../../components/songsTable/SongsTable'
import { PlaylistContainer } from './Playlist.styles'

const Playlist = ({ type, name, images, owner, tracks }) => {
  // console.log('tracks', tracks)
  const {items} = tracks || {}
  return (
    <PlaylistContainer>
      <PlaylistHeader
        type={type}
        name={name}
        images={images}
        owner={owner}
        tracks={tracks}
      />

      <div>+</div>

      <SongsTable songs={items} />
    </PlaylistContainer>
  )
}

export default Playlist
