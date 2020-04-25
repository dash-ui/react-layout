import * as React from 'react'
import type {DefaultVars} from '@-ui/react'
import type {BoxProps} from './Box'
/**
 * A component that distributes its items in a row or column without
 * wrapping by default like so:
 *
 * ☐ ☐ ☐ ☐ ☐
 *
 * or
 *
 * ☐
 * ☐
 * ☐
 * ☐
 */
export declare const Stack: React.ForwardRefExoticComponent<
  StackProps & React.RefAttributes<any>
>
export interface StackProps extends BoxProps {
  readonly display?: never
  readonly direction?: 'row' | 'column' | 'reversedRow' | 'reversedColumn'
  readonly alignment?: 'start' | 'center' | 'end'
  readonly distribution?: 'around' | 'between' | 'even' | 'stretch'
  readonly wrap?: 'wrap' | 'reverse' | boolean
  readonly gap?: DefaultVars['gap']
}
export declare const StackItem: React.ForwardRefExoticComponent<
  StackItemProps & React.RefAttributes<any>
>
export interface StackItemProps extends BoxProps {
  readonly basis?: number | string
  readonly maxWidth?: number | string
  readonly maxHeight?: number | string
  readonly fill?: boolean | number
  readonly shrink?: boolean | number
}
