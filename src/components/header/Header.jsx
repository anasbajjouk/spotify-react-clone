import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import SearchIcon from '@material-ui/icons/Search'
import { BlackCircle } from '../Elements'
import Dropdown from '../dropdown/Dropdown'
import { HeaderContainer } from './Header.styles'
import { handleKeyPress } from '../../common/utils'

const Header = ({
  navbar,
  dropdownData,
  image,
  name,
  searchLocation,
  searchInput,
  setSearchInput,
  sendSearch,
  history,
}) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <HeaderContainer active={navbar} id="header">
        <div className="header__left">
          <div className="buttons">
            <BlackCircle onClick={() => history.goBack()}>
              <NavigateBeforeIcon />
            </BlackCircle>

            <BlackCircle onClick={() => history.goForward()}>
              <NavigateNextIcon />
            </BlackCircle>
          </div>

          {searchLocation && (
            <div className="searchField">
              <SearchIcon />
              <input
                onKeyPress={(e) => handleKeyPress(e, 'Enter', sendSearch)}
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
                type="text"
                placeholder="Search for Artists, Songs or Podcasts"
              />
            </div>
          )}
        </div>

        <div className="header__right" onClick={() => setShowMenu(!showMenu)}>
          <BlackCircle justifyMyContent={'space-between'}>
            <Avatar
              style={{ height: '30px', width: '30px' }}
              alt={name}
              src={image?.url}
            />
            <h4>{name}</h4>
            {showMenu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </BlackCircle>
          {showMenu && <Dropdown data={dropdownData} />}
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header
