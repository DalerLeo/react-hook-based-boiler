import { keyframes } from 'styled-components'

export const animateFlash = keyframes`
  from { opacity: 0.5; }
  to { opacity: 1; }
`
const borderAnimation = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`
export const borderFlashing = `${borderAnimation.name} 400ms linear infinite alternate`
export default `${animateFlash.name} 400ms linear infinite alternate`
