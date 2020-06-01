import { useEffect, useReducer, useRef } from 'react'
import { path } from 'ramda'
import { TState } from 'types'
import { TReducer, TUseReducer } from 'types/hooks'

export const PENDING = 'pending'
export const SUCCESS = 'success'
export const REJECTED = 'rejected'
export const CLEAR = 'clear'

export const initialState = {
  data: null,
  error: null,
  loading: false,
  success: false,
  failed: false
}

const reducer = (state: TState, action) => {
  const states = {
    [PENDING]: () => ({
      ...state,
      loading: true
    }),
    [SUCCESS]: () => ({
      ...state,
      data: action.data,
      error: null,
      success: true,
      loading: false,
      failed: false
    }),
    [REJECTED]: () => ({
      ...state,
      data: null,
      error: path(['error', 'response'], action),
      loading: false,
      success: false,
      failed: true
    }),
    [CLEAR]: () => ({
      ...initialState
    }),

  }

  return states[action.TYPE]()
}

const useRequestReducer = <T = any>(): TUseReducer<T> => {
  const mountedRef = useRef(true)
  useEffect(() => () => { mountedRef.current = false }, [])
  const [state, update] = useReducer<TReducer<T>>(reducer, initialState)
  const dispatch = v => mountedRef.current && update(v)
  return [state, dispatch]
}

export default useRequestReducer
