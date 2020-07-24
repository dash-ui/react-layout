import * as React from 'react'
import {FromReactType, Prefer, AsProp} from './types'
/**
 * Adds a `px` unit to numeric values and returns non-numeric values as
 * they are.
 * @param value The value you want to maybe add a unit to
 */
export declare function unit<T extends unknown>(value: T): string | T
/**
 * A wrapper around `React.forwardRef` that allows HTML attributes and prop types to be derived from the `as` prop.
 * @param render A React ref forwarding component
 *
 * @example
 * forwardRefAs<ButtonProps, 'button'>(ButtonComponent)
 */
export declare function forwardRefAs<Props, DefaultAs extends AsProp = 'div'>(
  render: React.RefForwardingComponent<
    HTMLElement | SVGElement | React.ComponentType,
    Props
  >
): ForwardRefAsExoticComponent<Props, DefaultAs>
/**
 * This is a signature that matches `ForwardRefExoticComponent`, but allows for
 * inheriting attributes via the "as" prop and gets rid of `propTypes` because,
 * dang it, this is TypeScript! Get that outta here.
 */
export declare type ForwardRefAsExoticComponent<
  Props,
  DefaultAs extends AsProp
> = Pick<
  React.ForwardRefExoticComponent<DefaultAs>,
  Exclude<keyof React.ForwardRefExoticComponent<DefaultAs>, 'defaultProps'>
> & {
  <As extends AsProp = DefaultAs>(
    props: Prefer<
      {
        as?: As
      } & Props,
      React.ComponentProps<As>
    > &
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
