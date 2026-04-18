import 'server-only'

import { ServerApi } from '@/features/data-access/server'

import { type TPostApiEnvelope } from './posts-queries.types'
import { PostsCachePolicy } from '../../contracts/posts-cache-policy.contract'
import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { type IPost } from '../../models/posts.models'

export async function getServerPost(id: number): Promise<TPostApiEnvelope> {
  return ServerApi.queries.byId<IPost>({
    endpoints: PostsEndpoints,
    cachePolicy: PostsCachePolicy,
    params: { id },
  })
}
