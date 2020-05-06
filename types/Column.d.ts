import * as React from 'react'
import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './Box'
import type {MqProp} from './Layout'
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
  readonly align?: MqProp<'start' | 'center' | 'end' | 'baseline' | 'stretch'>
  /**
   * Distributed alignment properties on the y-axis using `justify-content`
   */
  readonly distribute?: MqProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  readonly gap?: MqProp<keyof DashVariables['gap']>
  readonly reverse?: MqProp<boolean>
}
