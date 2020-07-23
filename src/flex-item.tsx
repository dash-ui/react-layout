import * as React from 'react'
import clsx from 'clsx'
import css from 'minify-css.macro'
import {Box} from './box'
import type {BoxProps} from './box'
import {useLayout} from './layout'
import type {MqProp} from './layout'
import {alignSelf} from './styles'
import {unit, forwardRefAs} from './utils'

export const FlexItem = forwardRefAs<FlexItemProps, 'div'>(function FlexItem(
  {className, maxWidth, maxHeight, basis, order, grow, shrink, align, ...props},
  ref
) {
  const {mq} = useLayout()

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        mq(maxWidthStyle, maxWidth),
        mq(maxHeightStyle, maxHeight),
        mq(basisStyle, basis),
        mq(orderStyle, order),
        mq(growStyle, grow),
        mq(shrinkStyle, shrink),
        mq(alignSelf, align)
      )}
      {...props}
    />
  )
})

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
  /**
   * Sets a `align-self` CSS property on your component
   */
  readonly align?: MqProp<'start' | 'end' | 'center' | 'baseline' | 'stretch'>
  /**
   * Sets a `flex-basis` CSS property on your component
   */
  readonly basis?: MqProp<number | string>
  /**
   * Sets a `flex-grow` CSS property on your component
   */
  readonly grow?: MqProp<boolean | number>
  /**
   * Sets a `max-width` CSS property on your component
   */
  readonly maxWidth?: MqProp<number | string>
  /**
   * Sets a `max-height` CSS property on your component
   */
  readonly maxHeight?: MqProp<number | string>
  /**
   * Sets a `order` CSS property on your component
   */
  readonly order?: MqProp<number>
  /**
   * Sets a `flex-shrink` CSS property on your component
   */
  readonly shrink?: MqProp<boolean | number>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  FlexItem.displayName = 'FlexItem'
}
