import 'server-only'

import { CoreApi, createRequestContext, resolveUpstreamAuth } from '@/core/api/server'

import { ListQueryHelpers } from './list-query.helpers'
import { type TListQueryExecuteRequest } from './list-query.types'
import { type TPaginatedApiEnvelope } from '../../types/data-access.types'

export async function executeListQuery<TEntity = unknown>(
  config: TListQueryExecuteRequest,
): Promise<TPaginatedApiEnvelope<TEntity>> {
  const { endpoints, searchParams } = config

  const auth = await resolveUpstreamAuth()
  const context = createRequestContext()

  const result = await CoreApi.GET<TEntity[]>({
    url: {
      path: endpoints.queries.list.getPath(),
      searchParams,
    },
    cache: ListQueryHelpers.getCachePolicy(searchParams, config.cachePolicy),
    auth,
    context,
  })

  return {
    data: result.data,
    meta: {
      pagination: ListQueryHelpers.buildPaginationMeta(searchParams, result.headers),
    },
  }
}
