import { type TServerAuthContext } from '../../../auth/apply-auth.types'
import { type TRequestContext } from '../../../request-context/request-context.types'

export type TBaseRequestInitConfig = {
  headers?: HeadersInit
  auth?: TServerAuthContext
  context?: TRequestContext
  signal?: AbortSignal
}
