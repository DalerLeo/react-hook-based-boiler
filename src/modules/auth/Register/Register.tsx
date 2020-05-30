import React from 'react'
import styled from 'styled-components'
import { InputError } from 'components/UX'
import { ButtonSmall } from 'components/UX/Buttons'
import { Form, Field } from 'react-final-form'
import { InputField } from 'components/Form'
import { TState, TSubmit } from 'types/hooks'

const FieldWrapper = styled.div`
  margin-bottom: 25px;
  
  
`

type Props = {
  state: TState;
  onSubmit: TSubmit;
}
export const fields = ['fullName', 'email', 'password']
const Register = (props: Props) => {
  const { onSubmit, state } = props

  return (

    <Form
      onSubmit={onSubmit}
      render={formProps => (
        <form onSubmit={formProps.handleSubmit}>
          {formProps.submitError && <InputError>{formProps.submitError}</InputError>}
          <FieldWrapper>
            <Field
              name="fullName"
              placeholder="Имя"
              component={InputField}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="email"
              placeholder="Введите Адрес электронной почты"
              component={InputField}
            />
          </FieldWrapper>
          <FieldWrapper>
            <Field
              name="password"
              placeholder="Пароль"
              type="password"
              component={InputField}
            />
          </FieldWrapper>
          <ButtonSmall loading={state.loading} fullWidth={true} type="submit">войти</ButtonSmall>
        </form>
      )}
    />
  )
}

export default Register
