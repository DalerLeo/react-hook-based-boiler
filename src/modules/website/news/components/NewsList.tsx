import { MENU_KEYS } from 'constants/menus'
import { EMPTY_ARR, ZERO } from 'constants/dataTypes'
import { NEWS_CREATE_PATH } from 'constants/routes'
import React, { FunctionComponent } from 'react'
import { prop, map, pathOr } from 'ramda'
import { Menu } from 'components/Menu'
import {
  Table,
  TableActions,
  TableRow,
  TableHeader,
  TableCol,
  TableBody
} from 'components/Table'
import { Box, Dropdown, DropdownItem } from 'components/UI'
import Pagination from 'components/Pagination'
import {
  TData,
  TIdName,
  TState,
  TProductTypeItem,
  TUseConfirmRemove
} from 'types'

type Props = {
    data: TState<TData<TProductTypeItem>>;
    onEdit: (id) => void;
    removeData: TUseConfirmRemove;
}

const NewsList: FunctionComponent<Props> = props => {
  const { data, onEdit, removeData } = props

  const count = pathOr(ZERO, ['data', 'count'], data)
  const list = pathOr<TIdName[]>(EMPTY_ARR, ['data', 'results'], data)
  const ids = map(prop('id'), list)
  const actions = (
    <TableActions
      createPath={NEWS_CREATE_PATH}
    />
  )

  return (
    <div>
      <Menu title="News" module={MENU_KEYS.WEBSITE} active={MENU_KEYS.WEBSITE} />
      <Box>
        <Table loading={data.loading} list={ids} actions={actions} gutter={30}>
          <TableHeader>
            <TableRow>
              <TableCol span={1}>#</TableCol>
              <TableCol span={6}>Category</TableCol>
              <TableCol span={6}>Title</TableCol>
              <TableCol span={1}> </TableCol>
            </TableRow>
          </TableHeader>
          <TableBody>
            {list.map((item) => {
              const id = prop('id', item)
              const name = prop('name', item)
              const category = prop('category', item)
              return (
                <TableRow key={id} align="center">
                  <TableCol span={1}>{id}</TableCol>
                  <TableCol span={6}>{category}</TableCol>
                  <TableCol span={6}>{name}</TableCol>
                  <TableCol span={1}>
                    <Dropdown>
                      <DropdownItem onClick={() => onEdit(id)}>
                        Edit
                      </DropdownItem>
                      <DropdownItem onClick={() => removeData.onSubmit(id)}>
                        Delete
                      </DropdownItem>
                    </Dropdown>
                  </TableCol>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </Box>
      <Pagination count={count} />
    </div>
  )
}

export default NewsList
