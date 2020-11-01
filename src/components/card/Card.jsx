import React from 'react'
import { CardContainer } from './Card.styles'

const Card = ({ tracksPlayed, library }) => {
  const { name, album, artists, images, owner } = tracksPlayed || {}

  return (
    <CardContainer>
      {library ? (
        <>
          {images.length > 1 ? (
            <img src={images[1]?.url} alt={name} />
          ) : (
            <div className="imgAlt" />
          )}
          <h3>{name}</h3>
          <p>By {owner.display_name}</p>
        </>
      ) : (
        <>
          <img src={album.images[1].url} alt={name} />
          <h3>{name}</h3>
          <p>{artists.map((artist) => artist.name).join(', ')}</p>
        </>
      )}
    </CardContainer>
  )
}

export default Card
