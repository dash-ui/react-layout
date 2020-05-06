import * as React from 'react'
import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './Box'
import type {MqProp} from './Layout'
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
  readonly align?: MqProp<'start' | 'center' | 'end' | 'baseline' | 'stretch'>
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: MqProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  readonly gap?: MqProp<keyof DashVariables['gap']>
  readonly reverse?: MqProp<boolean>
}
