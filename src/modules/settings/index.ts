import * as ROUTES from 'constants/routes'
import Layout from 'components/Layouts/Layout'
import {
  ProductTypesListContainer
} from './productType'

export default [
  {
    exact: true,
    path: ROUTES.PRODUCT_TYPE_LIST,
    layout: Layout,
    component: ProductTypesListContainer
  },
]
