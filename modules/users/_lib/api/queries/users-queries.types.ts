import { type TPaginatedApiEnvelope, type TApiEnvelope } from '@/features/data-access'

import { type IUser } from '../../models/users.models'

export type TUserApiEnvelope = TApiEnvelope<IUser>
export type TUserListApiEnvelope = TPaginatedApiEnvelope<IUser>
