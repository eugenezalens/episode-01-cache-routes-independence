import 'server-only'

import { ServerApi } from '@/features/data-access/server'

import { type TPostListApiEnvelope, type TPostListRequestParams } from './posts-queries.types'
import { PostsCachePolicy } from '../../contracts/posts-cache-policy.contract'
import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { type IPost } from '../../models/posts.models'

export async function getServerPostList(params?: TPostListRequestParams): Promise<TPostListApiEnvelope> {
  return ServerApi.queries.list<IPost>({
    endpoints: PostsEndpoints,
    cachePolicy: PostsCachePolicy,
    params,
  })
}
