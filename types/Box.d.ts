import * as React from 'react'
import type {DashVariables} from '@dash-ui/react'
import type {MediaQueryProp} from './Layout'
import type {LayoutAttributes} from './types'
export declare const Box: React.ForwardRefExoticComponent<
  BoxProps & React.RefAttributes<any>
>
export interface BoxProps extends LayoutAttributes {
  readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  readonly className?: string | string[]
  readonly display?: MediaQueryProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'
  >
  readonly position?: MediaQueryProp<
    'relative' | 'absolute' | 'sticky' | 'fixed'
  >
  readonly width?: MediaQueryProp<number | string>
  readonly height?: MediaQueryProp<number | string>
  readonly size?: MediaQueryProp<number | string>
  readonly pad?: MediaQueryProp<
    keyof DashVariables['pad'] | (keyof DashVariables['pad'])[]
  >
  readonly bg?: MediaQueryProp<keyof DashVariables['color']>
  readonly elevation?: MediaQueryProp<keyof DashVariables['elevation']>
  readonly radius?: MediaQueryProp<
    keyof DashVariables['radius'] | (keyof DashVariables['radius'])[]
  >
}
