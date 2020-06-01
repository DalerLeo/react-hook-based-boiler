import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { prop } from 'ramda'

import useFileUploads from './useFileUploads'

const Input = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -999;
`

const Label = styled('label')`
display: block;
height: 150px;
`

const ImageField = styled('div')`
  align-items: center;
  border: 1px solid #ced0dd;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 100%;
  transition: 200ms;
  overflow: hidden;
  width: 100%;
  &:hover {
    border-color: grey;
  }
`

const Image = styled('div')`
  background-image: ${({ url }) => (url ? `url(${url})` : 'none')};
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
`

const Placeholder = styled('div')`
  color: lightgrey;
  font-weight: 500;
  text-align: center;
  & svg {
    color: #d3d5db;
    font-size: 38px;
    display: block;
    margin: 0 auto 7px;
  }
`
const Img = styled.img`
  width: 100%;
  height: 150px;
`
const ImageUploadField = props => {
  const {
    label,
    input: { name, value },
    onSuccess
  } = props

  const [state, onChange] = useFileUploads({ input: props.input, onSuccess })
  const { loading, error } = state

  const inputId = `imageInput-${name}`
  const src = prop('file', value)
  return (
    <div>
      <div>{label}</div>
      <Input onChange={onChange} type="file" id={inputId} />
      <Label htmlFor={inputId}>
        <ImageField>
          {src ? (
            <Image url={src} />
          ) : (
            <Placeholder>
              <div>{loading ? 'loading...' : <Img alt="Photo" />}</div>
            </Placeholder>
          )}
        </ImageField>
      </Label>
      <div>{prop('detail', error)}</div>
    </div>
  )
}

ImageUploadField.propTypes = {
  label: PropTypes.string,
  input: PropTypes.object.isRequired,
  onSuccess: PropTypes.func
}

export default ImageUploadField
