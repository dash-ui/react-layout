import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Box} from './Box'
import {useLayout} from './Layout'
import {flexDirection, alignItems, justifyContent} from './styles'
import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './Box'
import type {MqProp, MqPropCallback} from './Layout'

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
    const prop = useLayout().mq.prop

    return (
      <Box
        ref={ref}
        display="flex"
        className={clsx(
          className,
          prop(alignItems, align),
          prop(justifyContent, distribute),
          prop(gapStyle(reverse), gap),
          prop(reverseStyle, reverse)
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
  // @ts-ignore
): MqPropCallback<keyof DashVariables['gap']> => (gapProp, queryName) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'bottom' : 'top'
  // @ts-ignore
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
  // @ts-ignore
  readonly gap?: MqProp<keyof DashVariables['gap']>
  readonly reverse?: MqProp<boolean>
}
