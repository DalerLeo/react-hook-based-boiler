import { CREATE_OPEN } from 'constants/drawerConstants'
import React, { FunctionComponent, ReactElement } from 'react'
import { Drawer } from 'components/UI'
import { useHistory } from 'react-router-dom'
import { useQuery } from 'hooks'
import { replaceParamsRoute } from 'utils/route'

type Props = {
  key?: string;
  children: ReactElement;
}
const CreateDrawer: FunctionComponent<Props> = props => {
  const { key, children } = props

  const open = useQuery(key)
  const history = useHistory()
  const onClose = () => replaceParamsRoute({ [key]: null }, history)


  return (
    <Drawer open={Boolean(open)} onClose={onClose}>
      {React.cloneElement(children, { onClose })}
    </Drawer>
  )
}
CreateDrawer.defaultProps = {
  key: CREATE_OPEN
}
export default CreateDrawer
