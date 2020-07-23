import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DashVariables} from '@dash-ui/styles'
import {Box} from './box'
import {useLayout} from './layout'
import {flexDirection, alignItems, justifyContent} from './styles'
import type {BoxProps} from './box'
import type {MqProp, MqPropCallback} from './layout'

/**
 * A component that distributes its items in a column without wrapping like so:
 *
 * ☐
 * ☐
 * ☐
 * ☐
 *
 */
export const Column = React.forwardRef<any, ColumnProps>(
  ({className, align, distribute, gap, reverse = false, ...props}, ref) => {
    const {mq, cls} = useLayout()

    return (
      <Box
        ref={ref}
        display='flex'
        className={clsx(
          className,
          cls(css`
            & > * {
              flex-shrink: 0;
            }
          `),
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
  flexDirection[reverse ? 'reversedColumn' : 'column'] +
  (reverse ? justifyContent.end : '')

const gapStyle = (
  reverse: ColumnProps['reverse']
  // @ts-expect-error
): MqPropCallback<keyof DashVariables['gap']> => (gapProp, queryName) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'bottom' : 'top'
  // @ts-expect-error
  return ({gap}) => css`
    & > * + * {
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `
}

export interface ColumnProps extends BoxProps {
  readonly display?: undefined
  /**
   * Positional alignment for its child items on the x-axis using `align-items`
   */
  readonly align?: MqProp<'start' | 'center' | 'end' | 'baseline' | 'stretch'>
  /**
   * Distributed alignment properties on the y-axis using `justify-content`
   */
  readonly distribute?: MqProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  // @ts-expect-error
  readonly gap?: MqProp<keyof DashVariables['gap']>
  readonly reverse?: MqProp<boolean>
}
