import { useContext } from 'react'
import { TUserDataContext, UserDataContext } from 'etc/context'
import { CLEAR, PENDING, SUCCESS } from 'hooks/useRequest/useRequestReducer'

const useUserData = () => {
  const { state, dispatch } = useContext<TUserDataContext>(UserDataContext)

  const setData = data => dispatch({ TYPE: SUCCESS, data })
  const clearData = () => dispatch({ TYPE: CLEAR })
  const fetchingData = () => dispatch({ TYPE: PENDING })

  return { setData, clearData, state, fetchingData }
}

export default useUserData
