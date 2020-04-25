import * as React from 'react'
import type {DefaultVars} from '@-ui/react'
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
    keyof DefaultVars['pad'] | (keyof DefaultVars['pad'])[]
  >
  readonly bg?: MediaQueryProp<keyof DefaultVars['color']>
  readonly elevation?: MediaQueryProp<keyof DefaultVars['elevation']>
  readonly radius?: MediaQueryProp<
    keyof DefaultVars['radius'] | (keyof DefaultVars['radius'])[]
  >
}
