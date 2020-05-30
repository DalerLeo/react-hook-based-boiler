import styled from 'styled-components'

const BaseTag = styled.span`
  white-space: nowrap;
  border-radius: 7px;
  display: inline-block;
  padding: 5px 10px;
`
export const Approved = styled(BaseTag)`
    background: #D1EFD2;
    color: #09260A;
`

export const Submitted = styled(BaseTag)`
  background-color: #FBEECF;
  color: #502506;
`

export const Rejected = styled(BaseTag)`
  background: #FFDEE3;
  color: #6E1B2D;
`

export const UnSubmitted = styled(BaseTag)`
  background: #F5F6F7;
  color: #9AA6AC;
`
