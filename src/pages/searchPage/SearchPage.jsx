import React from 'react'
import Card from '../../components/card/Card'
import { CardsHolder, H2 } from '../../components/Elements'
import { SearchPageContainer, SearchCard } from './SearchPage.styles'

const SearchPage = ({ searchInput, genres, myResults }) => {
  const { items } = myResults

  return (
    <SearchPageContainer>
      {searchInput.length > 0 ? (
        <>
          {items && <H2>My Result</H2>}
          <CardsHolder>
            {items?.map((item) => (
              <Card tracksPlayed={item} />
            ))}
          </CardsHolder>
        </>
      ) : null}

      <H2>Genres</H2>
      <CardsHolder>
        {genres.map((genre, i) => {
          let hue = Math.floor(Math.random() * 361)
          let name = genre[0].toUpperCase() + genre.slice(1)
          return (
            <SearchCard key={i + 568} hue={hue}>
              <h2>{name}</h2>
            </SearchCard>
          )
        })}
      </CardsHolder>
    </SearchPageContainer>
  )
}

export default SearchPage
