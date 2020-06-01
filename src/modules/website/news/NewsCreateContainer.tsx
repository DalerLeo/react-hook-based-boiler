import React from 'react'
import { mapResponseToFormError } from 'utils/form'
import { useNewsCreate } from '../hooks'
import NewsCreate from './components/NewsCreate'

const NewsCreateContainer = (props) => {
  const createNews = useNewsCreate()

  const onSubmit = (values) => {
    return createNews.post(values)
      .then(() => props.getList())
      .catch(mapResponseToFormError)
  }

  return (
    <NewsCreate data={createNews.state} onSubmit={onSubmit}/>
  )
}
export default NewsCreateContainer
