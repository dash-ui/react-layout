import React from 'react'
import type {DefaultVars} from '@-ui/react'
export declare const Frame: React.ForwardRefExoticComponent<
  FrameProps & React.RefAttributes<any>
>
export interface FrameProps {
  readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>
  readonly className?: string | string[]
  readonly display?: 'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'
  readonly position?: 'relative' | 'absolute' | 'sticky' | 'fixed'
  readonly width?: number | string
  readonly height?: number | string
  readonly size?: number | string
  readonly pad?: keyof DefaultVars['pad'] | (keyof DefaultVars['pad'])[]
  readonly bg?: keyof DefaultVars['color']
  readonly elevation?: keyof DefaultVars['elevation']
  readonly hidden?: boolean
}
