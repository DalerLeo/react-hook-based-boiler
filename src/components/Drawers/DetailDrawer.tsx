import { ITEM_OPEN_KEY } from 'constants/drawerConstants'
import React, { FunctionComponent, ReactElement } from 'react'
import { Drawer } from 'components/UI'
import { useHistory } from 'react-router-dom'
import { useQuery } from 'hooks'
import { replaceParamsRoute } from 'utils/route'

type Props = {
  param?: string;
  children: ReactElement;
}
const DetailDrawer: FunctionComponent<Props> = props => {
  const { param } = props
  const id = useQuery(param)
  const history = useHistory()
  const onClose = () => replaceParamsRoute({ [param]: null }, history)

  const open = Boolean(id)

  return (
    <Drawer open={open} onClose={onClose}>
      {React.cloneElement(props.children, { onClose })}
    </Drawer>
  )
}
DetailDrawer.defaultProps = {
  param: ITEM_OPEN_KEY
}
export default DetailDrawer
