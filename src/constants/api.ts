export const API_HOST = '64.227.79.215:8080/'
export const API_ROOT = 'api'
export const API_VERSION = 'v1'
export const API_PROTOCOL = 'http'
export const API_URL = `${API_PROTOCOL}://${API_HOST}`

const MAIN = 'main'
export const CHECK_TOKEN = '/main/check_token/%s/'
export const LOGIN = `${MAIN}/login/`
export const LOGOUT = `${MAIN}/logout/`
export const FILE_UPLOAD = `${MAIN}/file/`

export const CLIENT = `${MAIN}/clients`
export const CLIENT_CREATE = `/${CLIENT}/`
export const REGISTER = `/${CLIENT}/`

const ORDER = `${MAIN}/order`
export const ORDER_LIST = `/${ORDER}/`
export const ORDER_ITEM = `/${ORDER}/%d/`

const SURVEY = `${MAIN}/forms`
export const SURVEY_LIST = `/${SURVEY}/`
export const SURVEY_CREATE = `/${SURVEY}/`
export const SURVEY_ITEM = `/${SURVEY}/%d/`
export const SURVEY_UPDATE = `/${SURVEY}/%d/`

const QUESTION = `${MAIN}/questions`
export const QUESTION_LIST = `/${QUESTION}/`
export const QUESTION_CREATE = `/${QUESTION}/`
export const QUESTION_ITEM = `/${QUESTION}/%d/`
export const QUESTION_UPDATE = `/${QUESTION}/%d/`
export const QUESTION_REMOVE = `/${QUESTION}/%d/`

const PRODUCT_TYPE = `${MAIN}/product_type`
export const PRODUCT_TYPE_LIST = `/${PRODUCT_TYPE}/`
export const PRODUCT_TYPE_CREATE = `/${PRODUCT_TYPE}/`
export const PRODUCT_TYPE_ITEM = `/${PRODUCT_TYPE}/%d/`
export const PRODUCT_TYPE_DELETE = `/${PRODUCT_TYPE}/%d/`
export const PRODUCT_TYPE_UPDATE = `/${PRODUCT_TYPE}/%d/`

const NEWS = `${MAIN}/news`
export const NEWS_LIST = `/${NEWS}/`
export const NEWS_CREATE = `/${NEWS}/`
export const NEWS_ITEM = `/${NEWS}/%d/`
export const NEWS_DELETE = `/${NEWS}/%d/`
export const NEWS_UPDATE = `/${NEWS}/%d/`
