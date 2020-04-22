import React from 'react'
import {useDash} from '@-ui/react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Frame} from './Frame'
import {gapClass} from './styles'
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
              margin-${reverse ? 'right' : 'left'}: calc(-1 * ${gap[gapProp]});
            `
          ),
          gapClass(styles, 'row', gapProp)
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
