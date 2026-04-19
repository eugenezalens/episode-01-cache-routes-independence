import 'server-only'

import { CoreApi, createRequestContext, resolveUpstreamAuth } from '@/core/api/server'

import { type TByIdQueryExecuteRequest } from './by-id-query.types'
import { type TApiEnvelope } from '../../types/data-access.types'

export async function executeByIdQuery<TEntity = unknown>({
  params,
  endpoints,
  cachePolicy,
}: TByIdQueryExecuteRequest): Promise<TApiEnvelope<TEntity>> {
  const auth = await resolveUpstreamAuth()
  const context = createRequestContext()

  const result = await CoreApi.GET<TEntity>({
    url: {
      path: endpoints.queries.byId.getPath(params.id),
    },
    cache: cachePolicy.byId.getCacheConfig(params.id),
    auth,
    context,
  })

  return { data: result.data }
}
