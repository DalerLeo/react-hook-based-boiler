import { ITEM_OPEN_KEY } from 'constants/drawerConstants'
/*
import { useEffect } from 'react'
import equal from 'react-fast-compare'
import { getDataFromState } from 'utils/getTyped'
*/
/* import { useTypedSelector, usePromiseDispatch } from 'etc/reducers'
import { useQuery } from 'hooks' */
import { useHistory } from 'react-router-dom'
import { replaceParamsRoute } from 'utils/route'

export const useFetchItemDrawer = <T extends any>() => {
/*  const { stateName, action, key = ITEM_OPEN_KEY } = params
  const id = useQuery(key)

  console.warn(id)
  const dispatch = usePromiseDispatch()
  const state = useTypedSelector<TGetDataFromState<T>>(state => getDataFromState(stateName, state), equal)

  useEffect(
    () => {
      dispatch(action(id))
      return () => dispatch({ type: `${stateName}_CLEAR` })
    },
    [id]
  )

  return stateName */
  return null
}

export const useOpenItemDrawer = (key = ITEM_OPEN_KEY) => {
  const history = useHistory()
  return (id) => replaceParamsRoute({ [key]: id }, history)
}
