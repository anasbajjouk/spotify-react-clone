import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import { BlackCircle } from '../Elements'
import Dropdown from '../dropdown/Dropdown'
import { HeaderContainer } from './Header.styles'

const Header = ({ navbar, dropdownData }) => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <HeaderContainer active={navbar}>
        <div className="header__left">
          <BlackCircle>
            <NavigateBeforeIcon />
          </BlackCircle>

          <BlackCircle>
            <NavigateNextIcon />
          </BlackCircle>
        </div>

        <div className="header__right" onClick={() => setShowMenu(!showMenu)}>
          <BlackCircle justifyMyContent={'space-between'}>
            <Avatar
              style={{ height: '30px', width: '30px' }}
              alt={'lol'}
              src={
                'https://www.befunky.com/images/wp/wp-2014-08-milky-way-1023340_1280.jpg?auto=webp&format=jpg&width=1184'
              }
            />
            <h4>Anas Bajjouk</h4>
            {showMenu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          </BlackCircle>
          {showMenu && <Dropdown data={dropdownData} />}
        </div>
      </HeaderContainer>
    </>
  )
}

export default Header
