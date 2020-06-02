import React, { FunctionComponent } from 'react'
import {
  Form,
} from 'react-final-form'
import { TOnSubmit } from 'types'

import { DrawerSkeleton } from 'components/Skeletons'
import { Box } from 'components/UI'
import { DetailMenu } from 'components/Menu'
import SliderCreateForm from './SliderCreateForm'

type Props = {
    initialValues: Record<string, any>;
    updateLoading: boolean,
    loading: boolean;
    onSubmit: TOnSubmit
}

const SliderUpdate: FunctionComponent<Props> = props => {
  return (
    <>
      <DetailMenu title="Slider Update"/>
      <Box padding="25px">
        <DrawerSkeleton loading={props.loading}>
          <Form
            onSubmit={props.onSubmit}
            initialValues={props.initialValues}
            component={SliderCreateForm}
          />
        </DrawerSkeleton>
      </Box>
    </>
  )
}

export default SliderUpdate
