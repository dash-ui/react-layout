import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {useLayout} from './Layout'
import type {DefaultVars} from '@-ui/react'
import type {MediaQueryProp} from './Layout'

export const Frame = React.forwardRef<any, FrameProps>(
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
    const {mq} = useLayout()

    return (
      <As
        ref={ref}
        className={clsx(
          className,
          mq.prop(frameStyle, display),
          mq.prop(frameStyle, position),
          mq.prop(widthStyle, width),
          mq.prop(heightStyle, height),
          mq.prop(sizeStyle, size),
          mq.prop(padStyle, pad),
          mq.prop(bgStyle, bg),
          mq.prop(elevationStyle, elevation),
          mq.prop(radiusStyle, radius)
        )}
        {...props}
      />
    )
  }
)

const frameStyle = {
  flex: css`
    display: flex;
  `,
  inlineFlex: css`
    display: inline-flex;
  `,
  block: css`
    display: block;
  `,
  inlineBlock: css`
    display: inline-block;
  `,
  inline: css`
    display: inline;
  `,
  none: css`
    display: none;
  `,
  relative: css`
    position: relative;
  `,
  absolute: css`
    position: absolute;
  `,
  sticky: css`
    position: sticky;
  `,
  fixed: css`
    position: fixed;
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
) => ({pad}) => {
  if (Array.isArray(padProp)) {
    return {padding: padProp.map((k) => pad[k]).join(' ')}
  }

  return css`
    padding: ${pad[padProp]};
  `
}

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
const radiusStyle = (radiusProp: keyof DefaultVars['radius']) => ({radius}) => {
  if (Array.isArray(radiusProp)) {
    return {borderRadius: radiusProp.map((k) => radius[k]).join(' ')}
  }

  return css`
    border-radius: ${radius[radiusProp]};
  `
}

export interface FrameProps {
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
