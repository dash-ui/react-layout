import * as React from 'react'
import type {FrameProps} from './Frame'
/**
 * A component that makes its items layer on top of each other:
 *   ___
 *  | ☐ |
 *   ‾‾‾
 */
export declare const Layer: React.ForwardRefExoticComponent<
  LayerProps & React.RefAttributes<any>
>
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
