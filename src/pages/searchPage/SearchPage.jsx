import React, { useMemo } from 'react'
import Card from '../../components/card/Card'
import { CardsHolder, H2 } from '../../components/Elements'
import { SearchPageContainer, SearchCard } from './SearchPage.styles'

const SearchPage = ({ searchInput, genres, myResults, handleClick, limit }) => {
  const { items } = myResults

  return (
    <SearchPageContainer>
      {searchInput.length > 0 && items ? (
        <>
          {items && <H2 style={{ width: 'max-content' }}>My Result</H2>}
          <CardsHolder>
            {items?.map((item, i) => (
              <Card key={i + 1573} tracksPlayed={item} />
            ))}
          </CardsHolder>
        </>
      ) : null}

      <H2 style={{ width: 'max-content' }}>Genres</H2>
      <CardsHolder>
        {useMemo(
          () =>
            genres.map((genre, i) => {
              const hue = Math.floor(Math.random() * 361)
              const name = genre[0].toUpperCase() + genre.slice(1)
              return (
                <SearchCard key={i + 568} hue={hue}>
                  <h2>{name}</h2>
                </SearchCard>
              )
            }),
          [genres]
        )}
      </CardsHolder>
    </SearchPageContainer>
  )
}

export default SearchPage
