import axios from 'axios'
import { path, equals, curry, prop, compose, isNil } from 'ramda'
import { API_URL } from '../constants/api'
import responseToCamelCase from './responseToCamelCase'
import expireDocumentCookie from './expireDocumentCookie'
import { getCookie } from './cookie'

const UNAUTHORIZED = 401

export const getPayloadFromSuccess = response => {
  return prop('data', response)
}

export const getPayloadFromError = compose(
  data => !isNil(data) && Promise.reject(data),
  path(['response', 'data'])
)
const errorInterceptors = curry((error) => {
  const status = path(['response', 'status'], error)

  if (equals(UNAUTHORIZED, status)) {
    //    console.warn('AXIOS ERROR CLEAR')
    expireDocumentCookie()
    //    window.location.pathname = '/login'
  }
  return Promise.reject(error)
})

const axiosRequest = (noAuth = false) => {
  const token = getCookie('token')

  axios.defaults.baseURL = `${API_URL}`
  axios.defaults.transformResponse = [responseToCamelCase]
  axios.defaults.timeout = 100000

  if (!noAuth) {
    axios.defaults.headers.common.Authorization = token ? `Token ${token}` : ''
  } else {
    axios.defaults.headers.common = {}
  }

  axios.interceptors.response.use(
    response => response,
    errorInterceptors
  )

  return axios
}

export default axiosRequest
