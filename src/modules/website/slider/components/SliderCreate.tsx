import React, { FunctionComponent } from 'react'
import { Form } from 'react-final-form'

import { TOnSubmit, TState } from 'types'
import { Box } from 'components/UI'
import { DetailMenu } from 'components/Menu'
import SliderCreateForm from './SliderCreateForm'

type Props = {
  data: TState<any>;
  onSubmit: TOnSubmit
};

const NewsCreate: FunctionComponent<Props> = props => {
  return (
    <>
      <DetailMenu title="Slider Create" />
      <Box padding="25px">
        <Form
          onSubmit={props.onSubmit}
          component={SliderCreateForm}
        />
      </Box>
    </>
  )
}

export default NewsCreate
