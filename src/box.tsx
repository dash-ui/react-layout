import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DashTokens} from '@dash-ui/styles'
import {useResponsiveStyles} from './layout'
import type {ResponsiveProp, ResponsiveLazyProp} from './layout'
import {unit, forwardRefAs} from './utils'
import type {AsProp} from './types'

/**
 * A layout component for adding size, padding, position, color, and more
 * using tokens from your CSS variable theme.
 *
 * @example
 * <Box size={300} bg={{sm: 'red', md: 'blue'}}/>
 */
export const Box = forwardRefAs<BoxProps, 'button'>(function Box(
  {
    as: As = 'div',
    className,
    display,
    position,
    width,
    height,
    size,
    pad,
    bg,
    elevation,
    radius,
    ...props
  },
  ref
) {
  const styles = useResponsiveStyles()

  return (
    <As
      ref={ref}
      className={clsx(
        className,
        styles.join(
          styles(frameStyle).css(display),
          styles(frameStyle).css(position),
          !pad ? '' : styles.lazy(padStyle).css(pad),
          !bg ? '' : styles.lazy(bgStyle).css(bg),
          !elevation ? '' : styles.lazy(elevationStyle).css(elevation),
          !radius ? '' : styles.lazy(radiusStyle).css(radius)
        ),
        // These dynamic styles aren't joined because they're the
        // most likely to be unique. Leaving these types of styles
        // as atomic improves their performance.
        width !== void 0 && styles.lazy(widthStyle)(width),
        height !== void 0 && styles.lazy(heightStyle)(height),
        size !== void 0 && styles.lazy(sizeStyle)(size)
      )}
      {...props}
    />
  )
})

const d = 'display'
const p = 'position'
const frameStyle = {
  flex: css`
    ${d}: flex;
  `,
  inlineFlex: css`
    ${d}: inline-flex;
  `,
  block: css`
    ${d}: block;
  `,
  inlineBlock: css`
    ${d}: inline-block;
  `,
  inline: css`
    ${d}: inline;
  `,
  none: css`
    ${d}: none;
  `,
  relative: css`
    ${p}: relative;
  `,
  absolute: css`
    ${p}: absolute;
  `,
  sticky: css`
    ${p}: sticky;
  `,
  fixed: css`
    ${p}: fixed;
  `,
}

const widthStyle = (width: number | string) => css`
  width: ${unit(width)};
`
const heightStyle = (height: number | string) => css`
  height: ${unit(height)};
`

const sizeStyle = (size: number | string) => {
  size = unit(size)
  return css`
    width: ${size};
    height: ${size};
  `
}

const padStyle: ResponsiveLazyProp<
  // @ts-expect-error
  | Extract<keyof DashTokens['pad'], string | number>
  // @ts-expect-error
  | Extract<keyof DashTokens['pad'], string | number>[]
  // @ts-expect-error
> = (padProp) => ({pad}) =>
  css`
    padding: ${Array.isArray(padProp)
      ? padProp.map((k) => pad[k]).join(' ')
      : pad[padProp]};
  `

const bgStyle: ResponsiveLazyProp<Extract<
  // @ts-expect-error
  keyof DashTokens['color'],
  string | number
>> = (bg) => ({
  // @ts-expect-error
  color,
}) => css`
  background-color: ${color[bg]};
`

const elevationStyle: ResponsiveLazyProp<Extract<
  // @ts-expect-error
  keyof DashTokens['elevation'],
  string | number
>> = (
  elevationProp
  // @ts-expect-error
) => ({elevation}) => css`
  box-shadow: ${elevation[elevationProp]};
`
const radiusStyle: ResponsiveLazyProp<
  // @ts-expect-error
  | Extract<keyof DashTokens['radius'], string | number>
  // @ts-expect-error
  | Extract<keyof DashTokens['radius'], string | number>[]
  // @ts-expect-error
> = (radiusProp) => ({radius}) =>
  css`
    border-radius: ${Array.isArray(radiusProp)
      ? radiusProp.map((k) => radius[k]).join(' ')
      : radius[radiusProp]};
  `

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
    // @ts-expect-error
    | Extract<keyof DashTokens['pad'], string | number>
    // @ts-expect-error
    | Extract<keyof DashTokens['pad'], string | number>[]
  >
  /**
   * Sets a `background-color` CSS property on your component using the "color"
   * token in your theme
   */
  readonly bg?: ResponsiveProp<
    // @ts-expect-error
    Extract<keyof DashTokens['color'], string | number>
  >
  /**
   * Sets a `box-shadow` CSS property on your component using the "elevation"
   * token in your theme
   */
  readonly elevation?: ResponsiveProp<
    // @ts-expect-error
    Extract<keyof DashTokens['elevation'], string | number>
  >
  /**
   * Sets a `border-radius` CSS property on your component using the "radius"
   * token in your theme
   */
  readonly radius?: ResponsiveProp<
    // @ts-expect-error
    | Extract<keyof DashTokens['radius'], string | number>
    // @ts-expect-error
    | Extract<keyof DashTokens['radius'], string | number>[]
  >
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Box.displayName = 'Box'
}
