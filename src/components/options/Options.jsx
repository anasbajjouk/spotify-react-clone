import React from 'react'
import { OptionContainer } from './Options.styles'

const Options = ({ title, Icon, square }) => {
  return (
    <OptionContainer>
      {Icon && (
        <Icon className={`option_icon ${square ? 'square' : 'null'} `} />
      )}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </OptionContainer>
  )
}

export default Options
