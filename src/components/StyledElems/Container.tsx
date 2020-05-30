import styled from 'styled-components'

export default styled.div<{offset?: string}>`
  box-sizing: border-box;
  color: ${props => props.theme.colors.text};
  height: 100%;
  padding: 15px 40px;
  max-width: 1440px;
  margin: 0 auto;
  min-height: ${props => props.offset ? `calc(100vh - ${props.offset})` : '100vh'};
`
