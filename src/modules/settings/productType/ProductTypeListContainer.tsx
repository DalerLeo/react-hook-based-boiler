import { EMPTY_OBJ } from 'constants/dataTypes'
import React from 'react'
import { useOpenCreateDrawer } from 'hooks/drawer/useCreateDrawer'
import { CreateDrawer, UpdateDrawer } from 'components/Drawers'
import { useOpenUpdateDrawer } from 'hooks/drawer'
import { useProductTypeList, useProductTypeDelete } from '../hooks'
import ProductTypeList from './components/ProductTypeList'
import ProductTypeCreateContainer from './ProductTypeCreateContainer'
import ProductTypeUpdateContainer from './ProductTypeUpdateContainer'

const ProductTypeListContainer = () => {
  const productTypeList = useProductTypeList(EMPTY_OBJ)
  const productTypeDelete = useProductTypeDelete()

  const onCreateOpen = useOpenCreateDrawer()
  const onEdit = useOpenUpdateDrawer()

  return (
    <>
      <ProductTypeList
        data={productTypeList.state}
        onEdit={onEdit}
        removeData={productTypeDelete}
        onCreateOpen={onCreateOpen}
      />
      <CreateDrawer>
        <ProductTypeCreateContainer />
      </CreateDrawer>
      <UpdateDrawer>
        <ProductTypeUpdateContainer />
      </UpdateDrawer>
    </>
  )
}

export default ProductTypeListContainer
