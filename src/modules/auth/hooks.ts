import * as API from 'constants/api'
import usePostApi from 'hooks/useRequest/usePostApi'
import { setCookie } from 'utils/cookie'
import { prop } from 'ramda'
import { useDetailGetApi } from 'hooks/useRequest'

const ONE_YEAR = 365

export const useLogin = () => {
  const { state, post } = usePostApi(API.LOGIN)

  const onSubmit = async (data) => {
    try {
      const { data: response } = await post(data)
      const token = prop('token', response)
      await setCookie('token', token, ONE_YEAR)
      return response
    } catch (e) {
      return Promise.reject(e)
    }
  }
  return { ...state, onSubmit }
}
export const useCheckToken = () => {
  const { get, ...state } = useDetailGetApi(API.CHECK_TOKEN)

  const onSubmit = async (token) => {
    try {
      const response = await get(token)
      return response
    } catch (e) {
      return Promise.reject(e)
    }
  }
  return { ...state, checkToken: onSubmit }
}

export const useRegister = () => {
  const { state, post } = usePostApi(API.REGISTER)

  const onSubmit = async (data) => {
    try {
      const { data: response } = await post(data)
      return response
    } catch (e) {
      console.warn('EEE: ', e)
      return Promise.reject(e)
    }
  }
  return { ...state, onSubmit }
}
