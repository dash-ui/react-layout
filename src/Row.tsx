import * as React from 'react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Box} from './Box'
import {useLayout} from './Layout'
import {flexDirection, justifyContent, alignItems} from './styles'
import type {DefaultVars} from '@-ui/react'
import type {BoxProps} from './Box'
import type {MediaQueryProp, MediaQueries} from './Layout'

/**
 * A component that distributes its items in a row without wrapping like so:
 *
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 *
 */
export const Row = React.forwardRef<any, RowProps>(
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
          prop(reverseStyle, reverse),
          prop(gapStyle(reverse), gap)
        )}
        {...props}
      />
    )
  }
)

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? 'reversedRow' : 'row']

// @ts-ignore
const gapStyle = (reverse: RowProps['reverse']) => (
  // @ts-ignore
  gapProp: keyof DefaultVars['gap'],
  queryName: keyof MediaQueries
) => {
  const reversed =
    !reverse || typeof reverse === 'boolean' ? reverse : reverse[queryName]
  const marginDirection = reversed ? 'right' : 'left'

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
  readonly align?: MediaQueryProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: MediaQueryProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  // @ts-ignore
  readonly gap?: MediaQueryProp<keyof DefaultVars['gap']>
  readonly reverse?: MediaQueryProp<boolean>
}
