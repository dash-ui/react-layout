import * as React from 'react'
import clsx from 'clsx'
import css from 'minify-css.macro'
import {Frame} from './Frame'
import {useLayout} from './Layout'
import type {FrameProps} from './Frame'
import type {MediaQueryProp, MediaQueries} from './Layout'

/**
 * A component that makes its items layer on top of each other:
 *   ___
 *  | ☐ |
 *   ‾‾‾
 */
export const Layer = React.forwardRef<any, LayerProps>((props, ref) => (
  <Frame ref={ref} position="relative" {...props} />
))

export const LayerItem = React.forwardRef<any, LayerItemProps>(
  ({className, placement, offset, z, ...props}, ref) => {
    const prop = useLayout().mq.prop

    return (
      <Frame
        ref={ref}
        position="absolute"
        className={clsx(
          className,
          prop(placementStyle(offset, props), placement),
          prop(zStyle, z)
        )}
        {...props}
      />
    )
  }
)

const placementStyle = (
  offsetProp: LayerItemProps['offset'] | undefined,
  sizing: {
    width?: FrameProps['width']
    height?: FrameProps['height']
    size?: FrameProps['size']
  }
) => (value: Placements, queryName: keyof MediaQueries) => {
  if (value === 'center') {
    if ((sizing.width && sizing.height) || sizing.size) {
      return css`
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        margin: auto;
      `
    } else if (sizing.width) {
      return css`
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
      `
    } else if (sizing.height) {
      return css`
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        bottom: 0;
        margin-top: auto;
        margin-bottom: auto;
      `
    }

    return css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `
  }

  const offset = !offsetProp
    ? 0
    : typeof offsetProp === 'object'
    ? offsetProp[queryName]
    : offsetProp
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

  const styles: Record<string, string | number> = {
    position: 'absolute',
  }

  if (yProp) styles[yProp] = offset
  if (xProp) styles[xProp] = offset
  if (value === 'left' || value === 'right') {
    styles.top = '50%'
    styles.transform = 'translateY(-50%)'
  }
  if (value === 'bottom' || value === 'top') {
    styles.left = '50%'
    styles.transform = 'translateX(-50%)'
  }

  return styles
}

const zStyle = (value: number) => ({zIndex: value})

export interface LayerProps extends FrameProps {}

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

export interface LayerItemProps extends FrameProps {
  placement: MediaQueryProp<Placements>
  offset?: number | string
  z?: number
}
