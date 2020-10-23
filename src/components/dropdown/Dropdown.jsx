import React from 'react'
import { DropdownContainer } from './Dropdown.styles'

const Dropdown = ({ data = [] }) => {
  return (
    <DropdownContainer>
      <ul>
        {data.map((info) => (
          <a href={info.link} target="_blank" rel="noopener noreferrer">
            <li>{info.text} </li>
          </a>
        ))}
      </ul>
    </DropdownContainer>
  )
}

export default Dropdown
