import { LOGIN } from 'constants/routes'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Container } from 'components/StyledElems'
import Navigation from 'components/Navigation'
import useFetchUserInfo from './useFetchUserInfo'

const BaseLayout = props => {
  const history = useHistory()
  const { loading, isAuth } = useFetchUserInfo()

  console.warn(loading)
  console.warn(isAuth)
  if (loading) {
    return <Container>LOADING . . . . . . . . . . </Container>
  }

  if (!isAuth) {
    history.replace(LOGIN)
  }
  return (
    <>
      {props.children}
    </>
  )
}

export default BaseLayout
