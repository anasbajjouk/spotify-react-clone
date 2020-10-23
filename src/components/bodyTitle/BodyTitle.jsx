import React from 'react'
import { H2, H3 } from '../Elements'
import { BodyTitleContainer } from './BodyTitle.styles'

const BodyTitle = ({ title, seeAll, limit, handleClick }) => {
  return (
    <BodyTitleContainer>
      <H2>{title}</H2>
      {seeAll && (
        <H3 onClick={handleClick}>{limit === 20 ? 'SEE ALL' : 'SEE LESS'}</H3>
      )}
    </BodyTitleContainer>
  )
}

export default BodyTitle
