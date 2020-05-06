import * as React from 'react'
import type {DashVariables} from '@dash-ui/styles'
import type {MqProp} from './Layout'
import type {LayoutAttributes} from './types'
export declare const Box: React.ForwardRefExoticComponent<
  BoxProps & React.RefAttributes<any>
>
export interface BoxProps extends LayoutAttributes {
  readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  readonly className?: string | string[]
  readonly display?: MqProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'
  >
  readonly position?: MqProp<'relative' | 'absolute' | 'sticky' | 'fixed'>
  readonly width?: MqProp<number | string>
  readonly height?: MqProp<number | string>
  readonly size?: MqProp<number | string>
  readonly pad?: MqProp<
    keyof DashVariables['pad'] | (keyof DashVariables['pad'])[]
  >
  readonly bg?: MqProp<keyof DashVariables['color']>
  readonly elevation?: MqProp<keyof DashVariables['elevation']>
  readonly radius?: MqProp<
    keyof DashVariables['radius'] | (keyof DashVariables['radius'])[]
  >
}
