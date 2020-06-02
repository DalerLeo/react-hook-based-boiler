import React, { FunctionComponent } from 'react'
import { Field, FormRenderProps } from 'react-final-form'
import { FieldWrapper } from 'components/StyledElems'
import {
  InputField,
  Editor,
  TextArea,
  ImageUploadField
} from 'components/Form'
import { Button } from 'components/UI'

export const fields = [
  'nameRu',
  'nameUz',
  'contentRu',
  'contentUz',
  'photo',
  'descriptionRu',
  'descriptionUz'
]
const SliderCreateForm: FunctionComponent<FormRenderProps> = props => {
  const { handleSubmit } = props

  return (
    <form onSubmit={handleSubmit}>
      <FieldWrapper>
        <Field
          label="Photo"
          name="photo"
          component={ImageUploadField}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          label="Title (RU)"
          name="nameRu"
          component={InputField}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          label="Title (UZ)"
          name="nameUz"
          component={InputField}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          label="Content (RU)"
          name="contentRu"
          component={Editor}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          label="Content (UZ)"
          name="contentUz"
          component={Editor}
        />
      </FieldWrapper>

      <FieldWrapper>
        <Field
          label="Description Ru"
          name="descriptionRu"
          component={TextArea}
        />
      </FieldWrapper>
      <FieldWrapper>
        <Field
          label="Description Uz"
          name="descriptionUz"
          component={TextArea}
        />
      </FieldWrapper>
      <Button type="submit">Save</Button>
    </form>
  )
}

export default SliderCreateForm
