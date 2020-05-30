import { createContext, Dispatch } from 'react'
import { initialState } from 'hooks/useRequest/useRequestReducer'
import { TState } from 'types/hooks'

export type TUserDataContext = {state: TState; dispatch: Dispatch<any>}
export const UserDataContext = createContext<TUserDataContext>({
  state: initialState,
  dispatch: () => null
})
