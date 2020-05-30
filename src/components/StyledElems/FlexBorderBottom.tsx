import styled from 'styled-components'
import DisplayFlex, { Props } from 'components/StyledElems/DisplayFlex'

const FlexBorder = styled(DisplayFlex)<Props>`
  border-bottom: ${props => props.theme.border};
  margin-bottom: 12px;
  padding-bottom: 16px;
  :last-child {
  border-bottom: none;
  margin-bottom: 0;
  padding-bottom: 0;
  }
`

export default FlexBorder
