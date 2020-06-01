import * as ROUTES from 'constants/routes'
import Layout from 'components/Layouts/Layout'
import {
  NewsCreateContainer,
  NewsListContainer,
  NewsUpdateContainer
} from './news'

export default [
  {
    exact: true,
    path: ROUTES.NEWS_LIST_PATH,
    layout: Layout,
    component: NewsListContainer
  },
  {
    exact: true,
    path: ROUTES.NEWS_CREATE_PATH,
    layout: Layout,
    component: NewsCreateContainer
  },
  {
    exact: true,
    path: ROUTES.NEWS_UPDATE_PATH,
    layout: Layout,
    component: NewsUpdateContainer
  },
]
