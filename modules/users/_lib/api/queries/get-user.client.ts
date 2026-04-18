import 'client-only'

import { ClientApi } from '@/features/data-access/client'

import { type TUserApiEnvelope } from './users-queries.types'
import { UsersEndpoints } from '../../contracts/users-endpoints.contract'
import { type IUser } from '../../models/users.models'

export async function getClientUser(id: number): Promise<TUserApiEnvelope> {
  return ClientApi.queries.byId<IUser>({
    endpoints: UsersEndpoints,
    params: { id },
  })
}
