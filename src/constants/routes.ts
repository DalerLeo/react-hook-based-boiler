export const ROOT = ''
export const ROOT_PATH = `/${ROOT}`

const ID = ':id(\\d+)'

export const LOGIN = '/login'
export const REGISTER = '/register'
export const ORDER = 'order'
export const ORDER_LIST_PATH = `/${ORDER}`
export const ORDER_CREATE_PATH = `/${ORDER}/create`
export const ORDER_ITEM_PATH = `/${ORDER}/${ID}`
export const ORDER_ITEM_URL = `/${ORDER}/%d`

export const DASHBOARD = '/'
export const MY_SURVEY = '/my-survey'
export const CREATE_SURVEY = 'create-survey'
export const CREATE_SURVEY_PATH = `/${CREATE_SURVEY}/`
export const CREATE_SURVEY_UPDATE_PATH = `/${CREATE_SURVEY}/${ID}/update`
export const CREATE_SURVEY_UPDATE_URL = `/${CREATE_SURVEY}/%d/update`

export const PRODUCT_TYPE_LIST = '/product'

const NEWS = 'news'
export const NEWS_LIST_PATH = `/${NEWS}`
export const NEWS_CREATE_PATH = `/${NEWS}/create`
export const NEWS_ITEM_PATH = `/${NEWS}/${ID}`
export const NEWS_ITEM_URL = `/${NEWS}/%d`
export const NEWS_UPDATE_PATH = `/${NEWS}/${ID}`
export const NEWS_UPDATE_URL = `/${NEWS}/%d`

const SLIDER = 'slider'
export const SLIDER_LIST_PATH = `/${SLIDER}`
export const SLIDER_CREATE_PATH = `/${SLIDER}/create`
export const SLIDER_ITEM_PATH = `/${SLIDER}/${ID}`
export const SLIDER_ITEM_URL = `/${SLIDER}/%d`
export const SLIDER_UPDATE_PATH = `/${SLIDER}/${ID}`
export const SLIDER_UPDATE_URL = `/${SLIDER}/%d`
