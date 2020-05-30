import * as API from 'constants/api'
import { prop } from 'ramda'
import { setCookie } from 'utils/cookie'
import axios, { getPayloadFromError, getPayloadFromSuccess } from '../../utils/axios'

export const loginAction = data => {
  const remember = prop('remember', data)
  const params = {
    username: prop('username', data),
    password: prop('password', data)
  }
  const ONE_DAY = 1
  const ONE_YEAR = 365

  const payload = axios({ })
    .post(API.LOGIN, params)
    .then(response => {
      const resp = prop('data', response)
      const token = prop('token', resp)
      setCookie('token', token, remember ? ONE_YEAR : ONE_DAY)
      return resp
    })
    .catch(getPayloadFromError)
}

export const logoutAction = () => {
  const payload = axios({ })
    .delete(API.LOGOUT)
    .then(getPayloadFromSuccess)
    .catch(getPayloadFromError)

  setCookie('token', '')
//    dispatch({ type: `${actionTypes.USER_INFO}_CLEAR` })
//    dispatch({ type: `${actionTypes.LOGIN}_CLEAR` })
}

export const userInfoFetch = token => {
  const payload = axios({ })
    .get(`${API.CHECK_TOKEN}${token}/`)
    .then(getPayloadFromSuccess)
    .catch(getPayloadFromError)
}
