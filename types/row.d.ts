import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {MqProp} from './layout'
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
export declare const Row: import('./utils').ForwardRefAsExoticComponent<
  RowProps,
  'div'
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
  /**
   * Sets a horizontal gap between the child elements in the row using the "gap"
   * token in your theme
   */
  readonly gap?: MqProp<keyof DashVariables['gap']>
  /**
   * Reverses the direction of the row to left-to-right
   * @default false
   */
  readonly reverse?: MqProp<boolean>
}
