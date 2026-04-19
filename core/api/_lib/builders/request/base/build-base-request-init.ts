import { type TBaseRequestInitConfig } from './build-base-request-init.types'
import { buildSystemHeaders } from './build-system-headers'
import { applyAuth } from '../../../auth/apply-auth.server'

export function buildBaseRequestInit(config: TBaseRequestInitConfig): {
  init: RequestInit
  headers: Headers
} {
  const headers = buildSystemHeaders(config)

  applyAuth(headers, config.auth)

  const init: RequestInit = {
    headers,
    signal: config.signal,
    credentials: 'omit',
  }

  return { init, headers }
}
