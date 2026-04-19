import 'server-only'

import { sendDeleteRequest } from './_lib/methods/send-delete-request.server'
import { sendGetRequest } from './_lib/methods/send-get-request.server'
import { sendPostRequest } from './_lib/methods/send-post-request.server'
import { sendPutRequest } from './_lib/methods/send-put-request.server'

export const CoreApi = {
  GET: sendGetRequest,
  POST: sendPostRequest,
  PUT: sendPutRequest,
  DELETE: sendDeleteRequest,
} as const

export { resolveUpstreamAuth } from './_lib/auth/resolve-upstream-auth.server'
export { createRequestContext } from './_lib/request-context/create-request-context.server'
