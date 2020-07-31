import type {DashTokens} from '@dash-ui/styles'
import type {ResponsiveProp} from './layout'
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
  readonly display?: ResponsiveProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline' | 'none'
  >
  /**
   * Sets a `position` CSS property on your component
   */
  readonly position?: ResponsiveProp<
    'relative' | 'absolute' | 'sticky' | 'fixed'
  >
  /**
   * Sets a `width` CSS property on your component
   */
  readonly width?: ResponsiveProp<number | string>
  /**
   * Sets a `height` CSS property on your component
   */
  readonly height?: ResponsiveProp<number | string>
  /**
   * Sets a `width` and `height` CSS property on your component
   */
  readonly size?: ResponsiveProp<number | string>
  /**
   * Sets a `padding` CSS property on your component using the "pad"
   * token in your theme
   */
  readonly pad?: ResponsiveProp<
    keyof DashTokens['pad'] | (keyof DashTokens['pad'])[]
  >
  /**
   * Sets a `background-color` CSS property on your component using the "color"
   * token in your theme
   */
  readonly bg?: ResponsiveProp<keyof DashTokens['color']>
  /**
   * Sets a `box-shadow` CSS property on your component using the "elevation"
   * token in your theme
   */
  readonly elevation?: ResponsiveProp<keyof DashTokens['elevation']>
  /**
   * Sets a `border-radius` CSS property on your component using the "radius"
   * token in your theme
   */
  readonly radius?: ResponsiveProp<
    keyof DashTokens['radius'] | (keyof DashTokens['radius'])[]
  >
}
