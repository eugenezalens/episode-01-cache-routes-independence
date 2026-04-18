import 'client-only'

import { type TListQueryRequestParams } from '@/features/data-access'
import { ClientApi } from '@/features/data-access/client'

import { type TUserListApiEnvelope } from './users-queries.types'
import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getClientUserList(params?: TListQueryRequestParams): Promise<TUserListApiEnvelope> {
  return ClientApi.queries.list<IUser>({
    endpoints: UsersEndpoints,
    params,
  })
}
