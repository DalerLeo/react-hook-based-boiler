import React from 'react'
import { useCloseCreateDrawer } from 'hooks'
import { useProductTypeCreate } from '../hooks'
import ProductTypeCreate from './components/ProductTypeCreate'

const ProductTypeCreateContainer = (props) => {
  const createProduct = useProductTypeCreate()
  const onClose = useCloseCreateDrawer()
  const onSubmit = (values) => {
    return createProduct.post(values)
      .then(() => props.getList())
      .then(onClose)
  }

  return (
    <ProductTypeCreate data={createProduct.state} onSubmit={onSubmit}/>
  )
}
export default ProductTypeCreateContainer
