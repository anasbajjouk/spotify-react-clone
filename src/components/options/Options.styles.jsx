import styled from 'styled-components'

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${({ theme }) => theme.darkTheme.grey};
  height: 40px;
  transition: 200ms background color ease-in;
  margin-bottom: 10px;

  &:hover {
    color: ${({ theme }) => theme.white};
  }

  &:hover .square {
    background: ${({ theme }) => theme.white};
  }

  &:active {
    color: ${({ theme }) => theme.white};
  }

  & .square {
    background-color: ${({ theme }) => theme.darkTheme.grey};
    height: 30px;
    width: 30px;
    color: ${({ theme }) => theme.darkTheme.black};
    font-size: 0.3rem;
  }

  & > .option_icon {
    margin-right: 10px;
  }

  & > p {
    font-weight: 400;
    font-size: ${({ theme }) => theme.typography.regular};
  }
`
