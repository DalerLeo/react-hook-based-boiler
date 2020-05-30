import React, { FunctionComponent } from 'react'
import { Container } from 'components/StyledElems'
import styled from 'styled-components'
import BaseLayout from './BaseLayout'

const Wrapper = styled.div`
  background-color: #FBFBFD;
`
const MainLayout: FunctionComponent = props => {
  return (
  /*    <BaseLayout> */
    <Wrapper>
      {props.children}
    </Wrapper>
  /*    </BaseLayout> */
  )
}

export default MainLayout
