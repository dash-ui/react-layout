import type {BoxProps} from './box'
import type {ResponsiveProp} from './layout'
/**
 * A layout component that can add positioning properties to itself inside
 * of a flex container.
 *
 * @example
 * <FlexItem align='top'/>
 */
export declare const FlexItem: import('forward-ref-as').ForwardRefAsExoticComponent<
  FlexItemProps,
  'div'
>
export interface FlexItemProps extends BoxProps {
  /**
   * Sets a `align-self` CSS property on your component
   */
  readonly align?: ResponsiveProp<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >
  /**
   * Sets a `flex-basis` CSS property on your component
   */
  readonly basis?: ResponsiveProp<number | string>
  /**
   * Sets a `flex-grow` CSS property on your component
   */
  readonly grow?: ResponsiveProp<boolean | number>
  /**
   * Sets a `max-width` CSS property on your component
   */
  readonly maxWidth?: ResponsiveProp<number | string>
  /**
   * Sets a `max-height` CSS property on your component
   */
  readonly maxHeight?: ResponsiveProp<number | string>
  /**
   * Sets a `order` CSS property on your component
   */
  readonly order?: ResponsiveProp<number>
  /**
   * Sets a `flex-shrink` CSS property on your component
   */
  readonly shrink?: ResponsiveProp<boolean | number>
}
