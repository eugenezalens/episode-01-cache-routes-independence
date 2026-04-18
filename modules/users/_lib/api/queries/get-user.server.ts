import 'server-only'

import { ServerApi } from '@/features/data-access/server'

import { type TUserApiEnvelope } from './users-queries.types'
import { UsersCachePolicy } from '../../contracts/users-cache-policy.contract'
import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getServerUser(id: number): Promise<TUserApiEnvelope> {
  return ServerApi.queries.byId<IUser>({
    endpoints: UsersEndpoints,
    cachePolicy: UsersCachePolicy,
    params: { id },
  })
}
