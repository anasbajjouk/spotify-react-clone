import React from 'react'
import {
  convertToLocalDate,
  millisToMinutesAndSeconds,
} from '../../common/utils'
import { SectionSongRow, SubSection } from './SongsTable.styles'

const SongRow = ({ song, order }) => {
  const { explicit, duration_ms, artists, album } = song?.track

  return (
    <SectionSongRow>
      <SubSection>
        {order + 1}
        <img src={album?.images[2].url} alt="l" />
        <div>
          <h4>{song.track.name}</h4>
          <p>
            {explicit && <span className="explicit">E</span>}
            {artists.map((artist) => artist.name).join(', ')}
          </p>
        </div>
      </SubSection>
      <SubSection>{album.name}</SubSection>
      <SubSection>{convertToLocalDate(song.added_at)}</SubSection>
      <SubSection>{millisToMinutesAndSeconds(duration_ms)}</SubSection>
    </SectionSongRow>
  )
}

export default SongRow
