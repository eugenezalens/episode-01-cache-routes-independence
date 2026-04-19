import { HttpErrorCodes } from '../http-errors.constants'
import { BaseHttpError } from './base'

export class ForbiddenHttpError extends BaseHttpError {
  constructor(message = 'Forbidden') {
    super(message, 403, HttpErrorCodes.forbidden)
  }
}
