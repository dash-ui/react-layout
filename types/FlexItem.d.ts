import * as React from 'react'
import type {BoxProps} from './Box'
import type {MqProp} from './Layout'
export declare const FlexItem: React.ForwardRefExoticComponent<
  FlexItemProps & React.RefAttributes<any>
>
export interface FlexItemProps extends BoxProps {
  readonly align?: MqProp<'start' | 'end' | 'center' | 'baseline' | 'stretch'>
  readonly basis?: MqProp<number | string>
  readonly grow?: MqProp<boolean | number>
  readonly maxWidth?: MqProp<number | string>
  readonly maxHeight?: MqProp<number | string>
  readonly order?: MqProp<number>
  readonly shrink?: MqProp<boolean | number>
}
