import React, { useEffect, useRef, useState } from 'react'
import { Route, useLocation } from 'react-router-dom'
import Header from '../header/Header'
import { BodyContainer } from './Body.styles'
import { dropdownData } from '../../common/data'
import { connect } from 'react-redux'
import { setRecentlyPlayed } from '../../redux/playback/playback.actions'
import Home from '../../pages/home/Home'
import Playlist from '../../pages/playlist/Playlist'
import {
  setGenres,
  setPlaylist,
  setSearchResults,
} from '../../redux/playlists/playlists.actions'
import YourLibrary from '../../pages/yourLibrary/YourLibrary'
import SearchPage from '../../pages/searchPage/SearchPage'

// import Page404 from '../../pages/page404/page-404.component'

const Body = ({
  spotifyApi,
  user,
  playback,
  playlists,
  setRecentlyPlayed,
  setPlaylist,
  setGenres,
  setSearchResults,
}) => {
  const [navbar, setNavbar] = useState(false)
  const [myLimit, setLimit] = useState(20)
  const [searchInput, setSearchInput] = useState('')
  const myRef = useRef()

  const { token, currentUser } = user || {}
  const {
    recentPlayedTracks: { limit, recentlyPlayed },
  } = playback || {}

  const myPlaylists = playlists?.myPlaylists
  const { images, name, owner, tracks, type } = playlists?.myPlaylist || {}

  const location = useLocation()

  let homeLocation = location.pathname === '/home' || location.pathname === '/'
  let searchLocation = location.pathname === '/search'

  let urlId = location.pathname.split('/playlist/')[1]

  const handleScroll = () => {
    const scrollTop = myRef.current.scrollTop
    if (scrollTop >= 10) {
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

  const sendSearch = () => {
    searchInput.length > 0 &&
      spotifyApi
        .searchTracks(searchInput, {limit:40})
        .then((data) => setSearchResults(data?.tracks))
        .catch((err) => console.error(err))
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

    // Get available genre seeds
    spotifyApi
      .getAvailableGenreSeeds()
      .then((data) => setGenres(data.genres))
      .catch((err) => console.error('error', err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myLimit, urlId, token])

  return (
    <>
      <BodyContainer
        ref={myRef}
        onScroll={handleScroll}
        homeLocation={homeLocation}
      >
        <Header
          sendSearch={sendSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          navbar={navbar}
          dropdownData={dropdownData}
          image={currentUser?.images[0]}
          name={currentUser?.display_name}
          searchLocation={searchLocation}
        />

        <Route exact path={['/home', '/']}>
          <Home
            title={'Recently played'}
            seeAll={true}
            limit={limit}
            handleClick={handleClick}
            recentlyPlayed={recentlyPlayed}
          />
        </Route>

        <Route exact path="/search">
          <SearchPage
            searchInput={searchInput}
            genres={playlists?.myGenres}
            myResults={playlists?.mySearchList}
          />
        </Route>

        <Route exact path="/collection/playlists">
          <YourLibrary myPlaylists={myPlaylists} />
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
  setGenres: (genres) => dispatch(setGenres(genres)),
  setSearchResults: (searchResults) =>
    dispatch(setSearchResults(searchResults)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Body)
