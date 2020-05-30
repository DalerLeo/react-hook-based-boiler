import React, { FunctionComponent } from 'react'
import { Modal as ModalUI } from 'ui-cubic/dist/index.es'

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  fadeType?: 'in' | 'out';
  fadeDuration?: number;
  maskClosable?: boolean;
  isRendered?: boolean;
  showCloseIcon?: boolean;
  showHeader?: boolean;
  fullWidth?: boolean;
  maxWidth?: string;
  width?: string;
  zIndex?: number;
}
const Modal: FunctionComponent<Props> = props => {
  return <ModalUI {...props} />
}

Modal.defaultProps = {
  isRendered: false
}
export default Modal
