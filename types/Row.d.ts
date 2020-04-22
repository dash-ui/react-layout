import * as React from 'react';
import type { DefaultVars } from '@-ui/react';
import type { FrameProps } from './Frame';
import type { MediaQueryProp } from './Layout';
/**
 * A component that distributes its items in a row without wrapping like so:
 *
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 *
 */
export declare const Row: React.ForwardRefExoticComponent<RowProps & React.RefAttributes<any>>;
export interface RowProps extends FrameProps {
    readonly display?: never;
    /**
     * Positional alignment for its child items on the y-axis using `align-items`
     */
    readonly align?: MediaQueryProp<'start' | 'center' | 'end' | 'baseline' | 'stretch'>;
    /**
     * Distributed alignment properties on the x-axis using `justify-content`
     */
    readonly distribute?: MediaQueryProp<'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'>;
    readonly gap?: MediaQueryProp<DefaultVars['gap']>;
    readonly reverse?: MediaQueryProp<boolean>;
}
export declare const RowItem: React.ForwardRefExoticComponent<RowItemProps & React.RefAttributes<any>>;
export interface RowItemProps extends FrameProps {
    readonly align?: MediaQueryProp<'start' | 'end' | 'center' | 'baseline' | 'stretch'>;
    readonly basis?: MediaQueryProp<number | string>;
    readonly fill?: MediaQueryProp<boolean | number>;
    readonly maxWidth?: MediaQueryProp<number | string>;
    readonly maxHeight?: MediaQueryProp<number | string>;
    readonly order?: MediaQueryProp<number>;
    readonly shrink?: MediaQueryProp<boolean | number>;
}
