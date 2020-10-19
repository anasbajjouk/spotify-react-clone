import React from 'react'

const Dot = ({ color = 'currentColor', size = 10, width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 10 10"
      width={width || size}
      height={height || size}
    >
      <circle cx="50%" cy="50%" r="1.5" fill={color || 'none'} />
    </svg>
  )
}

export default Dot
