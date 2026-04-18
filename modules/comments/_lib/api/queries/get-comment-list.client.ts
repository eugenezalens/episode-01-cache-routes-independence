import 'client-only'

import { ClientApi } from '@/features/data-access/client'

import { type TCommentListApiEnvelope, type TCommentListRequestParams } from './comments-queries.types'
import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getClientCommentList(params?: TCommentListRequestParams): Promise<TCommentListApiEnvelope> {
  return ClientApi.queries.list<IComment>({
    endpoints: CommentsEndpoints,
    params,
  })
}
