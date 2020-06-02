import * as ROUTES from 'constants/routes'
import React from 'react'
import { useCheckToken, useLogin } from 'modules/auth/hooks'
import { useHistory } from 'react-router-dom'
import { mapResponseToFormError } from 'utils/form'
import useUserData from 'hooks/useUserData'
import SignIn from './SignIn'

const SignInContainer = () => {
  const { onSubmit, ...state } = useLogin()
  const { checkToken } = useCheckToken()

  const history = useHistory()
  const { setData } = useUserData()
  const onLogin = async (values) => {
    try {
      const { token } = await onSubmit(values)
      const response = await checkToken(token)
      setData(response)
      return history.push(ROUTES.ROOT_PATH)
    } catch (e) {
      console.error('ddd', e)
      return mapResponseToFormError(e)
    }
  }
  return (
    <SignIn onSubmit={onLogin} state={state} />
  )
}

export default SignInContainer
