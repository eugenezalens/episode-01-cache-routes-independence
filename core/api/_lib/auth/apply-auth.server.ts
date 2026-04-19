import 'server-only'

import { type TServerAuthContext } from './apply-auth.types'

export function applyAuth(headers: Headers, auth?: TServerAuthContext) {
  if (!auth || auth.kind === 'none') {
    return
  }

  if (auth.kind === 'bearer') {
    headers.set('Authorization', `${auth.scheme ?? 'Bearer'} ${auth.token}`)
  }
}
