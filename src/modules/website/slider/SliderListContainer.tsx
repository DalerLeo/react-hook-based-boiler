import { EMPTY_OBJ } from 'constants/dataTypes'
import { SLIDER_UPDATE_URL } from 'constants/routes'
import React from 'react'

import { sprintf } from 'sprintf-js'
import { useSliderList, useSliderDelete } from '../hooks'
import SliderList from './components/SliderList'

const SliderListContainer = (props) => {
  const sliderList = useSliderList(EMPTY_OBJ)
  const sliderDelete = useSliderDelete(
    () => sliderList.get()
  )

  const onEdit = (id) => props.history.push(sprintf(SLIDER_UPDATE_URL, id))

  return (
    <SliderList
      data={sliderList.state}
      onEdit={onEdit}
      removeData={sliderDelete}
    />
  )
}

export default SliderListContainer
