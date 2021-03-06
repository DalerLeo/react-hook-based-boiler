/* eslint-disable */

// eslint-disable-next-line import/named
import { DefaultTheme } from 'styled-components'

export const cubeTheme = {
  borderRadius: {
    md: '10px',
    sm: '5px'
  },
  shadows: {
    md: '0px 4px 15px rgba(211, 216, 224, 0.5);',
    sm: '',
    lg: '',
  },
  palette: {
    primary: {
      main: '#333541',
      light: '#e0ecfc',
      dark: '',
      hover: '#555',
      active: '#444',
      focus: ''
    },
    secondary: {
      main: '',
      light: '',
      dark: '',
      hover: '',
      active: '',
      focus: ''

    },
    danger: {
      main: '',
      light: '',
      dark: '',
      hover: '',
      active: '',
      focus: ''

    }
  },
  input: {
    colors: {
      background: '#fbfbfb',
      hover: '#fbfbfb',
      label: '',
      placeholder: '',
      border: '#eaebee'
    }
  },
}

const theme: DefaultTheme = {
  cube: cubeTheme,
  border: '1px solid #E0E0E0',
  borderColor: '#eaebee',

  boxShadow: '0px 4px 15px rgba(211, 216, 224, 0.5);\n' +
    'border-radius: 10px;',
  borderRadius: {
    md: '10px',
    sm: '5px'
  },
  transition: 'all 300ms',
  transitionTime: '300ms',
  colors: {
    grey: '#BDBDBD',
    text: '#36434E',
    black: '#4F4F4F',
    primary: {
      default: '#2F80ED',
      hover: '#ebf2fd'
    }
  },
}

export default theme
