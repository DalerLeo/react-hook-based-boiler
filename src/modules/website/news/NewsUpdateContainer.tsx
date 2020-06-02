import { NEWS_LIST_PATH } from 'constants/routes'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getSerializedData } from 'utils/get'
import { fields } from 'modules/website/news/components/NewsCreateForm'
import { mapResponseToFormError } from 'utils/form'
import { useNewsUpdate, useNewsDetail } from '../hooks'
import NewsUpdate from './components/NewsUpdate'

const NewsUpdateContainer = () => {
  const history = useHistory()
  const { id } = useParams()
  const newsDetail = useNewsDetail(id)
  const newsUpdate = useNewsUpdate()

  const onSubmit = (values) => {
    const data = getSerializedData(fields, values)
    return newsUpdate.put(id, data)
      .then(() => history.push(NEWS_LIST_PATH))
      .catch(mapResponseToFormError)
  }

  const initialValues = {
    ...newsDetail.state.data
  }
  return (
    <NewsUpdate
      loading={newsDetail.state.loading}
      initialValues={initialValues}
      updateLoading={newsUpdate.state.loading}
      onSubmit={onSubmit}
    />
  )
}

export default NewsUpdateContainer
