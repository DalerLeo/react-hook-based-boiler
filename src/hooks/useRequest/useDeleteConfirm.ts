import { useDeleteApi } from 'hooks/useRequest'
import { useConfirm } from 'components/ConfirmDialog/ConfirmDialogProvider'

const useDeleteConfirm = <T = any>(params) => {
  const {
    api,
    onSuccess,
    modalParams = { title: 'Remove', message: 'Are you sure to delete the data?' }
  } = params
  const { remove, state } = useDeleteApi<T>(api)
  const { dispatch } = useConfirm()

  const onConfirm = (id) => {
    dispatch({ loading: true })
    return remove(id)
      .then(() => onSuccess && onSuccess())
      .then(() => dispatch({ loading: false, open: false }))
      .catch(() => dispatch({ loading: false, open: false }))
  }

  const onSubmit = id => {
    const onRemove = () => onConfirm(id)
    return dispatch({
      onConfirm: onRemove,
      open: true,
      ...modalParams
    })
  }

  return { onSubmit, state }
}

export default useDeleteConfirm
