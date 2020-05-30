import { CREATE_OPEN } from 'constants/drawerConstants'
import { useHistory } from 'react-router-dom'
import { replaceParamsRoute } from 'utils/route'
import { TUseCreate, TUseCreateDrawerParams } from 'types/hooks'
/*
import equals from 'react-fast-compare'
import { TGetDataFromState } from 'types'
import { getDataFromState } from 'utils/get'
import toSnakeCase from 'utils/toSnakeCase'
import { mapResponseToFormError } from 'utils/form'
import { useTypedSelector, usePromiseDispatch } from 'etc/reducers'
import { getListParams } from 'hooks/useFetchList'
import { DEFAULT_PICK_PARAMS } from 'utils/isEquals'
*/

export const useOpenCreateDrawer = (key = CREATE_OPEN) => {
  const history = useHistory()
  return () => replaceParamsRoute({ [key]: true }, history)
}

export const useCreateDrawer = <T extends any>(params: TUseCreateDrawerParams): TUseCreate => {
 /* const {
    key = CREATE_OPEN,
    action,
    stateName,
    redirectUrl,
    onSuccess,
    serializer = toSnakeCase,
    onSuccessAction,
    pickParams = DEFAULT_PICK_PARAMS
  } = params

  const dispatch = usePromiseDispatch()
  const history = useHistory()

  const data = useTypedSelector<TGetDataFromState<T>>(state => getDataFromState(stateName, state), equals)
  const onSubmit = (values: Record<string, any>) => {
    return dispatch(action(serializer(values)))
      .then(data => {
        if (onSuccessAction) {
          return dispatch(onSuccessAction(getListParams(history, pickParams)))
        } else if (onSuccess) {
          onSuccess(data, { values })
        } else if (redirectUrl) {
          history.push(redirectUrl)
        }
      })
      .then(() => replaceParamsRoute({ [key]: null }, history))
      .catch(mapResponseToFormError)
  }

  return { onSubmit, ...data }*/

 return null
}
