/* eslint-disable max-len */
import React from 'react'
import SvgIcon from './SvgIcon'

export default props => {
  return (
    <SvgIcon width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <rect opacity="0.9" x="0.25" y="0.25" width="31.5" height="31.5" rx="15.75" fill="white" stroke="#E0E0E0" strokeWidth="0.5" />
      <path d="M16 10.75V21.25" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.75 16H21.25" stroke="#2F80ED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}
