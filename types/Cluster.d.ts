import * as React from 'react'
import type {DashVariables} from '@dash-ui/react'
import type {BoxProps} from './Box'
import type {MediaQueryProp} from './Layout'
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
export declare const Cluster: React.ForwardRefExoticComponent<
  ClusterProps & React.RefAttributes<any>
>
export interface ClusterProps extends BoxProps {
  readonly display?: undefined
  readonly reverse?: MediaQueryProp<boolean>
  readonly gap?: MediaQueryProp<keyof DashVariables['gap']>
}
