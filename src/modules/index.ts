import auth from './auth'
import settings from './settings'
import website from './website'

const Routes = () => [
  ...auth,
  ...settings,
  ...website
]

export default Routes
