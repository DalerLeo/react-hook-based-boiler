import React, { FunctionComponent } from 'react'
import arrayMutators from 'final-form-arrays'
import {
  Form,
} from 'react-final-form'
import { TOnSubmit } from 'types'

import { DrawerSkeleton } from 'components/Skeletons'
import { Box } from 'components/UI'
import { DetailMenu } from 'components/Menu'
import NewsCreateForm from './NewsCreateForm'

type Props = {
    initialValues: Record<string, any>;
    updateLoading: boolean,
    loading: boolean;
    onSubmit: TOnSubmit
}

const NewsUpdate: FunctionComponent<Props> = props => {
  return (
    <>
      <DetailMenu title="News Update"/>
      <Box padding="25px">
        <DrawerSkeleton loading={props.loading}>
          <Form
            onSubmit={props.onSubmit}
            initialValues={props.initialValues}
            mutators={{ ...arrayMutators }}
            component={NewsCreateForm}
          />
        </DrawerSkeleton>
      </Box>
    </>
  )
}

export default NewsUpdate
