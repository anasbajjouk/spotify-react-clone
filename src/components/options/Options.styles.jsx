import styled from 'styled-components'

export const OptionContainer = styled.div`
  &,
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: ${({ theme }) => theme.darkTheme.grey};
    height: 40px;
    transition: 200ms background color ease-in;
    margin-bottom: 10px;
    width: 100%;
    font-size: ${({ theme }) => theme.typography.small};

    &:last-child {
      margin-bottom: 0px;
    }
  }

  &,
  a:hover {
    color: ${({ theme }) => theme.white};
  }

  &:hover .square {
    background: ${({ theme }) => theme.white};
  }

  & .selected {
    border-radius: 7px;
    background-color: #282828;
    color: white;
    padding-left: 20px;
    width: 90%;
  }

  & .square {
    background-color: ${({ theme }) => theme.darkTheme.grey};
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.darkTheme.black};
    font-size: 0.3rem;
  }

  & .option_icon {
    margin-right: 10px;

    & + h4 {
      color: inherit;
    }
  }

  & p {
    font-weight: 400;
    font-size: inherit;
  }
`
