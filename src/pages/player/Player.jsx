import React from 'react'
import { Route } from 'react-router-dom'
// import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import { PlayerContainer } from './Player.styles'

const Player = ({ spotifyApi }) => {
  return (
    <PlayerContainer>
      <Sidebar />
      <Footer spotifyApi={spotifyApi} />
      <Route exact path="/search">
        <h4>Search</h4>
      </Route>
      <Route exact path="/collection/playlists">
        <h4>Library</h4>
      </Route>
    </PlayerContainer>
  )
}

export default Player
