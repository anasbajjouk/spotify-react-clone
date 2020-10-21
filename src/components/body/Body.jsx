import React, { useEffect, useRef, useState } from 'react'
import { Route } from 'react-router-dom'
import Header from '../header/Header'
import { BodyContainer } from './Body.styles'
import { dropdownData } from '../../common/data'

const Body = ({spotifyApi}) => {
  const [navbar, setNavbar] = useState(false)
  const myRef = useRef()

  const handleScroll = () => {
    const scrollTop = myRef.current.scrollTop
    if (scrollTop >= 40) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  useEffect(() => {

  }, [])

  return (
    <BodyContainer ref={myRef} onScroll={handleScroll}>
      <Header navbar={navbar} dropdownData={dropdownData} />

      <Route exact path="/search">
        <h4>Search</h4>
      </Route>
      <Route exact path="/collection/playlists">
        <h4>Library</h4>
      </Route>
    </BodyContainer>
  )
}

export default Body
