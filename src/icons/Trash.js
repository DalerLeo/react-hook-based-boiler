/* eslint-disable max-len */
import React from 'react'
import SvgIcon from './SvgIcon'

export default props => {
  return (
    <SvgIcon width="10" height="10" viewBox="0 0 10 10" {...props}>

      <g clipPath="url(#clip0)">
        <path d="M1.25 8.74999C1.25 9.43907 1.8106 9.99998 2.49999 9.99998H7.49999C8.18938 9.99998 8.74998 9.43907 8.74998 8.74999V2.5H1.25V8.74999Z" />
        <path d="M6.25 0.624995V0H3.75V0.624995H0.625V1.87499H9.37499V0.624995H6.25Z" />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="10" height="10" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}
