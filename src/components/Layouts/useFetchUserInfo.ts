import { useEffect, useState } from 'react'
import { getCookie } from 'utils/cookie'
import { isNil } from 'ramda'
import useUserData from 'hooks/useUserData'
import { useCheckToken } from 'modules/auth/hooks'

const useFetchUserInfo = () => {
  const cookieToken = getCookie('token')
  const [isAuth, setIsAuth] = useState(Boolean(cookieToken))
  const { clearData, setData, fetchingData, state: userData } = useUserData()

  const { checkToken } = useCheckToken()

  console.warn(cookieToken, isAuth, userData)
  //  const token = path(['data', 'token'], userData)

  useEffect(() => {
    if ((cookieToken) && isNil(userData.data)) {
      //      console.warn(cookieToken, token, userInfo)
      console.warn('------ REFETCHING ------')
      console.warn(cookieToken)
      console.warn(userData.data)

      fetchingData()
      checkToken(cookieToken)
        .then(response => {
          setData(response)
          setIsAuth(true)
        })
        .catch(eee => {
          setIsAuth(false)
          console.warn('FAILED')
          clearData()
        })
    }
    if (!cookieToken) {
      setIsAuth(false)
    }
  }, [])

  const loading = userData.loading

  return {
    isAuth,
    loading
  }
}

export default useFetchUserInfo
