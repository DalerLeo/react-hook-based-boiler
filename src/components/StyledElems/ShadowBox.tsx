import styled from 'styled-components'
import { DOMAttributes } from 'react'
import { Merge } from 'ramda'

const ShadowBox = styled.div<Merge<{padding?: string}, DOMAttributes<any>, 'flat'>>`
  background: #FFFFFF;
/* Gray 5 */

border: 1px solid #E0E0E0;
box-shadow: 0px 4px 15px rgba(211, 216, 224, 0.5);
border-radius: 10px;
padding: ${props => props.padding};
`

export default ShadowBox
