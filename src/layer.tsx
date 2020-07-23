import * as React from 'react'
import clsx from 'clsx'
import css from 'minify-css.macro'
import {Box} from './box'
import type {BoxProps} from './box'
import {useLayout} from './layout'
import type {MqProp, MqPropCallback} from './layout'
import {unit, forwardRefAs} from './utils'

/**
 * A component that makes its items layer on top of each other:
 *   ___
 *  | ☐ |
 *   ‾‾‾
 */
export const Layer = forwardRefAs<LayerProps, 'div'>(function Layer(
  props,
  ref
) {
  return <Box ref={ref} position='relative' {...props} />
})

export const LayerItem = forwardRefAs<LayerItemProps, 'div'>(function LayerItem(
  {className, offset, placement, z, ...props},
  ref
) {
  const {mq} = useLayout()

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        mq(placementStyle(offset), placement),
        mq(zStyle, z)
      )}
      position='absolute'
      {...props}
    />
  )
})

const placementStyle = (
  offsetProp: LayerItemProps['offset'] | undefined
): MqPropCallback<Placements> => (value, queryName): string => {
  if (value === 'center') {
    return css`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
  }

  const offset = unit(
    !offsetProp
      ? 0
      : typeof offsetProp === 'object'
      ? offsetProp[queryName]
      : offsetProp
  )
  const lValue = value.toLowerCase()
  const yProp =
    lValue.indexOf('top') > -1
      ? 'top'
      : lValue.indexOf('bottom') > -1
      ? 'bottom'
      : void 0
  const xProp =
    lValue.indexOf('left') > -1
      ? 'left'
      : lValue.indexOf('right') > -1
      ? 'right'
      : void 0

  let styles = ''

  if (yProp && offset !== void 0)
    styles += css`
      ${yProp}: ${offset};
    `

  if (xProp && offset !== void 0)
    styles += css`
      ${xProp}: ${offset};
    `

  if (value === 'left' || value === 'right')
    styles += css`
      top: 50%;
      transform: translateY(-50%);
    `

  if (value === 'bottom' || value === 'top')
    styles += css`
      left: 50%;
      transform: translateX(-50%);
    `

  return styles
}

const zStyle = (value: number) => css`
  z-index: ${value};
`

export interface LayerProps extends BoxProps {}

type Placements =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'center'
  | 'topLeft'
  | 'topRight'
  | 'bottomRight'
  | 'bottomLeft'

export interface LayerItemProps extends BoxProps {
  position?: undefined
  offset?: MqProp<number | string>
  placement: MqProp<Placements>
  z?: MqProp<number>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Layer.displayName = 'Layer'
  LayerItem.displayName = 'LayerItem'
}
