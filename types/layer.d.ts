import type { BoxProps } from "./box";
import type { ResponsiveProp } from "./layout";
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
export declare const Layer: import("forward-ref-as").ForwardRefExoticComponentWithAs<
  "div",
  LayerProps
>;
/**
 * A layout component than positions itself absolutely inside of its
 * container in whichever placement you decide.
 *
 * @example
 * <LayerItem placement='bottomRight' offset={24}/>
 */
export declare const LayerItem: import("forward-ref-as").ForwardRefExoticComponentWithAs<
  "div",
  LayerItemProps
>;
export interface LayerProps extends BoxProps {}
declare type Placements =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "center"
  | "topLeft"
  | "topRight"
  | "bottomRight"
  | "bottomLeft";
export interface LayerItemProps extends Omit<BoxProps, "position"> {
  /**
   * Sets a `margin` between the edges of the layer item's container
   */
  offset?: ResponsiveProp<number | string>;
  /**
   * Sets the placement of your layer item relative to its container
   */
  placement: ResponsiveProp<Placements>;
}
export {};
