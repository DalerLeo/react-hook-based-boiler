import styled from 'styled-components'

const Notify = styled.span<{active: boolean}>`
  display: inline-block;
  border-radius: 50%;
  background: ${props => props.active ? '#F96526' : 'transparent'};
  height: 8px;
  width: 8px;
  vertical-align: middle;
`
export default Notify
