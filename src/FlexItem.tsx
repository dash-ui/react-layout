import * as React from 'react'
import clsx from 'clsx'
import css from 'minify-css.macro'
import {Box} from './Box'
import {useLayout} from './Layout'
import {alignSelf} from './styles'
import {unit} from './utils'
import type {BoxProps} from './Box'
import type {MqProp} from './Layout'

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

const maxWidthStyle = (maxWidth: number | string) =>
  css`
    max-width: ${unit(maxWidth)};
  `
const maxHeightStyle = (maxHeight: number | string) => css`
  max-height: ${unit(maxHeight)};
`
const basisStyle = (basis: number | string) => css`
  flex-basis: ${unit(basis)};
`
const orderStyle = (order: number) => css`
  order: ${order};
`
const growStyle = (grow: number | boolean) => css`
  flex-grow: ${grow === true ? 1 : grow === false ? 0 : grow};
`
const shrinkStyle = (shrink: number | boolean) => css`
  flex-shrink: ${shrink === true ? 1 : shrink === false ? 0 : shrink};
`

export interface FlexItemProps extends BoxProps {
  readonly align?: MqProp<'start' | 'end' | 'center' | 'baseline' | 'stretch'>
  readonly basis?: MqProp<number | string>
  readonly grow?: MqProp<boolean | number>
  readonly maxWidth?: MqProp<number | string>
  readonly maxHeight?: MqProp<number | string>
  readonly order?: MqProp<number>
  readonly shrink?: MqProp<boolean | number>
}
