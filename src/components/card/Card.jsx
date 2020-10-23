import React from 'react'
import { CardContainer } from './Card.styles'

const Card = ({ tracksPlayed }) => {
  const { name, album, artists } = tracksPlayed

  return (
    <CardContainer>
      <img src={album.images[1].url} alt="" />
      <h3>{name}</h3>
      <p>{artists.map((artist) => artist.name).join(', ')}</p>
    </CardContainer>
  )
}

export default Card
