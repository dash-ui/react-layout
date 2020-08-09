import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import type {DashTokens} from '@dash-ui/styles'
import {Box} from './box'
import type {BoxProps} from './box'
import {useResponsiveStyles} from './layout'
import type {ResponsiveProp, ResponsiveLazyProp} from './layout'
import {flexDirection, justifyContent, alignItems} from './styles'
import {forwardRefAs} from './utils'

/**
 * A layout component that distributes its items in a row without wrapping
 * like so:
 *
 * ```
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 * ```
 *
 * @example
 * <Row gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Row>
 */
export const Row = forwardRefAs<RowProps, 'div'>(function Row(
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
  flexDirection[reverse ? 'reversedRow' : 'row']

const gapStyle = (
  reverse: RowProps['reverse']
  // @ts-expect-error
): ResponsiveLazyProp<Extract<keyof DashTokens['gap'], number | string>> => (
  gapProp,
  queryName
) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'right' : 'left'
  // @ts-expect-error
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
  readonly align?: ResponsiveProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: ResponsiveProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  /**
   * Sets a horizontal gap between the child elements in the row using the "gap"
   * token in your theme
   */
  readonly gap?: ResponsiveProp<
    // @ts-expect-error
    Extract<keyof DashTokens['gap'], number | string>
  >
  /**
   * Reverses the direction of the row to left-to-right
   * @default false
   */
  readonly reverse?: ResponsiveProp<boolean>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Row.displayName = 'Row'
}
