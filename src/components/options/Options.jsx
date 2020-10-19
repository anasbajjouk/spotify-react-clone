import React from 'react'
import { NavLink } from 'react-router-dom'
import { OptionContainer } from './Options.styles'

const Options = ({ title, Icon, square, toPath }) => {
  return (
    <OptionContainer>
      {toPath ? (
        <NavLink to={toPath} exact activeClassName="selected">
          {Icon && (
            <Icon className={`option_icon `} />
          )}
          {Icon ? <h4>{title}</h4> : <p className="no_icon">{title}</p>}
        </NavLink>
      ) : (
        <>
          <Icon className={`option_icon ${square ? 'square' : 'null'} `} />
          <h4>{title}</h4>
        </>
      )}
    </OptionContainer>
  )
}

export default Options
