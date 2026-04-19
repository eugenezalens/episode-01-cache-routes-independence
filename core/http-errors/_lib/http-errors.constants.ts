export const HttpErrorCodes = {
  notFound: 'NOT_FOUND',
  badRequest: 'BAD_REQUEST',
  unauthorized: 'UNAUTHORIZED',
  forbidden: 'FORBIDDEN',
  upstream: 'UPSTREAM_ERROR',
} as const

export type THttpErrorCode = (typeof HttpErrorCodes)[keyof typeof HttpErrorCodes]
