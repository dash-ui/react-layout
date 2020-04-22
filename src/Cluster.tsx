import React from 'react'
import {useDash} from '@-ui/react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Frame} from './Frame'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'

/**
 * A row directional component that distributes its items in a cluster like so:
 *
 * ☐☐☐☐☐
 * ☐☐☐☐☐☐
 * ☐☐☐☐☐
 * ☐☐☐
 *
 * Some use cases include input chips and tags.
 */
export const Cluster = React.forwardRef<any, ClusterProps>(
  ({className, reverse = false, gap: gapProp, ...props}, ref) => {
    const styles = useDash()
    const marginDirection = reverse ? 'right' : 'left'

    return (
      <Frame
        className={clsx(
          className,
          styles.one(
            //@ts-ignore
            ({gap}) => css`
              display: flex;
              flex-direction: ${reverse ? 'row-reverse' : 'row'};
              flex-wrap: wrap;
              justify-content: flex-start;
              margin-${marginDirection}: calc(-1 * ${gap[gapProp]});
              
              & > * {
                margin-${marginDirection}: ${gap[gapProp]};
              }
            `
          )
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

export interface ClusterProps extends FrameProps {
  readonly display?: never
  readonly reverse?: boolean
  // @ts-ignore
  readonly gap?: DefaultVars['gap']
}

export const ClusterItem = React.forwardRef<any, ClusterItemProps>(
  ({className, basis, maxWidth, fill, shrink, ...props}, ref) => {
    const styles = useDash()

    return (
      <Frame
        className={clsx(
          className,
          maxWidth !== void 0 && styles.one({maxWidth}),
          basis !== void 0 && styles.one({flexBasis: basis}),
          fill !== void 0 &&
            styles.one(css`
              flex-grow: ${fill === true ? 1 : fill === false ? 0 : fill};
            `),
          shrink !== void 0 &&
            styles.one(css`
              flex-shrink: ${shrink === true
                ? 1
                : shrink === false
                ? 0
                : shrink};
            `)
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

export interface ClusterItemProps extends FrameProps {
  readonly basis?: number | string
  readonly maxWidth?: number | string
  readonly fill?: boolean | number
  readonly shrink?: boolean | number
}
