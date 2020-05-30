import * as ROUTES from 'constants/routes'
import AuthLayout from 'components/Layouts/AuthLayout'
import SignInContainer from './Signin/SignInContainer'
import RegisterContainer from './Register/RegisterContainer'

export default [
  {
    exact: true,
    path: ROUTES.LOGIN,
    layout: AuthLayout,
    component: SignInContainer,
  },
  {
    exact: true,
    path: ROUTES.REGISTER,
    layout: AuthLayout,
    component: RegisterContainer,
  },
]
