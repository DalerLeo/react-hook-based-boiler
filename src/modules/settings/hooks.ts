import * as API from 'constants/api'
import {
  usePostApi,
  useGetApi,
  usePutApi, useDeleteConfirm
} from 'hooks/useRequest'
import { sprintf } from 'sprintf-js'
import { useEffect } from 'react'
import { TData, TProductTypeItem, TUseListParams } from 'types'
import { useCompareEffect, usePickSearchParams } from 'hooks'
import { DEFAULT_PICK_PARAMS } from 'utils/isEquals'

export const useProductTypeDelete = (onSuccess) => {
  return useDeleteConfirm<TProductTypeItem>({
    api: API.PRODUCT_TYPE_DELETE,
    onSuccess,
  })
}

export const useProductTypeList = (params: TUseListParams) => {
  const { pickParams = DEFAULT_PICK_PARAMS } = params
  const { get, state } = useGetApi<TData<TProductTypeItem>>(API.PRODUCT_TYPE_LIST)
  const searchParams = usePickSearchParams(pickParams)
  useCompareEffect(() => { get() }, [searchParams])

  return { get, state }
}

export const useProductTypeCreate = () => {
  return usePostApi<TProductTypeItem>(API.PRODUCT_TYPE_CREATE)
}

export const useProductTypeUpdate = () => {
  return usePutApi<TProductTypeItem>(API.PRODUCT_TYPE_UPDATE)
}

export const useProductTypeDetail = (id) => {
  const { get, state } = useGetApi<TProductTypeItem>(sprintf(API.PRODUCT_TYPE_ITEM, id))
  useEffect(() => { get() }, [])

  return { get, state }
}
