import 'client-only'

import { ClientApi } from '@/features/data-access/client'

import { type TCommentApiEnvelope } from './comments-queries.types'
import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getClientComment(id: number): Promise<TCommentApiEnvelope> {
  return ClientApi.queries.byId<IComment>({
    endpoints: CommentsEndpoints,
    params: { id },
  })
}
