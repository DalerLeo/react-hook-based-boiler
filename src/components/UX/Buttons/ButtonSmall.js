import styled from 'styled-components'
import { Button } from 'ui-cubic/dist/index.es'

export default styled(Button)`
  border-radius: ${props => props.theme.cube.borderRadius.sm};
  font-size: 14px;
  font-weight: normal;
  height: 44px;
  padding: 0 20px;
`
