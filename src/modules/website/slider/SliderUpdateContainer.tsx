import { SLIDER_LIST_PATH } from 'constants/routes'
import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getSerializedData } from 'utils/get'
import { mapResponseToFormError } from 'utils/form'
import { useSliderUpdate, useSliderDetail } from '../hooks'
import { fields } from './components/SliderCreateForm'
import SliderUpdate from './components/SliderUpdate'

const SliderUpdateContainer = () => {
  const history = useHistory()
  const { id } = useParams()
  const sliderDetail = useSliderDetail(id)
  const sliderUpdate = useSliderUpdate()

  const onSubmit = (values) => {
    const data = getSerializedData(fields, values)
    return sliderUpdate.put(id, data)
      .then(() => history.push(SLIDER_LIST_PATH))
      .catch(mapResponseToFormError)
  }

  const initialValues = {
    ...sliderDetail.state.data
  }
  return (
    <SliderUpdate
      loading={sliderDetail.state.loading}
      initialValues={initialValues}
      updateLoading={sliderUpdate.state.loading}
      onSubmit={onSubmit}
    />
  )
}

export default SliderUpdateContainer
