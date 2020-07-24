import type {BoxProps} from './box'
import type {MqProp} from './layout'
export declare const FlexItem: import('./utils').ForwardRefAsExoticComponent<
  FlexItemProps,
  'div'
>
export interface FlexItemProps extends BoxProps {
  /**
   * Sets a `align-self` CSS property on your component
   */
  readonly align?: MqProp<'start' | 'end' | 'center' | 'baseline' | 'stretch'>
  /**
   * Sets a `flex-basis` CSS property on your component
   */
  readonly basis?: MqProp<number | string>
  /**
   * Sets a `flex-grow` CSS property on your component
   */
  readonly grow?: MqProp<boolean | number>
  /**
   * Sets a `max-width` CSS property on your component
   */
  readonly maxWidth?: MqProp<number | string>
  /**
   * Sets a `max-height` CSS property on your component
   */
  readonly maxHeight?: MqProp<number | string>
  /**
   * Sets a `order` CSS property on your component
   */
  readonly order?: MqProp<number>
  /**
   * Sets a `flex-shrink` CSS property on your component
   */
  readonly shrink?: MqProp<boolean | number>
}
