import React, { useEffect, useRef, useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import { BodyContainer } from './Body.styles'
import { dropdownData } from '../../common/data'
import { connect } from 'react-redux'
import { setRecentlyPlayed } from '../../redux/playback/playback.actions'
import Home from '../../pages/home/Home'
import Playlist from '../../pages/playlist/Playlist'
import { setPlaylist } from '../../redux/playlists/playlists.actions'
// import Page404 from '../../pages/page404/page-404.component'

const Body = ({
  spotifyApi,
  user,
  playback,
  playlists,
  setRecentlyPlayed,
  setPlaylist,
}) => {
  const [navbar, setNavbar] = useState(false)
  const [myLimit, setLimit] = useState(20)
  const myRef = useRef()
  const { token, currentUser } = user || {}
  const {
    recentPlayedTracks: { limit, recentlyPlayed },
  } = playback || {}

  const { images, name, owner, tracks, type } = playlists?.myPlaylist || {}

  const location = useLocation()

  let homeLocation = location.pathname === '/home' || location.pathname === '/'
  let urlId = location.pathname.split('/playlist/')[1]

  const handleScroll = () => {
    const scrollTop = myRef.current.scrollTop
    if (scrollTop >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const handleClick = () => {
    if (limit === 20) {
      setLimit(50)
    } else {
      setLimit(20)
    }
  }

  useEffect(() => {
    spotifyApi.setAccessToken(token)

    // Get Current User's Recently Played Tracks
    spotifyApi
      .getMyRecentlyPlayedTracks({
        limit: myLimit,
      })
      .then((data) => setRecentlyPlayed(data.items, data.limit))
      .catch((err) => console.error('error', err))

    spotifyApi
      .getPlaylist(urlId)
      .then((data) => {
        const {
          images,
          name,
          owner: { display_name },
          tracks: { total, items },
          type,
        } = data || {}

        const finalData = {
          images,
          name,
          owner: { display_name },
          tracks: { total, items },
          type,
        }

        setPlaylist(finalData)
      })
      .catch((err) => console.error('error', err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myLimit, urlId])

  return (
    <>
      <BodyContainer
        ref={myRef}
        onScroll={handleScroll}
        homeLocation={homeLocation}
      >
        <Header
          navbar={navbar}
          dropdownData={dropdownData}
          image={currentUser?.images[0]}
          name={currentUser?.display_name}
        />

        <Route exact path={['/home', '/', '/#']}>
          <Home
            title={'Recently played'}
            seeAll={true}
            limit={limit}
            handleClick={handleClick}
            recentlyPlayed={recentlyPlayed}
          />
        </Route>

        <Route exact path="/search">
          <h4>Search</h4>
        </Route>
        <Route exact path="/collection/playlists">
          <h4>Library</h4>
        </Route>
        <Route exact path="/playlist/:id">
          <Playlist
            spotifyApi={spotifyApi}
            type={type}
            name={name}
            images={images}
            owner={owner?.display_name}
            tracks={tracks}
          />
        </Route>
      </BodyContainer>
    </>
  )
}

const mapStateToProps = (state) => ({
  user: state.user,
  playback: state.playback,
  playlists: state.playlists,
})

const mapDispatchToProps = (dispatch) => ({
  setRecentlyPlayed: (recentlyPlayed, limit) =>
    dispatch(setRecentlyPlayed(recentlyPlayed, limit)),
  setPlaylist: (playlist) => dispatch(setPlaylist(playlist)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
