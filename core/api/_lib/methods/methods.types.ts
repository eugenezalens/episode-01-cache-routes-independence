import { type TJsonMutationRequestInitConfig } from '../builders/request/build-json-mutation-request-init.types'
import { type TQueryRequestInitConfig } from '../builders/request/build-query-request-init.types'
import { type TUrlConfig } from '../builders/url/url.types'

type TRequestUrlConfig = {
  url: TUrlConfig
}

export type TGetRequestConfig = TRequestUrlConfig & TQueryRequestInitConfig

export type TPostRequestConfig<TBody = unknown> = TRequestUrlConfig &
  Omit<TJsonMutationRequestInitConfig<TBody>, 'method'>

export type TPutRequestConfig<TBody = unknown> = TRequestUrlConfig &
  Omit<TJsonMutationRequestInitConfig<TBody>, 'method'>

export type TDeleteRequestConfig = TRequestUrlConfig & Omit<TJsonMutationRequestInitConfig<never>, 'method' | 'body'>
