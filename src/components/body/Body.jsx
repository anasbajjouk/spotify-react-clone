import React, { useEffect, useRef, useState } from 'react'
import { Route, useLocation, useHistory, Switch } from 'react-router-dom'
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
import Page404 from '../../pages/page404/page-404.component'
import errorHandler from '../../api/errorHandler'
import { toast } from 'react-toastify'

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
  const history = useHistory()

  let homeLocation = location.pathname === '/'
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
        .searchTracks(searchInput, { limit: 20 })
        .then((data) => setSearchResults(data?.tracks))
        .catch((err) => errorHandler(err.response))
  }

  useEffect(() => {
    spotifyApi.setAccessToken(token)
    toast.warning(
      'This app is only web based, phones will not show it properly.',
      { toastId: 'onphone' }
    )
    toast.info(
      'Try to connect your device to your spotify first,we recommand to play some song as well in order to use this app. If nothing shows up, please do refresh the page! Please keep in mind this app is only a demo of the FE skills.',
      { toastId: 'load' }
    )

    // Get Current User's Recently Played Tracks
    spotifyApi
      .getMyRecentlyPlayedTracks({
        limit: myLimit,
      })
      .then((data) => setRecentlyPlayed(data.items, data.limit))
      .catch((err) => errorHandler(err.response))

    urlId &&
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
        .catch((err) => errorHandler(err.response))

    // Get available genre seeds
    spotifyApi
      .getAvailableGenreSeeds()
      .then((data) => setGenres(data.genres))
      .catch((err) => errorHandler(err.response))
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
          history={history}
          sendSearch={sendSearch}
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          navbar={navbar}
          dropdownData={dropdownData}
          image={currentUser?.images[0]}
          name={currentUser?.display_name}
          searchLocation={searchLocation}
        />

        <Switch>
          <Route exact path="/">
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

          <Route path="*" component={Page404} />
        </Switch>
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
