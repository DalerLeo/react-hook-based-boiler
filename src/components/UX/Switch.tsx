import React from 'react'
import styled from 'styled-components'

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 32px;
  height: 16px;
  input { 
  opacity: 0;
  width: 0;
  height: 0;
}
`
const Span = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #E0E0E0;
  -webkit-transition: .4s;
  transition: .4s;
  
  border-radius: 10px;
  &::after {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  right: 1px;
  border-radius: 50%;
  bottom: 1px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
`
const Input = styled.input`
 &:checked + ${Span} {
 background-color: ${props => props.theme.colors.primary.default};
   &::after {
    transform: translateX(-16px);
    }
 }
`

const Wrapper = styled.div`
  color: ${props => props.theme.colors.black}
`

const SwitchInput = props => {
  const { label, ...rest } = props
  return (
    <Wrapper {...rest}>
      {label}&nbsp;
      <Label>
        <Input type="checkbox" />
        <Span />
      </Label>
    </Wrapper>
  )
}

export default styled(SwitchInput)``
