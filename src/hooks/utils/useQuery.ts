
import { useLocation } from 'react-router-dom'

const useQuery = (key: string) => {
  if (!key) {
    throw Error('useQuery hook requires key!')
  }
  const { search } = useLocation()
  const queries = new URLSearchParams(search)

  return queries.get(key)
}
export const useQueries = () => {
  const { search } = useLocation()

  const queries = new URLSearchParams(search)
  const queryParams = {}

  for (const query of queries.entries()) {
    queryParams[query[0]] = query[1]
  }

  return queryParams
}

export default useQuery
