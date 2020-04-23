import * as React from 'react'
import clsx from 'clsx'
import {Frame} from './Frame'
import type {FrameProps} from './Frame'

/**
 * A component that makes its items layer on top of each other:
 *   ___
 *  | ☐ |
 *   ‾‾‾
 */
export const Layer = React.forwardRef<any, LayerProps>(
  ({className, ...props}, ref) => (
    <Frame
      ref={ref}
      position="relative"
      className={clsx(className)}
      {...props}
    />
  )
)

export interface LayerProps extends FrameProps {}

export interface LayerItemProps extends FrameProps {
  anchor:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'center'
    | 'topLeft'
    | 'topRight'
    | 'bottomRight'
    | 'bottomLeft'
}
