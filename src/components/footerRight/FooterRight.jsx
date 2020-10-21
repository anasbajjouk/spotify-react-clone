import React from 'react'
import VolumeDownIcon from '@material-ui/icons/VolumeDown'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import Slider from '@material-ui/core/Slider'
import { FooterRightContainer } from './FooterRight.styles'

const FooterRight = ({volume, handleVolume}) => {
    return (
      <FooterRightContainer>
        <PlaylistPlayIcon />
        <VolumeDownIcon />
        <Slider
          value={volume}
          defaultValue={100}
          aria-labelledby="discrete-slider-volume"
          valueLabelDisplay="auto"
          min={0}
          max={100}
          // marks={true}
          onChange={handleVolume}
          onInput={handleVolume}
          className="slider footer__green"
        />
      </FooterRightContainer>
    )
}

export default FooterRight