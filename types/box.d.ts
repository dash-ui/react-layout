import type {DashTokens} from '@dash-ui/styles'
import type {ResponsiveProp} from './layout'
/**
 * A layout component for adding size, padding, position, color, and more
 * using tokens from your CSS variable theme.
 *
 * @example
 * <Box size={300} bg={{sm: 'red', md: 'blue'}}/>
 */
export declare const Box: import('forward-ref-as').ForwardRefExoticComponentWithAs<
  'div',
  BoxProps
>
export interface BoxProps {
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
    | Extract<keyof DashTokens['pad'], string | number>
    | Extract<keyof DashTokens['pad'], string | number>[]
  >
  /**
   * Sets a `background-color` CSS property on your component using the "color"
   * token in your theme
   */
  readonly bg?: ResponsiveProp<
    Extract<keyof DashTokens['color'], string | number>
  >
  /**
   * Sets a `box-shadow` CSS property on your component using the "elevation"
   * token in your theme
   */
  readonly elevation?: ResponsiveProp<
    Extract<keyof DashTokens['elevation'], string | number>
  >
  /**
   * Sets a `border-radius` CSS property on your component using the "radius"
   * token in your theme
   */
  readonly radius?: ResponsiveProp<
    | Extract<keyof DashTokens['radius'], string | number>
    | Extract<keyof DashTokens['radius'], string | number>[]
  >
}
