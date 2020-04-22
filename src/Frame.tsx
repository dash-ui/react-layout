import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {useLayout} from './Layout'
import type {DefaultVars, StyleObject} from '@-ui/react'
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
      hidden,
      ...props
    },
    ref
  ) => {
    const {mq} = useLayout()

    return (
      <As
        className={clsx(
          className,
          mq.prop(frameStyle, display),
          mq.prop(frameStyle, position),
          mq.prop(frameStyle, hidden && 'hidden'),
          // Size
          (size !== void 0 || width !== void 0 || height !== void 0) &&
            mq.prop(sizeStyle, [size, width, height]),
          // Padding
          mq.prop(padStyle, pad),
          // Background
          mq.prop(bgStyle, bg),
          // Elevation
          mq.prop(elevationStyle, elevation)
        )}
        aria-hidden={hidden}
        {...props}
        ref={ref}
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
  hidden: css`
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

const sizeStyle = ([size, width, height]: (number | string | undefined)[]):
  | string
  | StyleObject =>
  size !== void 0
    ? {
        width: size,
        height: size,
      }
    : width !== void 0 && height !== void 0
    ? {width, height}
    : width !== void 0
    ? {width}
    : height !== void 0
    ? {height}
    : ''

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
  readonly hidden?: MediaQueryProp<boolean>
}
