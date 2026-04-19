import { type TBaseRequestInitConfig } from './base/build-base-request-init.types'
import { type TServerCacheConfig } from './base/build-cache-request-init.types'

export type TQueryRequestInitConfig = TBaseRequestInitConfig & {
  cache?: TServerCacheConfig
}
