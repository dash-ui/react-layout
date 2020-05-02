import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {useLayout} from './Layout'
import type {DefaultVars} from '@-ui/react'
import type {MediaQueryProp} from './Layout'
import type {LayoutAttributes} from './types'

export const Box = React.forwardRef<any, BoxProps>(
  (
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
  ) => {
    const prop = useLayout().mq.prop

    return (
      <As
        ref={ref}
        className={clsx(
          className,
          prop(frameStyle, display),
          prop(frameStyle, position),
          prop(widthStyle, width),
          prop(heightStyle, height),
          prop(sizeStyle, size),
          prop(padStyle, pad),
          prop(bgStyle, bg),
          prop(elevationStyle, elevation),
          prop(radiusStyle, radius)
        )}
        {...props}
      />
    )
  }
)

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
    display: block;
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

const widthStyle = (width: number | string) => ({width})
const heightStyle = (height: number | string) => ({height})
const sizeStyle = (size: number | string) => ({
  width: size,
  height: size,
})

const padStyle = (
  // @ts-ignore
  padProp: keyof DefaultVars['pad'] | (keyof DefaultVars['pad'])[]
) => ({pad}) =>
  Array.isArray(padProp)
    ? {padding: padProp.map((k) => pad[k]).join(' ')}
    : css`
        padding: ${pad[padProp]};
      `

// @ts-ignore
const bgStyle = (bg: keyof DefaultVars['color']) => ({color}) => css`
  background: ${color[bg]};
`

// @ts-ignore
const elevationStyle = (elevationProp: keyof DefaultVars['elevation']) => ({
  elevation,
}) => css`
  box-shadow: ${elevation[elevationProp]};
`
// @ts-ignore
const radiusStyle = (radiusProp: keyof DefaultVars['radius']) => ({radius}) =>
  Array.isArray(radiusProp)
    ? {borderRadius: radiusProp.map((k) => radius[k]).join(' ')}
    : css`
        border-radius: ${radius[radiusProp]};
      `

export interface BoxProps extends LayoutAttributes {
  readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  readonly className?: string | string[]
  readonly display?: MediaQueryProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'
  >
  readonly position?: MediaQueryProp<
    'relative' | 'absolute' | 'sticky' | 'fixed'
  >
  readonly width?: MediaQueryProp<number | string>
  readonly height?: MediaQueryProp<number | string>
  readonly size?: MediaQueryProp<number | string>
  readonly pad?: MediaQueryProp<
    // @ts-ignore
    keyof DefaultVars['pad'] | (keyof DefaultVars['pad'])[]
  >
  // @ts-ignore
  readonly bg?: MediaQueryProp<keyof DefaultVars['color']>
  // @ts-ignore
  readonly elevation?: MediaQueryProp<keyof DefaultVars['elevation']>
  readonly radius?: MediaQueryProp<
    // @ts-ignore
    keyof DefaultVars['radius'] | (keyof DefaultVars['radius'])[]
  >
}
