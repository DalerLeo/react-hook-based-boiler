import React, { FunctionComponent } from 'react'
import { Field, FormRenderProps } from 'react-final-form'

import { FieldWrapper } from 'components/StyledElems'
import {
  InputField
} from 'components/Form'
import { Button } from 'components/UI'

export const fields = [
  'parent',
  'name',
  'code'
]
const ProductTypeCreateForm: FunctionComponent<FormRenderProps> = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <FieldWrapper>
        <Field
          label="Наименование категории"
          name="name"
          component={InputField}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          label="Код"
          name="code"
          component={InputField}
        />
      </FieldWrapper>
      <Button type="submit">Save</Button>
    </form>
  )
}

export default ProductTypeCreateForm
