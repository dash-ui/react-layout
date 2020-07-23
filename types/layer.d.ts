import type {BoxProps} from './box'
import type {MqProp} from './layout'
/**
 * A component that makes its items layer on top of each other:
 *   ___
 *  | ☐ |
 *   ‾‾‾
 */
export declare const Layer: import('./utils').ForwardRefAsExoticComponent<
  LayerProps,
  'div'
>
export declare const LayerItem: import('./utils').ForwardRefAsExoticComponent<
  LayerItemProps,
  'div'
>
export interface LayerProps extends BoxProps {}
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
export interface LayerItemProps extends BoxProps {
  position?: undefined
  offset?: MqProp<number | string>
  placement: MqProp<Placements>
  z?: MqProp<number>
}
export {}
