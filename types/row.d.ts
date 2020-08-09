import type {DashTokens} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {ResponsiveProp} from './layout'
/**
 * A layout component that distributes its items in a row without wrapping
 * like so:
 *
 * ```
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 * ```
 *
 * @example
 * <Row gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Row>
 */
export declare const Row: import('forward-ref-as').ForwardRefAsExoticComponent<
  RowProps,
  'div'
>
export interface RowProps extends BoxProps {
  readonly display?: undefined
  /**
   * Positional alignment for its child items on the y-axis using `align-items`
   */
  readonly align?: ResponsiveProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: ResponsiveProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  /**
   * Sets a horizontal gap between the child elements in the row using the "gap"
   * token in your theme
   */
  readonly gap?: ResponsiveProp<
    Extract<keyof DashTokens['gap'], number | string>
  >
  /**
   * Reverses the direction of the row to left-to-right
   * @default false
   */
  readonly reverse?: ResponsiveProp<boolean>
}
