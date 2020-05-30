import { useQueries } from 'hooks/utils/useQuery'
import { DEFAULT_PICK_PARAMS } from 'utils/isEquals'
import useRoute from 'hooks/utils/useRoute'

const usePickSearchParams = (keys = DEFAULT_PICK_PARAMS) => {
  const queryParams = useRoute()

  return keys.reduce((target, key) => {
    const value = queryParams.getParam('key')

    return Object.assign(target, { [key]: value })
  }, {})
}

export default usePickSearchParams
