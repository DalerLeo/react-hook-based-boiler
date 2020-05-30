import React, { FunctionComponent } from 'react'
import arrayMutators from 'final-form-arrays'
import {
  Form,
} from 'react-final-form'
import { TOnSubmit } from 'types'

import { DrawerSkeleton } from 'components/Skeletons'
import ProductTypeCreateForm from './ProductTypeCreateForm'

type Props = {
    initialValues: Record<string, any>;
    updateLoading: boolean,
    loading: boolean;
    onSubmit: TOnSubmit
}

const ProductTypeUpdate: FunctionComponent<Props> = props => {
  return (
    <DrawerSkeleton loading={props.loading}>
      <Form
        onSubmit={props.onSubmit}
        initialValues={props.initialValues}
        mutators={{ ...arrayMutators }}
        component={ProductTypeCreateForm}
      />
    </DrawerSkeleton>
  )
}

export default ProductTypeUpdate
