import React, { FunctionComponent } from 'react'
import { Form } from 'react-final-form'

import { TOnSubmit, TState } from 'types'
import { Box } from 'components/UI'
import { DetailMenu } from 'components/Menu'
import NewsCreateForm from './NewsCreateForm'

type Props = {
  data: TState<any>;
  onSubmit: TOnSubmit
};

const NewsCreate: FunctionComponent<Props> = props => {
  return (
    <>
      <DetailMenu title="News Create" />
      <Box padding="25px">
        <Form
          onSubmit={props.onSubmit}
          component={NewsCreateForm}
        />
      </Box>
    </>
  )
}

export default NewsCreate
