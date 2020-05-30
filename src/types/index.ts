export { History as THistory } from 'history'
export type Merge<A, B> = {
  [K in keyof A]: K extends keyof B ? B[K] : A[K]
} & B

export * from './store'
export * from './routes'
export * from '../types/hooks'
export * from './get'
export * from './models'
