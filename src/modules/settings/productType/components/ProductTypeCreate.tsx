import React, { FunctionComponent } from 'react'
import { Form } from 'react-final-form'

import { TOnSubmit, TState } from 'types'
import ProductTypeCreateForm from './ProductTypeCreateForm'

type Props = {
  data: TState<any>;
  onSubmit: TOnSubmit
};

const ProductTypeCreate: FunctionComponent<Props> = props => {
  return (
    <div>
      <Form
        onSubmit={props.onSubmit}
        component={ProductTypeCreateForm}
      />
    </div>
  )
}

export default ProductTypeCreate
