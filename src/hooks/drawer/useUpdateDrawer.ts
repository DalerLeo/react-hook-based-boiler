import { UPDATE_OPEN_KEY } from 'constants/drawerConstants'
// import { equals as equal } from 'ramda'
import { useHistory } from 'react-router-dom'

/*
import { getDataFromState } from 'utils/get'
import toSnakeCase from 'utils/toSnakeCase'
import { mapResponseToFormError } from 'utils/form'

import { useTypedSelector, usePromiseDispatch } from 'etc/reducers'
*/
import { TUseUpdate } from 'types'
// import { getListParams } from 'hooks/useFetchList'
// import { DEFAULT_PICK_PARAMS } from 'utils/isEquals'
import { replaceParamsRoute } from 'utils/route'
// import { useQuery } from 'hooks'

export const useOpenUpdateDrawer = (key = UPDATE_OPEN_KEY) => {
  const history = useHistory()
  return (id) => replaceParamsRoute({ [key]: id }, history)
}

const useUpdateDrawer = <T extends any>(): TUseUpdate => {
/*  const {
    stateName,
    action,
    redirectUrl,
    initialValues,
    key = UPDATE_OPEN_KEY,
    onSuccess,
    successAction,
    serializer = toSnakeCase,
    pickParams = DEFAULT_PICK_PARAMS
  } = params

  const id = useQuery(key)
  const history = useHistory()
  const dispatch = usePromiseDispatch()
  const state = useTypedSelector<TGetDataFromState<T>>(state => getDataFromState(stateName, state), equal)

  const onSubmit = (values: Record<string, any>) => {
    const serializeValues = serializer(values)

    return dispatch(action(id, serializeValues))
      .then(data => {
        if (successAction) {
          return dispatch(successAction(getListParams(history, pickParams)))
        } else if (onSuccess) {
          onSuccess(data, { values })
        } else if (redirectUrl) {
          history.push(redirectUrl)
        }
      })
      .then(() => addParamsRoute({ [key]: null }, history))

      .catch(mapResponseToFormError)
  }

  return { ...state, id, onSubmit, initialValues, isUpdate: true } */

  return null
}

export default useUpdateDrawer
