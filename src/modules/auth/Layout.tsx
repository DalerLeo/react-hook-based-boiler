import * as ROUTES from 'constants/routes'
import React from 'react'
import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import { IconButtonSmall } from 'components/UX'
import Google from 'icons/Google'
import { ShadowBox } from 'components/StyledElems'

const LoginLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Box = styled(ShadowBox)`
  width: 430px;
  padding: 32px;
`

const Title = styled.div`
font-size: 32px;
line-height: 40px;
margin-bottom: 20px;
`

const Intro = styled.div`
text-transform: uppercase;
`
const Route = styled(Link)`
  display: inline-block;
  font-size: 16px;
  line-height: 24px;
  text-decoration: none;
  color: #333;
  padding-bottom: 13px;
  border-bottom: 2px solid transparent;
  margin-right: 25px;
  &.active {
    border-bottom-color: ${props => props.theme.colors.primary.default};

  }
  :last-child {
    margin-right: 0;
  }
`

const IconButton = styled(IconButtonSmall)`
  background-color: #fff;
`
const Socials = styled.div`
  background-color: #FAFAFA;
  padding: 12px 32px;
  margin: 0 -32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
`

const Layout = (props) => {
  const { children } = props

  return (
    <LoginLayout>
      <Box>
        <Title>Sign in</Title>
        <Intro>
          <Route to={ROUTES.LOGIN}>Login</Route>
          <Route to={ROUTES.REGISTER}>Register</Route>
        </Intro>

        <Socials>
          <div>Sign in with</div>
          <div>
            <IconButton><Google /></IconButton>
          </div>
        </Socials>
        {children}

      </Box>
    </LoginLayout>
  )
}

export default Layout
