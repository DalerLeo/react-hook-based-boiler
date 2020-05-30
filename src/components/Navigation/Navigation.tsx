import * as ROUTES from 'constants/routes'
import React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavWrapper = styled.div`
  background-color: #fff;
  height: 68px;
  border-bottom: ${props => props.theme.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`
const Navigation = props => {
  return (
    <NavWrapper>
{/*      <Link to={ROUTES.CREATE_SURVEY_PATH}>Create</Link>
      <Link to={ROUTES.MY_SURVEY}>My Survey</Link>*/}
      <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
    </NavWrapper>
  )
}
export default Navigation
