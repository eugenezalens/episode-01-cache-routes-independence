import { type ComponentPropsWithoutRef, type ComponentType } from 'react'

import { cn } from '@/helpers'

import { FormFieldError, type TFormFieldErrorProps } from './form-field-error'

export type TFormFieldErrorsProps = {
  errorList?: string[]
  slots?: {
    error?: ComponentType<TFormFieldErrorProps>
  }
  slotProps?: {
    error?: TFormFieldErrorProps
  }
} & Omit<ComponentPropsWithoutRef<'div'>, 'children'>

export function FormFieldErrors({ errorList = [], slots, slotProps, className, ...props }: TFormFieldErrorsProps) {
  const Error = slots?.error ?? FormFieldError

  return (
    <div className={cn('flex flex-col gap-sm', className)} {...props}>
      {errorList.map((error, index) => (
        <Error {...slotProps?.error} key={index}>
          {error}
        </Error>
      ))}
    </div>
  )
}
