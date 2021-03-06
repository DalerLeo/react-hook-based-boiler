import React, { FunctionComponent } from 'react'
import { Container } from 'components/StyledElems'
import BaseLayout from './BaseLayout'

const Layout: FunctionComponent = props => {
  return (
    <BaseLayout>
      <Container>
        {props.children}
      </Container>
    </BaseLayout>
  )
}

export default Layout
