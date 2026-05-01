import 'server-only'

import { getServerEnv } from './env'

export function getApiOrigin(): string {
  return getServerEnv().API_ORIGIN
}
