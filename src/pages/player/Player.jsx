import React from 'react'
import Body from '../../components/body/Body'
import Footer from '../../components/footer/Footer'
import Sidebar from '../../components/sidebar/Sidebar'
import { PlayerContainer } from './Player.styles'

const Player = () => {
  return (
    <PlayerContainer>
      <Sidebar />
      <Body />
      <Footer />
    </PlayerContainer>
  )
}

export default Player
