import * as React from 'react'
import clsx from 'clsx'
import {Box} from './Box'
import {useLayout} from './Layout'
import {alignSelf} from './styles'
import type {BoxProps} from './Box'
import type {MediaQueryProp} from './Layout'

export const FlexItem = React.forwardRef<any, FlexItemProps>(
  (
    {
      className,
      maxWidth,
      maxHeight,
      basis,
      order,
      grow,
      shrink,
      align,
      ...props
    },
    ref
  ) => {
    const prop = useLayout().mq.prop

    return (
      <Box
        ref={ref}
        className={clsx(
          className,
          prop(maxWidthStyle, maxWidth),
          prop(maxHeightStyle, maxHeight),
          prop(basisStyle, basis),
          prop(orderStyle, order),
          prop(growStyle, grow),
          prop(shrinkStyle, shrink),
          prop(alignSelf, align)
        )}
        {...props}
      />
    )
  }
)

const maxWidthStyle = (maxWidth: number | string) => ({maxWidth})
const maxHeightStyle = (maxHeight: number | string) => ({maxHeight})
const basisStyle = (basis: number | string) => ({basis})
const orderStyle = (order: number) => ({order})
const growStyle = (grow: number | boolean) => ({
  flexGrow: grow === true ? 1 : grow === false ? 0 : grow,
})
const shrinkStyle = (shrink: number | boolean) => ({
  flexShrink: shrink === true ? 1 : shrink === false ? 0 : shrink,
})

export interface FlexItemProps extends BoxProps {
  readonly align?: MediaQueryProp<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >
  readonly basis?: MediaQueryProp<number | string>
  readonly grow?: MediaQueryProp<boolean | number>
  readonly maxWidth?: MediaQueryProp<number | string>
  readonly maxHeight?: MediaQueryProp<number | string>
  readonly order?: MediaQueryProp<number>
  readonly shrink?: MediaQueryProp<boolean | number>
}
