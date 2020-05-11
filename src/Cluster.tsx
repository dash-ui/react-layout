import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Box} from './Box'
import {useLayout} from './Layout'
import {justifyContent, flexDirection} from './styles'
import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './Box'
import type {MqProp, MqPropCallback} from './Layout'

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
      oneStyle,
      mq: {prop},
    } = useLayout()

    return (
      <Box
        ref={ref}
        className={clsx(
          className,
          oneStyle(css`
            display: flex;
            flex-wrap: wrap;
            & > * {
              flex-shrink: 0;
            }
          `)(),
          prop(gapStyle(reverse), gap),
          prop(reverseStyle, reverse)
        )}
        {...props}
      />
    )
  }
)

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? 'reversedRow' : 'row'] + justifyContent.start

const gapStyle = (
  reverse: ClusterProps['reverse']
  // @ts-ignore
): MqPropCallback<keyof DashVariables['gap']> => (gapProp, queryName) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'right' : 'left'
  // @ts-ignore
  return ({gap}) => css`
    margin-top: calc(-1 * ${gap[gapProp]})!important;
    margin-${marginDirection}: calc(-1 * ${gap[gapProp]})!important;

    & > * {
      margin-top: ${gap[gapProp]}!important;
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `
}

export interface ClusterProps extends BoxProps {
  readonly display?: undefined
  readonly reverse?: MqProp<boolean>
  // @ts-ignore
  readonly gap?: MqProp<keyof DashVariables['gap']>
}
