import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Frame} from './Frame'
import {useLayout} from './Layout'
import {justify, flex} from './styles'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'
import type {MediaQueryProp, MediaQueries} from './Layout'

/**
 * A row directional component that distributes its items in a cluster like so:
 *
 * ☐☐☐☐☐
 * ☐☐☐☐☐☐
 * ☐☐☐☐☐
 * ☐☐☐
 *
 * or
 *
 *  ☐☐☐☐☐
 * ☐☐☐☐☐☐
 *  ☐☐☐☐☐
 *    ☐☐☐
 *
 * Some use cases include input chips and tags.
 */
export const Cluster = React.forwardRef<any, ClusterProps>(
  ({className, gap, reverse = false, ...props}, ref) => {
    const {
      styles,
      mq: {prop},
    } = useLayout()

    return (
      <Frame
        ref={ref}
        className={clsx(
          className,
          styles.one(css`
            display: flex;
            flex-wrap: wrap;
          `)(),
          prop(reverseStyle, reverse),
          prop(gapStyle(reverse), gap)
        )}
        {...props}
      />
    )
  }
)

const reverseStyle = (reverse: boolean) =>
  flex[reverse ? 'reversedRow' : 'row'] + justify[reverse ? 'end' : 'start']

const gapStyle = (reverse: ClusterProps['reverse']) => (
  // @ts-ignore
  gapProp: keyof DefaultVars['gap'],
  queryName: keyof MediaQueries
) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'right' : 'left'

  return ({gap}) => css`
    margin-top: calc(-1 * ${gap[gapProp]})!important;
    margin-${marginDirection}: calc(-1 * ${gap[gapProp]})!important;

    & > * {
      margin-top: ${gap[gapProp]}!important;
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `
}

export interface ClusterProps extends FrameProps {
  readonly display?: undefined
  readonly reverse?: MediaQueryProp<boolean>
  // @ts-ignore
  readonly gap?: MediaQueryProp<keyof DefaultVars['gap']>
}
