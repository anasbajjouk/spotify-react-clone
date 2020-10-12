import React from 'react'
import Spotify_Logo_RGB_White from '../../assets/image/logos/svg/Spotify_Logo_RGB_White.svg'
import Options from '../options/Options'
import { SidebarContainer } from './Sidebar.styles'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import AddIcon from '@material-ui/icons/Add'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

const Sidebar = ({ playlists }) => {
  const { myPlaylists } = playlists

  return (
    <SidebarContainer>
      <img src={Spotify_Logo_RGB_White} alt="Spotify_Logo" />
      <NavLink to="/home" exact activeClassName="selected">
        <Options title="Home" Icon={HomeIcon} />
      </NavLink>

      <NavLink to="/search" exact>
        <Options title="Search" Icon={SearchIcon} />
      </NavLink>

      <NavLink to="/collection/playlists" exact>
        <Options title="Your Library" Icon={LibraryBooksIcon} />
      </NavLink>

      <div className="playlists">PLAYLISTS</div>
      <Options title="Your Library" Icon={AddIcon} square={true} />

      <hr />
      {myPlaylists?.map((playlist, i) => {
        return (
          <Link to={`/playlist/${playlist.id}`}>
            <Options title={playlist.name} key={i + 150} />
          </Link>
        )
      })}
    </SidebarContainer>
  )
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
})

export default connect(mapStateToProps, null)(Sidebar)
