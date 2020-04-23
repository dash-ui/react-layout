import * as React from 'react'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'
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
export interface ClusterProps extends FrameProps {
  readonly display?: undefined
  readonly reverse?: MediaQueryProp<boolean>
  readonly gap?: MediaQueryProp<keyof DefaultVars['gap']>
}
