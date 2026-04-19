import { type TRequestContext } from './request-context.types'

export function createRequestContext(traceparent?: string): TRequestContext {
  return {
    requestId: crypto.randomUUID(),
    traceparent,
  }
}
