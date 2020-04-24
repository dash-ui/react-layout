import * as React from 'react'
import type {FrameProps} from './Frame'
import type {MediaQueryProp} from './Layout'
/**
 * A component that makes its items layer on top of each other:
 *   ___
 *  | ☐ |
 *   ‾‾‾
 */
export declare const Layer: React.ForwardRefExoticComponent<
  LayerProps & React.RefAttributes<any>
>
export declare const LayerItem: React.ForwardRefExoticComponent<
  LayerItemProps & React.RefAttributes<any>
>
export interface LayerProps extends FrameProps {}
declare type Placements =
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
  position?: undefined
  offset?: MediaQueryProp<number | string>
  placement: MediaQueryProp<Placements>
  z?: MediaQueryProp<number>
}
export {}
