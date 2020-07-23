import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {MqProp} from './layout'
/**
 * A row directional component that distributes its items in a cluster like so:
 *
 * ☐☐☐☐☐
 * ☐☐☐☐☐☐
 * ☐☐☐☐☐
 * ☐☐☐
 *
 * or
 *
 *  ☐☐☐☐☐
 * ☐☐☐☐☐☐
 *  ☐☐☐☐☐
 *    ☐☐☐
 *
 * Some use cases include input chips and tags.
 */
export declare const Cluster: import('./utils').ForwardRefAsExoticComponent<
  ClusterProps,
  'div'
>
export interface ClusterProps extends BoxProps {
  readonly display?: undefined
  readonly reverse?: MqProp<boolean>
  readonly gap?: MqProp<keyof DashVariables['gap']>
}
