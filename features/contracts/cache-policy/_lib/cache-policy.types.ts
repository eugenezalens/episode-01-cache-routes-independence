import { type TServerCacheConfig } from '@/core/api'

type TCachePolicySelector<TBaseParamList extends unknown[] = [], TConfigParamList extends unknown[] = []> = {
  getBaseTag: (...paramList: TBaseParamList) => string
  getCacheConfig: (...paramList: TConfigParamList) => TServerCacheConfig
}

export type TBaseCachePolicy = TCachePolicySelector
export type TCachePolicyList = TCachePolicySelector
export type TCachePolicyById = TCachePolicySelector<[id: number], [id: number]>
export type TCachePolicySelection = TCachePolicySelector<[], [idList: number[]]>

export type TCachePolicyConfig = {
  entity: string
}

export type TCachePolicy = {
  base: TBaseCachePolicy
  list: TCachePolicyList
  byId: TCachePolicyById
  selection: TCachePolicySelection
}
