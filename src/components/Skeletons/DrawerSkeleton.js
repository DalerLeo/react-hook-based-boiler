import React from 'react'
import PropTypes from 'prop-types'
import { range } from 'ramda'
import styled from 'styled-components'
import { Row, Col } from '../UI'
import animation from './animation'
import { GREY } from './colors'

const Container = styled('div')``

const Loader = styled('div')`
  animation: ${animation};
  background-color: ${GREY};
  border-radius: 8px;
  height: 20px;
  max-width: ${props => props.width};
  width: 100%;
`

const StyledRow = styled(Row)`
  align-items: center;
  border-top: ${props => props.theme.cube.border};
  height: ${props => (props.isBody ? '55px' : '50px')};
  padding: 0 10px;
`

const StyledCol = styled(Col)`
  flex-grow: unset;
`

const DrawerSkeleton = props => {
  const { count, children, loading } = props

  if (!loading) {
    if (children) {
      return children
    }
    return null
  }

  const list = range(0, count)

  return (
    <Container {...props}>
      {list.map(item => {
        return (
          <StyledRow key={item} gutter={30} isBody={true}>
            <StyledCol span={14}>
              <Loader width="160px" />
            </StyledCol>
            <StyledCol span={10}>
              <Loader width="80px" />
            </StyledCol>
          </StyledRow>
        )
      })}
    </Container>
  )
}

DrawerSkeleton.propTypes = {
  count: PropTypes.number,
  children: PropTypes.node,
  loading: PropTypes.bool
}

DrawerSkeleton.defaultProps = {
  count: 8
}

export default DrawerSkeleton
