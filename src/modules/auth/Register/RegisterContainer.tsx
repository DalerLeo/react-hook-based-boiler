import * as ROUTES from 'constants/routes'
import React from 'react'

import { getSerializedData } from 'utils/get'
import { useHistory } from 'react-router-dom'
import { mapResponseToFormError } from 'utils/form'
import { useRegister } from '../hooks'
import Register, { fields } from './Register'

const serializer = values => getSerializedData(fields, values)

const RegisterContainer = () => {
  const { onSubmit, ...state } = useRegister()
  const history = useHistory()

  const onRegister = (data) => {
    return onSubmit(serializer(data))
      .then((eee) => {
        console.warn(eee)
        history.push(ROUTES.LOGIN)
      })
      .catch(mapResponseToFormError)
  }

  return (
    <Register onSubmit={onRegister} state={state} />
  )
}

export default RegisterContainer
