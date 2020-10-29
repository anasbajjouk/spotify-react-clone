import React from 'react'
import PlaylistHeader from '../../components/playlistHeader/PlaylistHeader'
import SongsTable from '../../components/songsTable/SongsTable'
import { PlaylistContainer } from './Playlist.styles'

const Playlist = ({ spotifyApi, type, name, images, owner, tracks }) => {
  const { items } = tracks || {}

  return (
    <PlaylistContainer>
      <PlaylistHeader
        type={type}
        name={name}
        images={images}
        owner={owner}
        tracks={tracks}
      />

      <SongsTable spotifyApi={spotifyApi} songs={items} />
    </PlaylistContainer>
  )
}

export default Playlist
