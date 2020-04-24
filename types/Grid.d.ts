import * as React from 'react'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'
import type {MediaQueryProp} from './Layout'
export declare const Grid: React.ForwardRefExoticComponent<
  GridProps & React.RefAttributes<any>
>
export declare const GridItem: React.ForwardRefExoticComponent<
  GridItemProps & React.RefAttributes<any>
>
declare type GapProp =
  | keyof DefaultVars['gap']
  | [keyof DefaultVars['gap'], keyof DefaultVars['gap']]
export interface GridProps extends FrameProps {
  readonly display?: undefined
  /** justify-items */
  readonly alignX?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-items */
  readonly alignY?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-template-columns */
  readonly cols?: MediaQueryProp<number | (number | string)[]>
  /** justify-content */
  readonly distributeX?: MediaQueryProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** align-content */
  readonly distributeY?: MediaQueryProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** grid-gap, row-gap, column-gap */
  readonly gap?: MediaQueryProp<GapProp>
  /** display: inline-grid */
  readonly inline?: MediaQueryProp<boolean>
  /** grid-template-rows */
  readonly rows?: MediaQueryProp<number | (number | string)[]>
}
export interface GridItemProps extends FrameProps {
  /** justify-self */
  readonly alignX?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-self */
  readonly alignY?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-column-start */
  readonly colStart?: MediaQueryProp<number | string>
  /** grid-column-end */
  readonly colEnd?: MediaQueryProp<number | string>
  /** grid-row-start */
  readonly rowStart?: MediaQueryProp<number | string>
  /** grid-row-end */
  readonly rowEnd?: MediaQueryProp<number | string>
}
export {}
