import * as React from 'react'
import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {MqProp} from './layout'
export declare const Grid: React.ForwardRefExoticComponent<
  GridProps & React.RefAttributes<any>
>
export declare const GridItem: React.ForwardRefExoticComponent<
  GridItemProps & React.RefAttributes<any>
>
declare type GapProp =
  | keyof DashVariables['gap']
  | [keyof DashVariables['gap'], keyof DashVariables['gap']]
export interface GridProps extends BoxProps {
  readonly display?: undefined
  /** justify-items */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-items */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-template-columns */
  readonly cols?: MqProp<number | (number | string)[]>
  /** justify-content */
  readonly distributeX?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** align-content */
  readonly distributeY?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** grid-gap, row-gap, column-gap */
  readonly gap?: MqProp<GapProp>
  /** display: inline-grid */
  readonly inline?: MqProp<boolean>
  /** grid-template-rows */
  readonly rows?: MqProp<number | (number | string)[]>
}
export interface GridItemProps extends BoxProps {
  /** justify-self */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-self */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-column-start */
  readonly colStart?: MqProp<number | string>
  /** grid-column-end */
  readonly colEnd?: MqProp<number | string>
  /** grid-row-start */
  readonly rowStart?: MqProp<number | string>
  /** grid-row-end */
  readonly rowEnd?: MqProp<number | string>
}
export {}
