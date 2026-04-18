import 'server-only'

import { type TListQueryRequestParams } from '@/features/data-access'
import { ServerApi } from '@/features/data-access/server'

import { type TUserListApiEnvelope } from './users-queries.types'
import { UsersCachePolicy } from '../../contracts/users-cache-policy.contract'
import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getServerUserList(params?: TListQueryRequestParams): Promise<TUserListApiEnvelope> {
  return ServerApi.queries.list<IUser>({
    endpoints: UsersEndpoints,
    cachePolicy: UsersCachePolicy,
    params,
  })
}
