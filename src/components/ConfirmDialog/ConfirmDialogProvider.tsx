import React, { createContext, Dispatch, useContext, useReducer } from 'react'
import { TConfirmReducer, TConfirmState } from 'types'

export const confirmInitialValue = {
  open: false,
  title: '',
  message: '',
  onConfirm: () => null,
  loading: false,
}
const actionReducer = (state: TConfirmState, action) => ({ ...state, ...action })

export type TConfirmDialogContext = {state: TConfirmState, dispatch: Dispatch<any>}

export const ConfirmDialogContext = createContext<TConfirmDialogContext>({
  state: confirmInitialValue,
  dispatch: () => null
})

export const useConfirm = () => useContext<TConfirmDialogContext>(ConfirmDialogContext)

const ConfirmDialogProvider = props => {
  const [state, dispatch] = useReducer<TConfirmReducer>(actionReducer, confirmInitialValue)

  return (
    <ConfirmDialogContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ConfirmDialogContext.Provider>
  )
}

export default ConfirmDialogProvider
