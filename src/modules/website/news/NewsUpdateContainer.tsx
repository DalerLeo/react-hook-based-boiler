import React from 'react'

import { useParams } from 'react-router-dom'
import { useNewsUpdate, useNewsDetail } from '../hooks'
import NewsUpdate from './components/NewsUpdate'

const NewsUpdateContainer = () => {
  const { id } = useParams()
  const newsDetail = useNewsDetail(id)
  const newsUpdate = useNewsUpdate()

  const onSubmit = (values) => {
    return newsUpdate.put(id, values)
  }

  const initialValues = {
    ...newsDetail.state.data
  }
  return (
    <NewsUpdate
      loading={false}
      initialValues={initialValues}
      updateLoading={newsUpdate.state.loading}
      onSubmit={onSubmit}
    />
  )
}

export default NewsUpdateContainer
