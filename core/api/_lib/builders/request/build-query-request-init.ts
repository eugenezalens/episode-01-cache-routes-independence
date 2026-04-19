import { buildBaseRequestInit } from './base/build-base-request-init'
import { buildCacheRequestInit } from './base/build-cache-request-init'
import { type TQueryRequestInitConfig } from './build-query-request-init.types'

export function buildQueryRequestInit(config: TQueryRequestInitConfig): RequestInit {
  const { init } = buildBaseRequestInit(config)

  init.method = 'GET'

  if (config.cache) {
    init.next = buildCacheRequestInit(config.cache)
  }

  return init
}
