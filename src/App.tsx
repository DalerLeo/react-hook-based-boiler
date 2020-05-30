import React, { FunctionComponent } from 'react'
import { CubeThemeProvider } from 'ui-cubic'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { UserDataContext } from 'etc/context'
import { useRequestReducer } from 'hooks/useRequest'
import { TRoutes } from 'types'
import { getCookie } from 'utils/cookie'
import theme, { cubeTheme } from './etc/themes'
import NormalizedStyles from './components/StyledElems/NormalizedStyles'
import GlobalStyles from './components/StyledElems/GlobalStyles'

type Props = {
  routes: TRoutes;

}

const App: FunctionComponent<Props> = ({ routes }) => {
  const tokenExists = getCookie('token')
  const [userData, dispatch] = useRequestReducer()

  return (

    <ThemeProvider theme={theme}>
      <CubeThemeProvider theme={cubeTheme}>
        <UserDataContext.Provider value={{ state: userData, dispatch }}>
          <>
            <NormalizedStyles />
            <GlobalStyles />
            <BrowserRouter>
              {/*            {!tokenExists && <Redirect to="/login" />} */}
              {routes.map(({ component: Component, layout: Layout, ...route }) => (
                <Route
                  key={route.path}
                  path={route.path}
                  {...route}
                  render={(renderProps) => Layout ? (
                    <Layout>
                      <Component {...renderProps} />
                    </Layout>
                  ) : (
                    <Component {...renderProps} />
                  )}
                />
              ))}
            </BrowserRouter>
          </>
        </UserDataContext.Provider>
      </CubeThemeProvider>
    </ThemeProvider>
  )
}

export default App
