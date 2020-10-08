import React from 'react'
import { loginUrl } from '../../spotify'
import { LoginContainer, LogoImg } from './Login.styles.jsx'
// import spofityGreenLogo from '../../assets/image/logos/png/Spotify_Logo_RGB_Green.png'
import spofityGreenSvgLogo from '../../assets/image/logos/svg/Spotify_Logo_RGB_Green.svg'

const Login = () => {
  return (
    <LoginContainer>
      <LogoImg src={spofityGreenSvgLogo} alt="spotify logo" />
      <a href={loginUrl}>LOG IN</a>
    </LoginContainer>
  )
}

export default Login
