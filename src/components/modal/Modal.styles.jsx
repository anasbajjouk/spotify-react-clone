import styled from 'styled-components'

export const ModalContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: ${({ show }) => (show ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`

export const ModalSection = styled.section`
  width: 80%;
  display: flex;
  flex-flow: column nowrap;

  & > button[type='submit'] {
    background-color: ${({ theme }) => theme.green};
    color: white;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    padding: 20px;
    outline: none;
    width: 50%;
    align-self: center;
  }

  & > .close {
    border: none;
    background: none;
    position: absolute;
    top: 26%;
    left: 50%;
    font-size: 50px;
    color: white;
    cursor: pointer;
    outline: none;
  }

  & > input {
    padding: 10px;
    text-indent: 20px;
    border: none;
    border-radius: 50px;
    height: 10vh;
    width: 100%;
    outline: none;
    font-size: 25px;
    margin-bottom: 3%;
    &:focus {
      outline: none;
    }
  }
`
