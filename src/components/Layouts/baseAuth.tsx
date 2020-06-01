import * as API from 'constants/api'
import { LOGIN } from 'constants/routes'
import React from 'react'
import { getCookie } from 'utils/cookie'
import axios from 'utils/axios'
import { sprintf } from 'sprintf-js'
import { UserDataContext } from 'etc/context'
import { isNil } from 'ramda'
import { CLEAR, PENDING, SUCCESS } from 'hooks/useRequest/useRequestReducer'
import { Redirect } from 'react-router-dom'

const onSubmit = async (token) => {
  try {
    const response = await axios().get(sprintf(API.CHECK_TOKEN, token))
    return response
  } catch (e) {
    return Promise.reject(e)
  }
}
type State = {
  isAuth: boolean;
  cookieToken: string | undefined
}
const baseAuth = (WrappedComponent) => {
  return class extends React.Component<any, State> {
    static contextType = UserDataContext;
    constructor (props) {
      super(props)
      const cookieToken = getCookie('token')
      this.state = {
        cookieToken,
        isAuth: Boolean(cookieToken)
      }
    }

    setIsAuth = (value) => this.setState({ isAuth: value })
    componentDidMount () {
      // ... that takes care of the subscription...
      const { state, dispatch } = this.context
      const setData = data => dispatch({ TYPE: SUCCESS, data })
      const clearData = () => dispatch({ TYPE: CLEAR })
      const fetchingData = () => dispatch({ TYPE: PENDING })

      if (this.state.cookieToken && isNil(state.data)) {
        fetchingData()
        onSubmit(this.state.cookieToken)
          .then(response => {
            setData(response)
          })
          .catch(eee => {
            this.setIsAuth(false)
            console.warn('FAILED', eee)
            clearData()
          })
      }

      if (!this.state.cookieToken) {
        this.setIsAuth(false)
      }
    }

    shouldComponentUpdate (): boolean {
      return false
    }

    render () {
    // ... and renders the wrapped component with the fresh data!
    // Notice that we pass through any additional props
      const { state } = this.context
      if (state.loading) {
        return 'Loading . .. . . . . .'
      }

      if (!this.state.isAuth) {
        return <Redirect to={LOGIN} />
      }
      return <WrappedComponent {...this.props}/>
    }
  }
}

export default baseAuth
