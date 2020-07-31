import type {DashTokens} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {ResponsiveProp} from './layout'
/**
 * A row directional layout component that distributes its items in a cluster
 * like so:
 *
 * ```
 * ☐☐☐☐☐
 * ☐☐☐☐☐☐
 * ☐☐☐☐☐
 * ☐☐☐
 * ```
 *
 * or
 * ```
 *  ☐☐☐☐☐
 * ☐☐☐☐☐☐
 *  ☐☐☐☐☐
 *    ☐☐☐
 * ```
 *
 * Some use cases include input chips and tags.
 *
 * @example
 * <Cluster gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Cluster>
 */
export declare const Cluster: import('./utils').ForwardRefAsExoticComponent<
  ClusterProps,
  'div'
>
export interface ClusterProps extends Omit<BoxProps, 'display'> {
  /**
   * Reverses the direction of your cluster so that it lays out right-to-left
   * @default false
   */
  readonly reverse?: ResponsiveProp<boolean>
  /**
   * Sets a vertical and horizontal gap between the child elements in the
   * cluster using the "gap" token in your theme
   */
  readonly gap?: ResponsiveProp<keyof DashTokens['gap']>
}
