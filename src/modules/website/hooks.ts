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

export const useNewsDelete = (onSuccess) => {
  return useDeleteConfirm<TProductTypeItem>({
    api: API.NEWS_DELETE,
    onSuccess,
  })
}

export const useNewsList = (params: TUseListParams) => {
  const { pickParams = DEFAULT_PICK_PARAMS } = params
  const { get, state } = useGetApi<TData<TProductTypeItem>>(API.NEWS_LIST)
  const searchParams = usePickSearchParams(pickParams)
  useCompareEffect(() => { get() }, [searchParams])

  return { get, state }
}

export const useNewsCreate = () => {
  return usePostApi<TProductTypeItem>(API.NEWS_CREATE)
}

export const useNewsUpdate = () => {
  return usePutApi<TProductTypeItem>(API.NEWS_UPDATE)
}

export const useNewsDetail = (id) => {
  const { get, state } = useGetApi<TProductTypeItem>(sprintf(API.NEWS_ITEM, id))
  useEffect(() => { get() }, [])

  return { get, state }
}
