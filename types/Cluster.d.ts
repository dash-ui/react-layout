import React from 'react'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'
/**
 * A row directional component that distributes its items in a cluster like so:
 *
 * ☐☐☐☐☐
 * ☐☐☐☐☐☐
 * ☐☐☐☐☐
 * ☐☐☐
 *
 * Some use cases include input chips and tags.
 */
export declare const Cluster: React.ForwardRefExoticComponent<
  ClusterProps & React.RefAttributes<any>
>
export interface ClusterProps extends FrameProps {
  readonly display?: never
  readonly reverse?: boolean
  readonly gap?: DefaultVars['gap']
}
