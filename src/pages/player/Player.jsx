import React from 'react'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import { PlayerContainer } from './Player.styles'

const Player = ({ spotifyApi, showModal }) => {
  return (
    <PlayerContainer>
      <Sidebar showModal={showModal} />
      <Footer spotifyApi={spotifyApi} />
      <Body spotifyApi={spotifyApi} />
    </PlayerContainer>
  )
}

export default Player
