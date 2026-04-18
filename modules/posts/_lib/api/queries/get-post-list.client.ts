import 'client-only'

import { ClientApi } from '@/features/data-access/client'

import { type TPostListApiEnvelope, type TPostListRequestParams } from './posts-queries.types'
import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { type IPost } from '../../models/posts.models'

export async function getClientPostList(params?: TPostListRequestParams): Promise<TPostListApiEnvelope> {
  return ClientApi.queries.list<IPost>({
    endpoints: PostsEndpoints,
    params,
  })
}
