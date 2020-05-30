import { CHECKBOX, TEXT, RADIO } from 'constants/questionTypes'
import React, { FunctionComponent, useState } from 'react'
import AddIcon from 'icons/Add'
import Radio from 'icons/Radio'
import { DisplayFlex, ShadowBox } from 'components/StyledElems'
import styled from 'styled-components'

const types = [
  RADIO,
  CHECKBOX,
  TEXT
]
const Display = styled(DisplayFlex)`
color: ${props => props.theme.colors.primary.default}
position: relative;
cursor: pointer;
  svg {
  margin-right: 10px;
  }
`

const Title = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
`

const Menu = styled.div`
  position: absolute;
  top: calc(100% + 7px);
`
const MenuItem = styled.div`
  padding: 4px 20px;
  color: ${props => props.theme.colors.black};
  :hover {
    background-color: #f8f8f8;
  }
  svg {
    vertical-align: middle;
    margin-right: 7px;
  }
`

type Props = {
  onMenuItem?: (type: string) => void;
}
const AddButton: FunctionComponent<Props> = props => {
  const { onMenuItem } = props
  const [open, setOpen] = useState(false)
  const onToggle = () => setOpen(open => !open)

  const onItemClick = value => () => {
    onMenuItem(value)
    onToggle()
  }

  return (
    <Display alignItems="center" onClick={onToggle}>
      <AddIcon />
      Добавить новый вопрос

      {open && (
        <Menu>
          <ShadowBox padding="20px 0" onClick={event => event.stopPropagation()}>
            <Title>Выберите тип вопроса</Title>
            {types.map(type => (
              <MenuItem key={type} onClick={onItemClick(type)}>
                <Radio />
                {type}
              </MenuItem>
            ))}
          </ShadowBox>
        </Menu>
      )}
    </Display>
  )
}
export default AddButton
