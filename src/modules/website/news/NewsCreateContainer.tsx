import { NEWS_LIST_PATH } from 'constants/routes'
import React from 'react'
import { mapResponseToFormError } from 'utils/form'
import { getSerializedData } from 'utils/get'
import { fields } from 'modules/website/news/components/NewsCreateForm'
import { useHistory } from 'react-router-dom'
import { useNewsCreate } from '../hooks'
import NewsCreate from './components/NewsCreate'

const NewsCreateContainer = () => {
  const createNews = useNewsCreate()
  const history = useHistory()
  const onSubmit = (values) => {
    const data = getSerializedData(fields, values)
    return createNews.post(data)
      .then(() => history.push(NEWS_LIST_PATH))
      .catch(mapResponseToFormError)
  }

  return (
    <NewsCreate data={createNews.state} onSubmit={onSubmit}/>
  )
}
export default NewsCreateContainer
