import * as React from 'react'
import clsx from 'clsx'
import forwardRefAs from 'forward-ref-as'
import css from 'minify-css.macro'
import {Box} from './box'
import type {BoxProps} from './box'
import {useResponsiveStyles} from './layout'
import type {ResponsiveProp, ResponsiveLazyProp} from './layout'
import {unit} from './utils'

/**
 * A layout component that is a container for `<LayerItem>`s:
 *
 * ```
 *   ___
 *  | ☐ |
 *   ‾‾‾
 * ```
 *
 * @example
 * <Layer>
 *   <LayerItem placement='bottomRight' z={1000}/>
 * </Layer>
 */
export const Layer = forwardRefAs<'div', LayerProps>(function Layer(
  props,
  ref
) {
  return <Box ref={ref} position='relative' {...props} />
})

/**
 * A layout component than positions itself absolutely inside of its
 * container in whichever placement you decide.
 *
 * @example
 * <LayerItem placement='bottomRight' offset={24}/>
 */
export const LayerItem = forwardRefAs<'div', LayerItemProps>(function LayerItem(
  {className, offset, placement, z, ...props},
  ref
) {
  const styles = useResponsiveStyles()

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        styles.join(
          styles.lazy(placementStyle(offset)).css(placement),
          z === void 0 ? '' : styles.lazy(zStyle).css(z)
        )
      )}
      position='absolute'
      {...props}
    />
  )
})

const placementStyle = (
  offsetProp: LayerItemProps['offset'] | undefined
): ResponsiveLazyProp<Placements> => (value, queryName): string => {
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

export interface LayerItemProps extends Omit<BoxProps, 'position'> {
  /**
   * Sets a `margin` between the edges of the layer item's container
   */
  offset?: ResponsiveProp<number | string>
  /**
   * Sets the placement of your layer item relative to its container
   */
  placement: ResponsiveProp<Placements>
  /**
   * Sets a `z-index` CSS property on your component
   */
  z?: ResponsiveProp<number>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Layer.displayName = 'Layer'
  LayerItem.displayName = 'LayerItem'
}
