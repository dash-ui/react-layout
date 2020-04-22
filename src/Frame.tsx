import React from 'react'
import {useDash} from '@-ui/react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DefaultVars} from '@-ui/react'

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
      pad: padProp,
      bg,
      elevation: elevationProp,
      hidden,
      ...props
    },
    ref
  ) => {
    const styles = useDash()
    const frame = styles(frameStyles)
    className = clsx(
      className,
      frame({
        [display || '']: true,
        [position || '']: true,
        hidden,
      }),
      // Size
      styles.one(
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
      )(),
      // Padding
      padProp !== void 0 &&
        padProp !== null &&
        styles.one(
          // @ts-ignore
          ({pad}) => {
            if (Array.isArray(padProp)) {
              return {padding: padProp.map((k) => pad[k]).join(' ')}
            }

            return css`
              padding: ${pad[padProp]};
            `
          }
        )(),
      // Background
      bg &&
        styles.one(
          // @ts-ignore
          ({color}) => css`
            background: ${color[bg]};
          `
        )(),
      // Elevation
      elevationProp &&
        styles.one(
          // @ts-ignore
          ({elevation}) => css`
            box-shadow: ${elevation[elevationProp]};
          `
        )()
    )

    return (
      <As className={className} aria-hidden={hidden} {...props} ref={ref} />
    )
  }
)

const frameStyles = {
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

export interface FrameProps {
  readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  readonly className?: string | string[]
  readonly display?: 'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'
  readonly position?: 'relative' | 'absolute' | 'sticky' | 'fixed'
  readonly width?: number | string
  readonly height?: number | string
  readonly size?: number | string
  // @ts-ignore
  readonly pad?: keyof DefaultVars['pad'] | (keyof DefaultVars['pad'])[]
  // @ts-ignore
  readonly bg?: keyof DefaultVars['color']
  // @ts-ignore
  readonly elevation?: keyof DefaultVars['elevation']
  readonly hidden?: boolean
}
