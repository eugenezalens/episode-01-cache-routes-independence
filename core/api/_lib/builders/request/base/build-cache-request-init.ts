import { type TServerCacheConfig } from './build-cache-request-init.types'

export function buildCacheRequestInit(cache: TServerCacheConfig) {
  return {
    revalidate: cache.ttl,
    tags: cache.tagList,
  }
}
