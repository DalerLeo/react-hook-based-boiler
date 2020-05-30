import { CHECKBOX, RADIO, TEXT } from 'constants/questionTypes'
import React from 'react'
import CheckboxChecked from 'icons/CheckboxChecked'
import RadioChecked from 'icons/RadioChecked'
import Text from 'icons/Text'

const typeIcon = {
  [TEXT]: <Text />,
  [RADIO]: <RadioChecked />,
  [CHECKBOX]: <CheckboxChecked />
}
const QuestionType = props => {
  const { type } = props

  return typeIcon[type]
}

QuestionType.defaultProps = {
  type: RADIO
}

export default QuestionType
