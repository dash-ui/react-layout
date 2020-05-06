import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {useLayout} from './Layout'
import {unit} from './utils'
import type {DashVariables} from '@dash-ui/styles'
import type {MqProp, MqPropCallback} from './Layout'
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
  // @ts-ignore
  keyof DashVariables['pad'] | (keyof DashVariables['pad'])[]
  // @ts-ignore
> = (padProp) => ({pad}) =>
  css`
    padding: ${Array.isArray(padProp)
      ? padProp.map((k) => pad[k]).join(' ')
      : pad[padProp]};
  `

// @ts-ignore
const bgStyle: MqPropCallback<keyof DashVariables['color']> = (bg) => ({
  // @ts-ignore
  color,
}) => css`
  background: ${color[bg]};
`
// @ts-ignore
const elevationStyle: MqPropCallback<keyof DashVariables['elevation']> = (
  elevationProp
  // @ts-ignore
) => ({elevation}) => css`
  box-shadow: ${elevation[elevationProp]};
`
const radiusStyle: MqPropCallback<
  // @ts-ignore
  keyof DashVariables['radius'] | (keyof DashVariables['radius'])[]
  // @ts-ignore
> = (radiusProp) => ({radius}) =>
  css`
    border-radius: ${Array.isArray(radiusProp)
      ? radiusProp.map((k) => radius[k]).join(' ')
      : radius[radiusProp]};
  `

export interface BoxProps extends LayoutAttributes {
  readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  readonly className?: string | string[]
  readonly display?: MqProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'
  >
  readonly position?: MqProp<'relative' | 'absolute' | 'sticky' | 'fixed'>
  readonly width?: MqProp<number | string>
  readonly height?: MqProp<number | string>
  readonly size?: MqProp<number | string>
  readonly pad?: MqProp<
    // @ts-ignore
    keyof DashVariables['pad'] | (keyof DashVariables['pad'])[]
  >
  // @ts-ignore
  readonly bg?: MqProp<keyof DashVariables['color']>
  // @ts-ignore
  readonly elevation?: MqProp<keyof DashVariables['elevation']>
  readonly radius?: MqProp<
    // @ts-ignore
    keyof DashVariables['radius'] | (keyof DashVariables['radius'])[]
  >
}
