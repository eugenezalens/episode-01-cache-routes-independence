import { BadRequestHttpError } from './_lib/errors/bad-request-http-error'
import { BaseHttpError } from './_lib/errors/base'
import { ForbiddenHttpError } from './_lib/errors/forbidden-http-error'
import { NotFoundHttpError } from './_lib/errors/not-found-http-error'
import { UnauthorizedHttpError } from './_lib/errors/unauthorized-http-error'
import { UpstreamHttpError } from './_lib/errors/upstream-http-error'

export const HttpErrors = {
  Base: BaseHttpError,
  NotFound: NotFoundHttpError,
  BadRequest: BadRequestHttpError,
  Unauthorized: UnauthorizedHttpError,
  Forbidden: ForbiddenHttpError,
  Upstream: UpstreamHttpError,
} as const

export { HttpErrorCodes, type THttpErrorCode } from './_lib/http-errors.constants'
