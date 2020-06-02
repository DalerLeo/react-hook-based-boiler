import * as ROUTES from '../constants/routes'

export const MENU_KEYS = {
  ORDER: 'order',
  REVIEW: 'review',
  OPERATIONS: 'operations',
  MANUFACTURING: 'manufacturing',
  REPORTS: 'reports',
  SETTINGS: 'settings',
  WEBSITE: 'website',
  SLIDER: 'slider',
}

export default [
  {
    key: MENU_KEYS.WEBSITE,
    title: 'News',
    url: ROUTES.NEWS_LIST_PATH,
    children: []
  },
  {
    key: MENU_KEYS.SLIDER,
    title: 'Slider',
    url: ROUTES.SLIDER_LIST_PATH,
    children: []
  },
  {
    key: MENU_KEYS.SETTINGS,
    title: 'Настройки',
    url: ROUTES.PRODUCT_TYPE_LIST,
    children: [
      { title: 'Product Type', url: ROUTES.PRODUCT_TYPE_LIST },
      { title: 'Категории продуктов', url: '2/2/' },
      { title: 'Каталог цехов', url: '2/222' },
    ]
  }
]
