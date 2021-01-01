/// <reference types="react" />
import {forwardRefWithAs} from '@radix-ui/react-polymorphic'
import type {ForwardRefExoticComponentWithAs} from '@radix-ui/react-polymorphic'
/**
 * Adds a `px` unit to numeric values and returns non-numeric values as
 * they are.
 * @param value The value you want to maybe add a unit to
 */
export declare function unit<T extends unknown>(value: T): string | T
export declare function forwardRefAs<
  OwnProps = {},
  E extends
    | keyof JSX.IntrinsicElements
    | ForwardRefExoticComponentWithAs<any, any> = 'div'
>(
  ...args: Parameters<typeof forwardRefWithAs>
): ForwardRefExoticComponentWithAs<
  import('@radix-ui/react-polymorphic').IntrinsicElement<E>,
  import('@radix-ui/react-polymorphic').ExtendedProps<E, OwnProps>
>
