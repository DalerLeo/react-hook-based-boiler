import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Dropdown as DropdownCUI } from 'ui-cubic'

const Dropdown = ({ children, ...props }) => (
  <DropdownCUI
    {...props}
    mode={'horizontal'}
    backgroundColor={'#f1f3f5'}
    dotColor={'#435260'}
  >
    {children}
  </DropdownCUI>
)

Dropdown.propTypes = {
  children: PropTypes.node,
  marginLeft: PropTypes.any
}

Dropdown.defaultProps = {
  marginLeft: 0
}

export default styled(Dropdown)`
  margin-left: ${props => props.marginLeft};
`
