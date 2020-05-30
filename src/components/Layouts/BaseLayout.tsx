import { LOGIN } from 'constants/routes'
import React from 'react'
import { Redirect } from 'react-router-dom'
import { Container } from 'components/StyledElems'

import ConfirmDialog from 'components/ConfirmDialog'
import useFetchUserInfo from './useFetchUserInfo'

const BaseLayout = props => {
  const { loading, isAuth } = useFetchUserInfo()

  if (loading) {
    return <Container>LOADING . . . . . . . . . . </Container>
  }

  if (!isAuth) {
    return <Redirect to={LOGIN} />
  }
  return (
    <>
      <ConfirmDialog/>
      {props.children}
    </>
  )
}

export default BaseLayout
