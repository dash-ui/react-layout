import type {DashVariables} from '@dash-ui/styles'
import type {MqProp} from './layout'
import type {AsProp} from './types'
export declare const Box: import('./utils').ForwardRefAsExoticComponent<
  BoxProps,
  'div'
>
export interface BoxProps {
  readonly as?: AsProp
  readonly className?: string | string[]
  readonly display?: MqProp<
    'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline' | 'none'
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
