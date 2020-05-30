import React, { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { X } from 'react-feather'

const Mask = styled('div')<{open: boolean}>`
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(98, 98, 98, 0.5);
  opacity: 0;
  visibility: hidden;
  z-index: 10;
  transition: all 300ms;
  ${props => props.open && css`
    opacity: 0.54;
    visibility: visible;
  `}
`

const SideWrapper = styled.div<{open: boolean}>`
  border: 1px solid #E4E5EB;
  box-sizing: border-box;
  box-shadow: ${props => props.open ? '0px 4px 15px rgba(211, 216, 224, 0.5)' : ''};
  border-radius: unset;
  width: 570px;
  position:fixed;
  right: -570px;
  top: 0;
  background: #fff;
  bottom: 0;
  padding: 0;
  transition: right 200ms;
  z-index: 20;
  max-height: 100vh;
  overflow-y: auto;
  ${props => props.open && css`
    right: 0;
  `}
`
const DrawerBody = styled.div`
  position: relative;
  padding: 70px 30px 50px;
`
const Close = styled('div')`
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 36px;
  position: absolute;
  pointer-events: all;
  right: 25px;
  top: 20px;
  transition: all 100ms;
  width: 36px;
  &:hover {
    background-color: #f2f3f4;
  }
  & svg {
    color: #2c3a50;
    font-size: 18px;
    display: block;
  }
`

type Props = {
  open: boolean;
  onClose: () => void;
}
const Drawer: FunctionComponent<Props> = props => {
  const { open, onClose, children } = props

  return (
    <>
      <Mask open={open} onClick={onClose} />
      <SideWrapper open={open}>
        <DrawerBody>
          <Close onClick={onClose}>
            <X />
          </Close>
          {open && children}
        </DrawerBody>
      </SideWrapper>
    </>
  )
}

export default Drawer
