import { type TBaseRequestInitConfig } from './base/build-base-request-init.types'

export type TJsonMutationRequestInitConfig<TBody = unknown> = TBaseRequestInitConfig & {
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE'
  body?: TBody
}
