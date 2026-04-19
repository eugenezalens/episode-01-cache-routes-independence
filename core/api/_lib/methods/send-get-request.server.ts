import 'server-only'

import { type TGetRequestConfig } from './methods.types'
import { buildQueryRequestInit } from '../builders/request/build-query-request-init'
import { buildUrl } from '../builders/url/build-url.server'
import { sendRequest } from '../transport/send-request'
import { type TApiResult } from '../types/api.types'

export async function sendGetRequest<TData = unknown>(config: TGetRequestConfig): Promise<TApiResult<TData>> {
  return sendRequest<TData>(buildUrl(config.url), buildQueryRequestInit(config))
}
