import { ImgHTMLAttributes } from 'react'
import styled from 'styled-components'

type Props = {
  src: string | null;
  highlight?: boolean;
  verticalAlign?: string;
}

const ImgDefault = styled.img.attrs(props => ({
  src: props.src || '',
  alt: 'pic'
}))`
`

const Img = styled(ImgDefault)<Props & ImgHTMLAttributes<any>>`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  min-width: 35px;
  box-shadow: ${props => props.highlight && `0px 0px 6px 1px ${props.theme.colors.primary.default}`};
  vertical-align: ${props => props.verticalAlign};

`

export default Img
