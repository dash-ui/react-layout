import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DashVariables} from '@dash-ui/styles'
import {Box} from './box'
import type {BoxProps} from './box'
import {useLayout} from './layout'
import type {MqProp, MqPropCallback} from './layout'
import {justifyContent, flexDirection} from './styles'
import {forwardRefAs} from './utils'

/**
 * A row directional layout component that distributes its items in a cluster
 * like so:
 *
 * ```
 * ☐☐☐☐☐
 * ☐☐☐☐☐☐
 * ☐☐☐☐☐
 * ☐☐☐
 * ```
 *
 * or
 * ```
 *  ☐☐☐☐☐
 * ☐☐☐☐☐☐
 *  ☐☐☐☐☐
 *    ☐☐☐
 * ```
 *
 * Some use cases include input chips and tags.
 *
 * @example
 * <Cluster gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Cluster>
 */
export const Cluster = forwardRefAs<ClusterProps, 'div'>(function Cluster(
  {className, gap, reverse = false, ...props},
  ref
) {
  const {mq, cls} = useLayout()

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        cls(css`
          display: flex;
          flex-wrap: wrap;
          & > * {
            flex-shrink: 0;
          }
        `),
        mq(gapStyle(reverse), gap),
        mq(reverseStyle, reverse)
      )}
      {...props}
    />
  )
})

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? 'reversedRow' : 'row'] + justifyContent.start

const gapStyle = (
  reverse: ClusterProps['reverse']
  // @ts-expect-error
): MqPropCallback<keyof DashVariables['gap']> => (gapProp, queryName) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'right' : 'left'
  // @ts-expect-error
  return ({gap}) => css`
    margin-top: calc(-1 * ${gap[gapProp]})!important;
    margin-${marginDirection}: calc(-1 * ${gap[gapProp]})!important;

    & > * {
      margin-top: ${gap[gapProp]}!important;
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `
}

export interface ClusterProps extends Omit<BoxProps, 'display'> {
  /**
   * Reverses the direction of your cluster so that it lays out right-to-left
   * @default false
   */
  readonly reverse?: MqProp<boolean>
  /**
   * Sets a vertical and horizontal gap between the child elements in the
   * cluster using the "gap" token in your theme
   */
  // @ts-expect-error
  readonly gap?: MqProp<keyof DashVariables['gap']>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Cluster.displayName = 'Cluster'
}
