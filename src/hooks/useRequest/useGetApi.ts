import axios from 'utils/axios'
import { sprintf } from 'sprintf-js'
import useRequestReducer,
{
  REJECTED,
  SUCCESS,
  PENDING
} from './useRequestReducer'

const useGetApi = <T extends any>(API) => {
  const [state, dispatch] = useRequestReducer<T>()


  const request = async (config?: any) => {
    dispatch({ TYPE: PENDING })
    try {
      const { data } = await axios().get(API, config)
      dispatch({ TYPE: SUCCESS, data })
      return data
    } catch (e) {
      dispatch({ TYPE: REJECTED, error: e })
      return Promise.reject(e)
    }
  }

  return { state, get: request }
}
export const useDetailGetApi = (API) => {
  const [state, dispatch] = useRequestReducer()

  const request = async (id: string, config?: any) => {
    dispatch({ TYPE: PENDING })
    try {
      const { data } = await axios().get(sprintf(API, id), config)
      dispatch({ TYPE: SUCCESS, data })
      return data
    } catch (e) {
      dispatch({ TYPE: REJECTED, error: e })
      return Promise.reject(e)
    }
  }

  return { ...state, get: request }
}

export default useGetApi
