import React, { FunctionComponent } from 'react'
import { Container } from 'components/StyledElems'
import BaseLayout from './BaseLayout'

const Layout: FunctionComponent = props => {
  return (
    <Container>
      {props.children}
    </Container>
  )
  return (
    <BaseLayout>
      {props.children}
    </BaseLayout>
  )
}

export default Layout
