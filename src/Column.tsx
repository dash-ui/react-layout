import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Frame} from './Frame'
import {useLayout} from './Layout'
import {flexDirection, alignItems, justifyContent} from './styles'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'
import type {MediaQueryProp, MediaQueries} from './Layout'

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
      <Frame
        ref={ref}
        display="flex"
        className={clsx(
          className,
          prop(alignItems, align),
          prop(justifyContent, distribute),
          prop(reverseStyle, reverse),
          prop(gapStyle(reverse), gap)
        )}
        {...props}
      />
    )
  }
)

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? 'reversedColumn' : 'column'] +
  (reverse ? justifyContent.end : '')

// @ts-ignore
const gapStyle = (reverse: ColumnProps['reverse']) => (
  // @ts-ignore
  gapProp: keyof DefaultVars['gap'],
  queryName: keyof MediaQueries
) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'bottom' : 'top'

  return ({gap}) => css`
    & > * + * {
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `
}

export interface ColumnProps extends FrameProps {
  readonly display?: undefined
  /**
   * Positional alignment for its child items on the x-axis using `align-items`
   */
  readonly align?: MediaQueryProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the y-axis using `justify-content`
   */
  readonly distribute?: MediaQueryProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  // @ts-ignore
  readonly gap?: MediaQueryProp<keyof DefaultVars['gap']>
  readonly reverse?: MediaQueryProp<boolean>
}
