import { type TBaseRequestInitConfig } from './build-base-request-init.types'

export function buildSystemHeaders(config: TBaseRequestInitConfig): Headers {
  const headers = new Headers(config.headers)

  headers.set('Accept', 'application/json')

  if (config.context?.requestId) {
    headers.set('X-Request-Id', config.context.requestId)
  }

  if (config.context?.traceparent) {
    headers.set('traceparent', config.context.traceparent)
  }

  return headers
}
