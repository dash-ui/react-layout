import * as React from 'react'
import clsx from 'clsx'
import {Frame} from './Frame'
import {useLayout} from './Layout'
import {alignSelf} from './styles'
import type {FrameProps} from './Frame'
import type {MediaQueryProp} from './Layout'

export const FlexItem = React.forwardRef<any, FlexItemProps>(
  (
    {
      className,
      align,
      order,
      basis,
      maxWidth,
      maxHeight,
      grow,
      shrink,
      ...props
    },
    ref
  ) => {
    const prop = useLayout().mq.prop

    return (
      <Frame
        className={clsx(
          className,
          prop(maxWidthStyle, maxWidth),
          prop(maxHeightStyle, maxHeight),
          prop(basisStyle, basis),
          prop(alignSelf, align),
          prop(orderStyle, order),
          prop(growStyle, grow),
          prop(shrinkStyle, shrink)
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

const maxWidthStyle = (maxWidth: number | string) => ({maxWidth})
const maxHeightStyle = (maxHeight: number | string) => ({maxHeight})
const basisStyle = (basis: number | string) => ({basis})
const orderStyle = (order: number) => ({order})
const growStyle = (grow: number) => ({grow})
const shrinkStyle = (shrink: number) => ({shrink})

export interface FlexItemProps extends FrameProps {
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
