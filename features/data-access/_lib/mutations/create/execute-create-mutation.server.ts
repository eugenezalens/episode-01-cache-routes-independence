import 'server-only'

import { updateTag } from 'next/cache'

import { CoreApi, createRequestContext, resolveUpstreamAuth } from '@/core/api/server'

import { type TCreateMutationExecuteRequest } from './create-mutation.types'

export async function executeCreateMutation<TEntity = unknown>({
  endpoints,
  cachePolicy,
  payload,
}: TCreateMutationExecuteRequest): Promise<{
  data: TEntity
}> {
  const auth = await resolveUpstreamAuth()
  const context = createRequestContext()

  const result = await CoreApi.POST<TEntity>({
    url: {
      path: endpoints.mutations.create.getPath(),
    },
    body: payload,
    auth,
    context,
  })

  updateTag(cachePolicy.list.getBaseTag())

  return { data: result.data }
}
