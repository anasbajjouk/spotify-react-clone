import React from 'react'
import { truncate } from '../../common/utils'
import { FooterLeftContainer } from './FooterLeft.styles'

const FooterLeft = ({playback, images, name, artists}) => {
    return (
      <FooterLeftContainer>
          {Object.values(playback?.currentPlaybackState).length > 0 && (
            <>
              <img src={images[2].url} alt={truncate(name, 15)} />
              <div className="footer__songInfo">
                <h4>{truncate(name, 45)}</h4>
                <p>
                  {truncate(
                    artists?.map((artist) => artist?.name).join(', '),
                    45
                  )}
                </p>
              </div>
            </>
          )}
      </FooterLeftContainer>
    )
}

export default FooterLeft
