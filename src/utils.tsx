import * as React from 'react'
import {FromReactType, Prefer, AsProp} from './types'

export function unit<T extends unknown>(value: T) {
  return !isNaN(value as any) && value !== 0 ? `${value}px` : value
}

export function forwardRefAs<Props, DefaultAs extends AsProp = 'div'>(
  factory: React.RefForwardingComponent<
    HTMLElement | SVGElement | React.ComponentType,
    Props
  >
) {
  return React.forwardRef<any, Props>(factory) as ForwardRefAsExoticComponent<
    Props,
    DefaultAs
  >
}

export type ForwardRefAsExoticComponent<Props, DefaultAs extends AsProp> = Pick<
  React.ForwardRefExoticComponent<DefaultAs>,
  Exclude<keyof React.ForwardRefExoticComponent<DefaultAs>, 'defaultProps'>
> & {
  <As extends AsProp = DefaultAs>(
    props: Prefer<{as?: As} & Props, React.ComponentProps<As>> &
      React.RefAttributes<
        As extends keyof JSX.IntrinsicElements ? FromReactType<As> : As
      >
  ): JSX.Element | null
  defaultProps: {
    as?: AsProp
  } & Partial<Props> &
    Partial<React.ComponentPropsWithoutRef<DefaultAs>>
  displayName: string
}
