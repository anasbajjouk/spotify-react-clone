import styled from 'styled-components'

export const SidebarContainer = styled.div`
  font-size: ${({ theme }) => theme.typography.small};
  display: flex;
  flex: 0.15;
  flex-direction: column;
  background-color: ${({ theme }) => theme.darkTheme.black};
  color: ${({ theme }) => theme.darkTheme.text};
  height: 87vh;
  padding-left: 20px;
  padding-right: 10px;
  min-width: 240px;
  max-width: 240px;

  & .all_playlists {
    overflow-y: auto;
    margin-bottom: 5px;
  }

  /* width */
  .all_playlists::-webkit-scrollbar {
    width: 5px;
    border-radius: 5px;
  }

  .all_playlists::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
    margin-bottom: 5px;
  }

  .all_playlists::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;

    &:hover {
      background: #555;
    }
  }

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
    font-size: inherit;
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
