import { type TPaginatedApiEnvelope, type TApiEnvelope, type TListQueryRequestParams } from '@/features/data-access'

import { type IPost } from '../../models/posts.models'

export type TPostListRequestParams = TListQueryRequestParams<{ userId?: number }>

export type TPostApiEnvelope = TApiEnvelope<IPost>
export type TPostListApiEnvelope = TPaginatedApiEnvelope<IPost>
