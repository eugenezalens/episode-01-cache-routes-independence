export type TApiResult<TData = unknown> = {
  data: TData
  headers: Headers
  status: number
}
