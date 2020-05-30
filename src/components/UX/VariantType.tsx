import { CHECKBOX, RADIO, TEXT } from 'constants/questionTypes'
import React from 'react'
import CheckboxChecked from 'icons/CheckboxUnchecked'
import RadioChecked from 'icons/RadioUncheck'

const typeIcon = {
  [TEXT]: <span />,
  [RADIO]: <RadioChecked />,
  [CHECKBOX]: <CheckboxChecked />
}
const VariantType = props => {
  const { type } = props

  return typeIcon[type]
}

VariantType.defaultProps = {
  type: RADIO
}

export default VariantType
