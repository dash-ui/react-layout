import * as React from 'react'
import {useDash} from '@-ui/react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {useMediaQueries} from './MediaQueries'
import type {DefaultVars} from '@-ui/react'
import type {MediaQueriesProp} from './MediaQueries'

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
    const {queries, mq} = useMediaQueries()
    const frame = styles({
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
    })

    return (
      <As
        className={clsx(
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
        )}
        aria-hidden={hidden}
        {...props}
        ref={ref}
      />
    )
  }
)

export interface FrameProps {
  readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  readonly className?: string | string[]
  readonly display?: MediaQueriesProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'
  >
  readonly position?: MediaQueriesProp<
    'relative' | 'absolute' | 'sticky' | 'fixed'
  >
  readonly width?: MediaQueriesProp<number | string>
  readonly height?: MediaQueriesProp<number | string>
  readonly size?: MediaQueriesProp<number | string>
  readonly pad?: MediaQueriesProp<
    // @ts-ignore
    keyof DefaultVars['pad'] | (keyof DefaultVars['pad'])[]
  >
  // @ts-ignore
  readonly bg?: MediaQueriesProp<keyof DefaultVars['color']>
  // @ts-ignore
  readonly elevation?: MediaQueriesProp<keyof DefaultVars['elevation']>
  readonly hidden?: MediaQueriesProp<boolean>
}
