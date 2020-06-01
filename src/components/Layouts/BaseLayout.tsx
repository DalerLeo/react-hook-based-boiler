import React from 'react'
import baseAuth from 'components/Layouts/baseAuth'
import ConfirmDialog from 'components/ConfirmDialog'

const BaseLayout = props => {

  return (
    <>
      <ConfirmDialog/>
      {props.children}
    </>
  )
}

export default baseAuth(BaseLayout)
