import * as React from 'react'
import {FromReactType, Prefer, AsProp} from './types'
export declare function unit<T extends unknown>(value: T): string | T
export declare function forwardRefAs<
  TOwnProps,
  TDefaultComponent extends AsProp = 'div'
>(
  factory: React.RefForwardingComponent<
    HTMLElement | SVGElement | React.ComponentType,
    TOwnProps
  >
): ForwardRefAsExoticComponent<TOwnProps, TDefaultComponent>
export declare type ForwardRefAsExoticComponent<
  TOwnProps,
  TDefaultComponent extends AsProp
> = Pick<
  React.ForwardRefExoticComponent<TDefaultComponent>,
  Exclude<
    keyof React.ForwardRefExoticComponent<TDefaultComponent>,
    'defaultProps'
  >
> & {
  <TAsComponent extends AsProp = TDefaultComponent>(
    props: Prefer<
      {
        as?: TAsComponent
      } & TOwnProps,
      React.ComponentProps<TAsComponent>
    > &
      React.RefAttributes<
        TAsComponent extends keyof JSX.IntrinsicElements
          ? FromReactType<TAsComponent>
          : TAsComponent
      >
  ): JSX.Element | null
  defaultProps: {
    as?: AsProp
  } & Partial<TOwnProps> &
    Partial<React.ComponentPropsWithoutRef<TDefaultComponent>>
  displayName: string
}
