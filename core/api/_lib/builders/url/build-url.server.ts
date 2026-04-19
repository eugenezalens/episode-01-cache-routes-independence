import 'server-only'

import { getApiOrigin } from '@/core/env/server'

import { type TUrlConfig } from './url.types'

export function buildUrl(config: TUrlConfig): URL {
  const url = new URL(config.path, getApiOrigin())

  if (config.searchParams) {
    url.search = config.searchParams.toString()
  }

  return url
}
