import React from 'react'
import { useRoute } from 'hooks'
import { useProductTypeUpdate, useProductTypeDetail } from '../hooks'
import ProductTypeUpdate from './components/ProductTypeUpdate'

const ProductTypeUpdateContainer = () => {
  const { getParam } = useRoute()

  const id = getParam('updateId')
  const productTypeDetail = useProductTypeDetail(id)
  const productTypeUpdate = useProductTypeUpdate()
  const onSubmit = (values) => {
    return productTypeUpdate.put(id, values)
  }

  const initialValues = {
    ...productTypeDetail.state.data
  }
  return (
    <ProductTypeUpdate
      loading={false}
      initialValues={initialValues}
      updateLoading={productTypeUpdate.state.loading}
      onSubmit={onSubmit}
    />
  )
}

export default ProductTypeUpdateContainer
