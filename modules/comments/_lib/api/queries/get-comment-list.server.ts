import 'server-only'

import { ServerApi } from '@/features/data-access/server'

import { type TCommentListApiEnvelope, type TCommentListRequestParams } from './comments-queries.types'
import { CommentsCachePolicy } from '../../contracts/comments-cache-policy.contract'
import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getServerCommentList(params?: TCommentListRequestParams): Promise<TCommentListApiEnvelope> {
  return ServerApi.queries.list<IComment>({
    endpoints: CommentsEndpoints,
    cachePolicy: CommentsCachePolicy,
    params,
  })
}
