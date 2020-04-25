import * as React from 'react'
import type {DefaultVars} from '@-ui/react'
import type {BoxProps} from './Box'
import type {MediaQueryProp} from './Layout'
/**
 * A component that distributes its items in a column without wrapping like so:
 *
 * ☐
 * ☐
 * ☐
 * ☐
 *
 */
export declare const Column: React.ForwardRefExoticComponent<
  ColumnProps & React.RefAttributes<any>
>
export interface ColumnProps extends BoxProps {
  readonly display?: undefined
  /**
   * Positional alignment for its child items on the x-axis using `align-items`
   */
  readonly align?: MediaQueryProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the y-axis using `justify-content`
   */
  readonly distribute?: MediaQueryProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  readonly gap?: MediaQueryProp<keyof DefaultVars['gap']>
  readonly reverse?: MediaQueryProp<boolean>
}
