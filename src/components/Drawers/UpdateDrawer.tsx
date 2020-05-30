import React, { FunctionComponent } from 'react'
import { Drawer } from 'components/UI'
import {
  useHistory
} from 'react-router-dom'
import { useQuery } from 'hooks'
import { replaceParamsRoute } from 'utils/route'

type Props = {
  param?: string;
}

const UpdateDrawer: FunctionComponent<Props> = props => {
  const { param } = props
  const id = useQuery(param)
  const history = useHistory()
  const onClose = () => replaceParamsRoute({ [param]: null }, history)

  const open = Boolean(id)

  return (
    <Drawer open={open} onClose={onClose}>
      {props.children}
    </Drawer>
  )
}
UpdateDrawer.defaultProps = {
  param: 'updateId'
}
export default UpdateDrawer
