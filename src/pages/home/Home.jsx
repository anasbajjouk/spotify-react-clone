import React from 'react'
import BodyTitle from '../../components/bodyTitle/BodyTitle'
import Card from '../../components/card/Card'
import { CardsHolder } from '../../components/Elements'

const Home = ({ title, seeAll, limit, handleClick, recentlyPlayed }) => {
  return (
    <div>
      <BodyTitle
        title={title}
        seeAll={seeAll}
        limit={limit}
        handleClick={handleClick}
      />
      <CardsHolder>
        {recentlyPlayed &&
          recentlyPlayed.map((tracksPlayed, i) => {
            return <Card key={i} tracksPlayed={tracksPlayed.track} />
          })}
      </CardsHolder>
    </div>
  )
}

export default Home
