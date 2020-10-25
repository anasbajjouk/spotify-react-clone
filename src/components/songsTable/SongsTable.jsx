import React from 'react'
import { SubSection, SubSectionColumn } from './SongsTable.styles'

const SongsTable = ({ songs }) => {
  return (
    <section>
      <SubSection>
        <SubSectionColumn>#</SubSectionColumn>
        <SubSectionColumn>TITLE</SubSectionColumn>
        <SubSectionColumn>ALBUM</SubSectionColumn>
        <SubSectionColumn>DATE ADDED</SubSectionColumn>
        <SubSectionColumn>Clock</SubSectionColumn>
      </SubSection>
      {songs &&
        songs.map((song, i) => {
          const { explicit, duration_ms, artists, album } = song?.track
          console.log('song', song)
          return (
            <SubSection>
              <SubSectionColumn>{i + 1}</SubSectionColumn>
              <SubSectionColumn>{song.track.name}</SubSectionColumn>
              <SubSectionColumn>{album.name}</SubSectionColumn>
              <SubSectionColumn>{song.added_at}</SubSectionColumn>
              <SubSectionColumn>{duration_ms}</SubSectionColumn>
            </SubSection>
          )
        })}
    </section>
  )
}

export default SongsTable
