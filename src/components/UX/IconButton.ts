import styled from 'styled-components'
import { DOMAttributes } from 'react'

const IconButtonBase = styled.span`
  display: flex;
  cursor: pointer;
  color: ${props => props.theme.colors.grey}
  border-radius: ${props => props.theme.borderRadius.sm}
  transition: background-color 200ms;
  :hover {
    color: ${props => props.theme.colors.primary.default}    
    background-color: ${props => props.theme.colors.primary.hover};
  }
`

export const IconButtonSmall = styled(IconButtonBase)`
  padding: 5px;
`

export const IconButton = styled(IconButtonBase)<DOMAttributes<any>>`
  padding: 8px;
`
