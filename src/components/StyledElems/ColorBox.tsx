import styled from 'styled-components'
import hexToRgb from 'utils/hexToRgb'

const ColorBox = styled.div<{padding?: string; color?: string}>`
  background: ${({ theme, color = hexToRgb(theme.colors.primary.default, '0.05'), }) => color};
/* Gray 5 */
border-radius: ${props => props.theme.borderRadius.md};
padding: ${props => props.padding};
`

export default ColorBox
