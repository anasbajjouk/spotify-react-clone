import React, { useEffect, useRef, useState } from 'react'
import { Route } from 'react-router-dom'
import Header from '../header/Header'
import { BodyContainer } from './Body.styles'
import { dropdownData } from '../../common/data'
import { connect } from 'react-redux'
import Card from '../card/Card'
import { CardsHolder } from '../Elements'
import BodyTitle from '../bodyTitle/BodyTitle'
import { setRecentlyPlayed } from '../../redux/playback/playback.actions'

const Body = ({ spotifyApi, user, playback, setRecentlyPlayed }) => {
  const [navbar, setNavbar] = useState(false)
  const myRef = useRef()
  const { token, currentUser } = user || {}
  const {
    recentPlayedTracks: { limit, recentlyPlayed },
  } = playback || {}

  // console.log(recentPlayedTracks?.recentlyPlayed.map(d =>d))
  const handleScroll = () => {
    const scrollTop = myRef.current.scrollTop
    if (scrollTop >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {
    spotifyApi.setAccessToken(token)

    // Get Current User's Recently Played Tracks
    spotifyApi
      .getMyRecentlyPlayedTracks({
        limit: 20,
      })
      .then((data) => setRecentlyPlayed(data.items, data.limit))
      .catch((err) => console.error('error', err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <BodyContainer ref={myRef} onScroll={handleScroll}>
        <Header
          navbar={navbar}
          dropdownData={dropdownData}
          image={currentUser?.images[0]}
          name={currentUser?.display_name}
        />
        <BodyTitle title={'Recently played'} seeAll={true} />

        <CardsHolder>
          {recentlyPlayed &&
            recentlyPlayed.map((tracksPlayed, i) => {
              return (
                <Card
                  key={i}
                  tracksPlayed={tracksPlayed.track}
                />
              )
            })}
        </CardsHolder>

        <Route exact path="/search">
          <h4>Search</h4>
        </Route>
        <Route exact path="/collection/playlists">
          <h4>Library</h4>
        </Route>
      </BodyContainer>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  playback: state.playback,
})

const mapDispatchToProps = (dispatch) => ({
  setRecentlyPlayed: (recentlyPlayed, limit) =>
    dispatch(setRecentlyPlayed(recentlyPlayed, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
