import { SLIDER_LIST_PATH } from 'constants/routes'
import React from 'react'
import { mapResponseToFormError } from 'utils/form'
import { getSerializedData } from 'utils/get'
import { useHistory } from 'react-router-dom'
import { useSliderCreate } from '../hooks'
import { fields } from './components/SliderCreateForm'
import SliderCreate from './components/SliderCreate'

const SliderCreateContainer = () => {
  const createSlider = useSliderCreate()
  const history = useHistory()
  const onSubmit = (values) => {
    const data = getSerializedData(fields, values)
    return createSlider.post(data)
      .then(() => history.push(SLIDER_LIST_PATH))
      .catch(mapResponseToFormError)
  }

  return (
    <SliderCreate data={createSlider.state} onSubmit={onSubmit}/>
  )
}
export default SliderCreateContainer
