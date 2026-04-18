import 'client-only'

import { ClientApi } from '@/features/data-access/client'

import { type TPostApiEnvelope } from './posts-queries.types'
import { PostsEndpoints } from '../../contracts/posts-endpoints.contract'
import { type IPost } from '../../models/posts.models'

export async function getClientPost(id: number): Promise<TPostApiEnvelope> {
  return ClientApi.queries.byId<IPost>({
    endpoints: PostsEndpoints,
    params: { id },
  })
}
