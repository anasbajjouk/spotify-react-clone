import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import SkipNextIcon from '@material-ui/icons/SkipNext'
import ShuffleIcon from '@material-ui/icons/Shuffle'
import RepeatIcon from '@material-ui/icons/Repeat'
import PauseCircleOutlineIcon from '@material-ui/icons/PauseCircleOutline'
import { FooterCenterContainer } from './FooterCenter.styles'
import Slider from '@material-ui/core/Slider'

const FooterCenter = ({
  shuffleState,
  playing,
  repeatState,
  // duration_ms,
  // value,
  // marks,
  skipNext,
  handleShuffle,
  handlePlayPause,
  skipPrevious,
  handleRepeat,
  // handleSlide,
}) => {
  return (
    <FooterCenterContainer>
      <div className="footerCenter__upper">
        <div
          className={`${
            shuffleState
              ? 'footer__green footer__green-active'
              : 'footer__green'
          } `}
        >
          <ShuffleIcon onClick={handleShuffle} />
        </div>

        <SkipPreviousIcon onClick={skipNext} className="footer__icon" />
        {playing ? (
          <PauseCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        ) : (
          <PlayCircleOutlineIcon
            onClick={handlePlayPause}
            fontSize="large"
            className="footer__icon"
          />
        )}

        <SkipNextIcon onClick={skipPrevious} className="footer__icon" />
        <div
          badge={`${repeatState === 'track' ? 1 : ''}`}
          className={`${
            repeatState !== 'off'
              ? 'footer__green footer__green-active'
              : 'footer__green'
          } `}
        >
          <RepeatIcon onClick={handleRepeat} />
        </div>
      </div>

      <div className="footerCenter__lower" style={{ }}>
        <Slider
          min={0}
          // max={duration_ms}
          // value={value}
          // onChange={handleSlide}
          // marks={marks}
          aria-labelledby="continuous-slider"
          className="slider footer__green"
        />
      </div>
    </FooterCenterContainer>
  )
}

export default FooterCenter
