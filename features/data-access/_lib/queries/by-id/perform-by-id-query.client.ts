import 'client-only'

import { type TByIdQueryPerformClientRequest } from './by-id-query.types'
import { type TApiEnvelope } from '../../types/data-access.types'

export async function performClientByIdQuery<TEntity = unknown>({
  endpoints,
  params,
}: TByIdQueryPerformClientRequest): Promise<TApiEnvelope<TEntity>> {
  const response = await fetch(endpoints.queries.byId.getBff(params.id))

  if (!response.ok) {
    throw response
  }

  const data = await response.json()

  return data
}
