import animation from 'components/Skeletons/animation'
import { GREY } from 'components/Skeletons/colors'
import styled from 'styled-components'

const Loader = styled('div')<{width?: string}>`
  animation: ${animation};
  background-color: ${GREY};
  border-radius: 8px;
  height: 20px;
  max-width: ${props => props.width};
  width: 100%;
`

export default Loader
