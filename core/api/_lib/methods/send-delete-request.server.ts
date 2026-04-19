import 'server-only'

import { type TDeleteRequestConfig } from './methods.types'
import { buildJsonMutationRequestInit } from '../builders/request/build-json-mutation-request-init'
import { buildUrl } from '../builders/url/build-url.server'
import { sendRequest } from '../transport/send-request'
import { type TApiResult } from '../types/api.types'

export async function sendDeleteRequest<TData = void>(config: TDeleteRequestConfig): Promise<TApiResult<TData>> {
  return sendRequest<TData>(
    buildUrl(config.url),
    buildJsonMutationRequestInit({
      ...config,
      method: 'DELETE',
    }),
  )
}
