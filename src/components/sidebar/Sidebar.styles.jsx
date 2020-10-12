import styled from 'styled-components'

export const SidebarContainer = styled.div`
  font-size: ${({ theme }) => theme.typography.regular};
  flex: 0.15;
  background-color: ${({ theme }) => theme.darkTheme.black};
  color: ${({ theme }) => theme.darkTheme.text};
  min-height: 100vh;
  padding-left: 20px;
  padding-right: 10px;
  min-width: 230px;

  & > img {
    object-fit: contain;
    padding: 12px;
    margin: 20px 0;
    height: 80px;
  }

  & > .playlists {
    color: ${({ theme }) => theme.darkTheme.grey};
    margin: 20px 0 10px 0;
    letter-spacing: 0.1rem;
    font-size: ${({ theme }) => theme.typography.regular};
    font-weight: ${({ theme }) => theme.font.medium};
  }

  & > hr {
    border: none;
    height: 1px;
    background-color: #333;
    margin-right: 50px;
    margin-bottom: 20px;
  }
`
