import styled from 'styled-components'

type Props = {
  align: 'left' | 'center' | 'right' | 'justify' | 'inherit';
}
const TextAlign = styled('div')<Props>`
  text-align: ${props => props.align};
`

TextAlign.defaultProps = {
  align: 'inherit'
}

export default TextAlign
