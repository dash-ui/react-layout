import type {DashVariables} from '@dash-ui/styles'
import type {MqProp} from './layout'
import type {AsProp} from './types'
/**
 * A layout component for adding size, padding, position, color, and more
 * using tokens from your CSS variable theme.
 *
 * @example
 * <Box size={300} bg={{sm: 'red', md: 'blue'}}/>
 */
export declare const Box: import('./utils').ForwardRefAsExoticComponent<
  BoxProps,
  'button'
>
export interface BoxProps {
  /**
   * Renders your component "as" this component
   * @default "div"
   */
  readonly as?: AsProp
  /**
   * Adds one or several class names to your component
   */
  readonly className?: string | string[]
  /**
   * Sets a `display` CSS property on your component
   */
  readonly display?: MqProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline' | 'none'
  >
  /**
   * Sets a `position` CSS property on your component
   */
  readonly position?: MqProp<'relative' | 'absolute' | 'sticky' | 'fixed'>
  /**
   * Sets a `width` CSS property on your component
   */
  readonly width?: MqProp<number | string>
  /**
   * Sets a `height` CSS property on your component
   */
  readonly height?: MqProp<number | string>
  /**
   * Sets a `width` and `height` CSS property on your component
   */
  readonly size?: MqProp<number | string>
  /**
   * Sets a `padding` CSS property on your component using the "pad"
   * token in your theme
   */
  readonly pad?: MqProp<
    keyof DashVariables['pad'] | (keyof DashVariables['pad'])[]
  >
  /**
   * Sets a `background-color` CSS property on your component using the "color"
   * token in your theme
   */
  readonly bg?: MqProp<keyof DashVariables['color']>
  /**
   * Sets a `box-shadow` CSS property on your component using the "elevation"
   * token in your theme
   */
  readonly elevation?: MqProp<keyof DashVariables['elevation']>
  /**
   * Sets a `border-radius` CSS property on your component using the "radius"
   * token in your theme
   */
  readonly radius?: MqProp<
    keyof DashVariables['radius'] | (keyof DashVariables['radius'])[]
  >
}
