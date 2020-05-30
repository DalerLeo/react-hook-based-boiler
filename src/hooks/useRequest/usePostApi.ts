import axios, { getPayloadFromError } from 'utils/axios'
import useRequestReducer, { PENDING, REJECTED, SUCCESS } from 'hooks/useRequest/useRequestReducer'
import { AxiosResponse } from 'axios'

const usePostApi = <T = any>(API) => {
  const [state, dispatch] = useRequestReducer<T>()

  const request = async (config): Promise<AxiosResponse<any>> => {
    try {
      dispatch({ TYPE: PENDING })
      const response = await axios().post(API, config)
      dispatch({ TYPE: SUCCESS, data: response.data })
      return response
    } catch (e) {
      dispatch({ TYPE: REJECTED, error: e })
      return getPayloadFromError(e)
    }
  }

  return { state, post: request }
}

export default usePostApi
