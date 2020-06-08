import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DashVariables} from '@dash-ui/styles'
import {Box} from './Box'
import {useLayout} from './Layout'
import {flexDirection, justifyContent, alignItems} from './styles'
import type {BoxProps} from './Box'
import type {MqProp, MqPropCallback} from './Layout'

/**
 * A component that distributes its items in a row without wrapping like so:
 *
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 *
 */
export const Row = React.forwardRef<any, RowProps>(
  ({className, align, distribute, gap, reverse = false, ...props}, ref) => {
    const {mq, one} = useLayout()

    return (
      <Box
        ref={ref}
        display='flex'
        className={clsx(
          className,
          one(css`
            & > * {
              flex-shrink: 0;
            }
          `)(),
          mq(alignItems, align),
          mq(justifyContent, distribute),
          mq(gapStyle(reverse), gap),
          mq(reverseStyle, reverse)
        )}
        {...props}
      />
    )
  }
)

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? 'reversedRow' : 'row']

const gapStyle = (
  reverse: RowProps['reverse']
  // @ts-ignore
): MqPropCallback<keyof DashVariables['gap']> => (gapProp, queryName) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'right' : 'left'
  // @ts-ignore
  return ({gap}) => css`
    & > * + * {
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `
}

export interface RowProps extends BoxProps {
  readonly display?: undefined
  /**
   * Positional alignment for its child items on the y-axis using `align-items`
   */
  readonly align?: MqProp<'start' | 'center' | 'end' | 'baseline' | 'stretch'>
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: MqProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  // @ts-ignore
  readonly gap?: MqProp<keyof DashVariables['gap']>
  readonly reverse?: MqProp<boolean>
}
