import 'server-only'

import { type TPutRequestConfig } from './methods.types'
import { buildJsonMutationRequestInit } from '../builders/request/build-json-mutation-request-init'
import { buildUrl } from '../builders/url/build-url.server'
import { sendRequest } from '../transport/send-request'
import { type TApiResult } from '../types/api.types'

export async function sendPutRequest<TData = unknown, TBody = unknown>(
  config: TPutRequestConfig<TBody>,
): Promise<TApiResult<TData>> {
  return sendRequest<TData>(
    buildUrl(config.url),
    buildJsonMutationRequestInit({
      ...config,
      method: 'PUT',
    }),
  )
}
