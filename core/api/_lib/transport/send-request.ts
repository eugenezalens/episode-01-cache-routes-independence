import { HttpErrors } from '@/core/http-errors'

import { type TApiResult } from '../types/api.types'

export async function sendRequest<TData = unknown>(url: URL, requestInit: RequestInit): Promise<TApiResult<TData>> {
  let response: Response

  try {
    response = await fetch(url, requestInit)
  } catch (error) {
    console.error('Network error while fetching:', error)
    throw new HttpErrors.Upstream('Network error: Unable to reach upstream')
  }

  if (!response.ok) {
    if (response.status === 401) {
      throw new HttpErrors.Unauthorized('Unauthorized')
    }

    if (response.status === 403) {
      throw new HttpErrors.Forbidden('Forbidden')
    }

    if (response.status === 404) {
      throw new HttpErrors.NotFound(`Entity not found at ${url}`)
    }

    if (response.status >= 500) {
      throw new HttpErrors.Upstream(`Upstream returned ${response.status}`)
    }

    throw new HttpErrors.Upstream(`Request failed with status ${response.status}`)
  }

  const data = await parseResponseBody<TData>(response)

  return {
    data,
    headers: response.headers,
    status: response.status,
  }
}

async function parseResponseBody<TData>(response: Response): Promise<TData> {
  if (response.status === 204) {
    return undefined as TData
  }

  const contentLength = response.headers.get('content-length')

  if (contentLength === '0') {
    return undefined as TData
  }

  const contentType = response.headers.get('content-type') ?? ''

  if (!contentType.includes('application/json')) {
    return undefined as TData
  }

  return (await response.json()) as TData
}
