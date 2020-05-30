import { useHistory, useLocation } from 'react-router-dom'
import { replaceParamsRoute } from 'utils/route'

const useRoute = () => {
  const history = useHistory()
  const { search } = useLocation()
  const queries = new URLSearchParams(search)

  const setParam = (param) => {
    replaceParamsRoute(param, history)
  }

  const getParam = (key: string) => {
    return queries.get(key)
  }

  return { setParam, getParam }
}

export default useRoute
