import 'server-only'

import { updateTag } from 'next/cache'

import { CoreApi, createRequestContext, resolveUpstreamAuth } from '@/core/api/server'

import { type TUpdateMutationExecuteRequest } from './update-mutation.types'

export async function executeUpdateMutation<TEntity = unknown>({
  endpoints,
  cachePolicy,
  params,
  payload,
}: TUpdateMutationExecuteRequest): Promise<{
  data: TEntity
}> {
  const auth = await resolveUpstreamAuth()
  const context = createRequestContext()

  const result = await CoreApi.PUT<TEntity>({
    url: {
      path: endpoints.mutations.update.getPath(params.id),
    },
    body: payload,
    auth,
    context,
  })

  updateTag(cachePolicy.list.getBaseTag())
  updateTag(cachePolicy.byId.getBaseTag(params.id))

  return { data: result.data }
}
