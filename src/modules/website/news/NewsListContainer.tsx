import { EMPTY_OBJ } from 'constants/dataTypes'
import { NEWS_UPDATE_URL } from 'constants/routes'
import React from 'react'

import { sprintf } from 'sprintf-js'
import { useNewsList, useNewsDelete } from '../hooks'
import NewsList from './components/NewsList'

const NewsListContainer = (props) => {
  const newsList = useNewsList(EMPTY_OBJ)
  const newsDelete = useNewsDelete(
    () => newsList.get()
  )

  const onEdit = (id) => props.history.push(sprintf(NEWS_UPDATE_URL, id))

  return (
    <NewsList
      data={newsList.state}
      onEdit={onEdit}
      removeData={newsDelete}
    />
  )
}

export default NewsListContainer
