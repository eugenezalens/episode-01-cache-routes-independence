import 'client-only'

import { ListQueryHelpers } from './list-query.helpers'
import { type TListQueryPerformClientRequest } from './list-query.types'
import { type TPaginatedApiEnvelope } from '../../types/data-access.types'

export async function performClientListQuery<TEntity = unknown>({
  endpoints,
  params,
}: TListQueryPerformClientRequest): Promise<TPaginatedApiEnvelope<TEntity>> {
  const searchParams = ListQueryHelpers.buildSp(params)
  const path = endpoints.queries.list.getBff()
  const response = await fetch(`${path}?${searchParams.toString()}`)

  if (!response.ok) {
    throw response
  }

  const data = await response.json()

  return data
}
