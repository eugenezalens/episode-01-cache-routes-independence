import 'server-only'

import { ServerApi } from '@/features/data-access/server'

import { type TCommentApiEnvelope } from './comments-queries.types'
import { CommentsCachePolicy } from '../../contracts/comments-cache-policy.contract'
import { CommentsEndpoints } from '../../contracts/comments-endpoints.contract'
import { type IComment } from '../../models/comments.models'

export async function getServerComment(id: number): Promise<TCommentApiEnvelope> {
  return ServerApi.queries.byId<IComment>({
    endpoints: CommentsEndpoints,
    cachePolicy: CommentsCachePolicy,
    params: { id },
  })
}
