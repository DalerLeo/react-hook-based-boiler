import React from 'react'
import { useProductTypeCreate } from '../hooks'
import ProductTypeCreate from './components/ProductTypeCreate'

const ProductTypeCreateContainer = () => {
  const createProduct = useProductTypeCreate()
  const onSubmit = (values) => {
    return createProduct.post(values)
  }

  return (
    <ProductTypeCreate data={createProduct.state} onSubmit={onSubmit}/>
  )
}
export default ProductTypeCreateContainer
