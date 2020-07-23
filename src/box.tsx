import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DashVariables} from '@dash-ui/styles'
import {useLayout} from './layout'
import type {MqProp, MqPropCallback} from './layout'
import {unit, forwardRefAs} from './utils'
import type {AsProp} from './types'

export const Box = forwardRefAs<BoxProps, 'div'>(function Box(
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
  const {mq} = useLayout()

  return (
    <As
      ref={ref}
      className={clsx(
        className,
        mq(frameStyle, display),
        mq(frameStyle, position),
        mq(widthStyle, width),
        mq(heightStyle, height),
        mq(sizeStyle, size),
        mq(padStyle, pad),
        mq(bgStyle, bg),
        mq(elevationStyle, elevation),
        mq(radiusStyle, radius)
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

const padStyle: MqPropCallback<
  // @ts-expect-error
  keyof DashVariables['pad'] | (keyof DashVariables['pad'])[]
  // @ts-expect-error
> = (padProp) => ({pad}) =>
  css`
    padding: ${Array.isArray(padProp)
      ? padProp.map((k) => pad[k]).join(' ')
      : pad[padProp]};
  `

// @ts-expect-error
const bgStyle: MqPropCallback<keyof DashVariables['color']> = (bg) => ({
  // @ts-expect-error
  color,
}) => css`
  background: ${color[bg]};
`
// @ts-expect-error
const elevationStyle: MqPropCallback<keyof DashVariables['elevation']> = (
  elevationProp
  // @ts-expect-error
) => ({elevation}) => css`
  box-shadow: ${elevation[elevationProp]};
`
const radiusStyle: MqPropCallback<
  // @ts-expect-error
  keyof DashVariables['radius'] | (keyof DashVariables['radius'])[]
  // @ts-expect-error
> = (radiusProp) => ({radius}) =>
  css`
    border-radius: ${Array.isArray(radiusProp)
      ? radiusProp.map((k) => radius[k]).join(' ')
      : radius[radiusProp]};
  `

export interface BoxProps {
  readonly as?: AsProp
  readonly className?: string | string[]
  readonly display?: MqProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline' | 'none'
  >
  readonly position?: MqProp<'relative' | 'absolute' | 'sticky' | 'fixed'>
  readonly width?: MqProp<number | string>
  readonly height?: MqProp<number | string>
  readonly size?: MqProp<number | string>
  readonly pad?: MqProp<
    // @ts-expect-error
    keyof DashVariables['pad'] | (keyof DashVariables['pad'])[]
  >
  // @ts-expect-error
  readonly bg?: MqProp<keyof DashVariables['color']>
  // @ts-expect-error
  readonly elevation?: MqProp<keyof DashVariables['elevation']>
  readonly radius?: MqProp<
    // @ts-expect-error
    keyof DashVariables['radius'] | (keyof DashVariables['radius'])[]
  >
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Box.displayName = 'Box'
}
