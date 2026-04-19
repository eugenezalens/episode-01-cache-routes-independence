import { buildBaseRequestInit } from './base/build-base-request-init'
import { type TJsonMutationRequestInitConfig } from './build-json-mutation-request-init.types'

export function buildJsonMutationRequestInit<TBody = unknown>(
  config: TJsonMutationRequestInitConfig<TBody>,
): RequestInit {
  const { init, headers } = buildBaseRequestInit(config)

  init.method = config.method

  if (config.body !== undefined) {
    headers.set('Content-Type', 'application/json')
    init.body = JSON.stringify(config.body)
  }

  return init
}
