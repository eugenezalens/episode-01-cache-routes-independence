import { type TServerAuthContext } from './apply-auth.types'

const JWT = 'JWT'

export async function resolveUpstreamAuth(): Promise<TServerAuthContext> {
  return {
    kind: 'bearer',
    token: JWT,
  }
}
