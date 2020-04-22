import * as React from 'react';
import type { DefaultVars } from '@-ui/react';
import type { MediaQueryProp } from './Layout';
export declare const Frame: React.ForwardRefExoticComponent<FrameProps & React.RefAttributes<any>>;
export interface FrameProps {
    readonly as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
    readonly className?: string | string[];
    readonly display?: MediaQueryProp<'flex' | 'inlineFlex' | 'block' | 'inlineBlock' | 'inline'>;
    readonly position?: MediaQueryProp<'relative' | 'absolute' | 'sticky' | 'fixed'>;
    readonly width?: MediaQueryProp<number | string>;
    readonly height?: MediaQueryProp<number | string>;
    readonly size?: MediaQueryProp<number | string>;
    readonly pad?: MediaQueryProp<keyof DefaultVars['pad'] | (keyof DefaultVars['pad'])[]>;
    readonly bg?: MediaQueryProp<keyof DefaultVars['color']>;
    readonly elevation?: MediaQueryProp<keyof DefaultVars['elevation']>;
    readonly hidden?: MediaQueryProp<boolean>;
}
