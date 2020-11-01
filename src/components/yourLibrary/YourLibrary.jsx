import React from 'react'
import Card from '../card/Card'
import { CardsHolder } from '../Elements'

const YourLibrary = ({ myPlaylists }) => {
  return (
    <CardsHolder style={{padding: ' 0 2px'}}>
      {myPlaylists &&
        myPlaylists.map((playlist, i) => {
          return <Card key={i} tracksPlayed={playlist} library={true} />
        })}
    </CardsHolder>
  )
}

export default YourLibrary
