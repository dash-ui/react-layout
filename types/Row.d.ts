import * as React from 'react'
import type {DefaultVars} from '@dash-ui/react'
import type {BoxProps} from './Box'
import type {MediaQueryProp} from './Layout'
/**
 * A component that distributes its items in a row without wrapping like so:
 *
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 *
 */
export declare const Row: React.ForwardRefExoticComponent<
  RowProps & React.RefAttributes<any>
>
export interface RowProps extends BoxProps {
  readonly display?: undefined
  /**
   * Positional alignment for its child items on the y-axis using `align-items`
   */
  readonly align?: MediaQueryProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: MediaQueryProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  readonly gap?: MediaQueryProp<keyof DefaultVars['gap']>
  readonly reverse?: MediaQueryProp<boolean>
}
