import React from 'react'
import { NavLink } from 'react-router-dom'
import { OptionContainer } from './Options.styles'

const Options = ({ title, Icon, square, toPath, clicked }) => {
  return (
    <OptionContainer>
      {toPath ? (
        <NavLink to={toPath} exact activeClassName="selected">
          {Icon && <Icon className={`option_icon `} />}
          {Icon ? <h4>{title}</h4> : <p className="no_icon">{title}</p>}
        </NavLink>
      ) : (
        <div
          onClick={clicked}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <Icon className={`option_icon ${square ? 'square' : 'null'} `} />
          <h4>{title}</h4>
        </div>
      )}
    </OptionContainer>
  )
}

export default Options
