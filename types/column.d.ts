import type {DashTokens} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {ResponsiveProp} from './layout'
/**
 * A layout component that distributes its items in a column without wrapping
 * like so:
 *
 * ```
 * ☐
 * ☐
 * ☐
 * ☐
 * ```
 *
 * @example
 * <Column gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Column>
 */
export declare const Column: import('forward-ref-as').ForwardRefAsExoticComponent<
  ColumnProps,
  'div'
>
export interface ColumnProps extends BoxProps {
  readonly display?: undefined
  /**
   * Positional alignment for its child items on the x-axis using `align-items`
   */
  readonly align?: ResponsiveProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the y-axis using `justify-content`
   */
  readonly distribute?: ResponsiveProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  /**
   * Sets a vertical gap between the child elements in the column using the "gap"
   * token in your theme
   */
  readonly gap?: ResponsiveProp<
    Extract<keyof DashTokens['gap'], number | string>
  >
  /**
   * Reverses the direction of the column to bottom-to-top
   * @default false
   */
  readonly reverse?: ResponsiveProp<boolean>
}
