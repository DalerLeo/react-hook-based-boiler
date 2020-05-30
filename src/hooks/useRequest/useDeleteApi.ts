import axios, { getPayloadFromError } from 'utils/axios'
import useRequestReducer, { PENDING, REJECTED, SUCCESS } from 'hooks/useRequest/useRequestReducer'
import { AxiosResponse } from 'axios'
import { sprintf } from 'sprintf-js'

const usePostApi = <T = any>(API) => {
  const [state, dispatch] = useRequestReducer<T>()

  const request = async (id, config?): Promise<AxiosResponse<any>> => {
    try {
      dispatch({ TYPE: PENDING })
      const response = await axios().delete(sprintf(API, id), config)
      dispatch({ TYPE: SUCCESS, data: response.data })
      return response
    } catch (e) {
      dispatch({ TYPE: REJECTED, error: e })
      return getPayloadFromError(e)
    }
  }

  return { state, remove: request }
}

export default usePostApi
