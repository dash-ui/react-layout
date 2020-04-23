import * as React from 'react'
import type {FrameProps} from './Frame'
import type {MediaQueryProp} from './Layout'
export declare const FlexItem: React.ForwardRefExoticComponent<
  FlexItemProps & React.RefAttributes<any>
>
export interface FlexItemProps extends FrameProps {
  readonly align?: MediaQueryProp<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >
  readonly basis?: MediaQueryProp<number | string>
  readonly fill?: MediaQueryProp<boolean | number>
  readonly maxWidth?: MediaQueryProp<number | string>
  readonly maxHeight?: MediaQueryProp<number | string>
  readonly order?: MediaQueryProp<number>
  readonly shrink?: MediaQueryProp<boolean | number>
}
