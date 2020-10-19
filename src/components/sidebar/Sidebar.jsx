import React from 'react'
import Spotify_Logo_RGB_White from '../../assets/image/logos/svg/Spotify_Logo_RGB_White.svg'
import Options from '../options/Options'
import { SidebarContainer } from './Sidebar.styles'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks'
import AddIcon from '@material-ui/icons/Add'
import { connect } from 'react-redux'
import { truncate } from '../../common/utils'

const Sidebar = ({ playlists }) => {
  const { myPlaylists } = playlists

  return (
    <SidebarContainer>
      <img src={Spotify_Logo_RGB_White} alt="Spotify_Logo" />

      <Options title="Home" Icon={HomeIcon} toPath="/home" />

      <Options title="Search" Icon={SearchIcon} toPath="/search" />

      <Options
        title="Your Library"
        Icon={LibraryBooksIcon}
        toPath="/collection/playlists"
      />

      <div className="playlists">PLAYLISTS</div>
      <Options title="Create Playlist" Icon={AddIcon} square={true} />

      <hr />

      <div className="all_playlists">

        {myPlaylists?.map((playlist, i) => {
          return (
            <Options
              title={truncate(playlist.name, 18)}
              // title={(playlist.name)}
              key={i + 150}
              toPath={`/playlist/${playlist.id}`}
            />
          )
        })}
      </div>
    </SidebarContainer>
  )
}

const mapStateToProps = (state) => ({
  playlists: state.playlists,
})

export default connect(mapStateToProps, null)(Sidebar)
