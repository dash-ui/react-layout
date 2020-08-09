import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DashTokens} from '@dash-ui/styles'
import {Box} from './box'
import type {BoxProps} from './box'
import {useResponsiveStyles} from './layout'
import type {ResponsiveProp, ResponsiveLazyProp} from './layout'
import {flexDirection, alignItems, justifyContent} from './styles'
import {forwardRefAs} from './utils'

/**
 * A layout component that distributes its items in a column without wrapping
 * like so:
 *
 * ```
 * ☐
 * ☐
 * ☐
 * ☐
 * ```
 *
 * @example
 * <Column gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Column>
 */
export const Column = forwardRefAs<ColumnProps, 'div'>(function Column(
  {className, align, distribute, gap, reverse = false, ...props},
  ref
) {
  const styles = useResponsiveStyles()

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        styles.join(
          css`
            & > * {
              flex-shrink: 0;
            }
          `,
          styles(alignItems).css(align),
          styles(justifyContent).css(distribute),
          gap === void 0 ? '' : styles.lazy(gapStyle(reverse)).css(gap),
          reverse === void 0 ? '' : styles.lazy(reverseStyle).css(reverse)
        )
      )}
      display='flex'
      {...props}
    />
  )
})

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? 'reversedColumn' : 'column'] +
  (reverse ? justifyContent.end : '')

const gapStyle = (
  reverse: ColumnProps['reverse']
  // @ts-expect-error
): ResponsiveLazyProp<Extract<keyof DashTokens['gap'], number | string>> => (
  gapProp,
  queryName
) => {
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
  readonly align?: ResponsiveProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the y-axis using `justify-content`
   */
  readonly distribute?: ResponsiveProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  /**
   * Sets a vertical gap between the child elements in the column using the "gap"
   * token in your theme
   */
  readonly gap?: ResponsiveProp<
    // @ts-expect-error
    Extract<keyof DashTokens['gap'], number | string>
  >
  /**
   * Reverses the direction of the column to bottom-to-top
   * @default false
   */
  readonly reverse?: ResponsiveProp<boolean>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Column.displayName = 'Column'
}
