import { type TPaginatedApiEnvelope, type TListQueryRequestParams, type TApiEnvelope } from '@/features/data-access'

import { type IComment } from '../../models/comments.models'

export type TCommentListRequestParams = TListQueryRequestParams<{ postId?: number }>

export type TCommentApiEnvelope = TApiEnvelope<IComment>
export type TCommentListApiEnvelope = TPaginatedApiEnvelope<IComment>
