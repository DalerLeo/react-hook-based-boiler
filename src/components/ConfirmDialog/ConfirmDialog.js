import React from 'react'
import { Modal, Button, SecondaryButton } from '../UI'
import { ActionButtons } from '../StyledElems'
import { useConfirm } from './ConfirmDialogProvider'

const ConfirmDialog = () => {
  const { dispatch, state } = useConfirm()

  const { title, message, open, onConfirm, loading } = state
  const onClose = () => dispatch({ open: false, loading: false })

  return (
    <Modal
      open={open}
      title={title}
      onClose={onClose}
      showCloseIcon={false}
      maskClosable={false}
    >
      <div>{message}</div>
      <ActionButtons>
        <SecondaryButton data-cy="confirmDialogCancel" onClick={onClose} disabled={loading}>Cancel</SecondaryButton>
        <Button data-cy="confirmDialogOk" onClick={onConfirm} loading={loading}>Submit</Button>
      </ActionButtons>
    </Modal>
  )
}

export default ConfirmDialog
