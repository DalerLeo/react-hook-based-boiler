import { isEmpty, isNil } from 'ramda'

export default value => isNil(value) || isEmpty(value)
