import {FrameProps} from './Frame'
export interface StackProps extends FrameProps {
  direction: 'row' | 'column' | 'reversedRow' | 'reversedColumn'
  alignment: 'start' | 'center' | 'end'
  distribution: 'around' | 'between' | 'even' | 'stretch'
  wrap: boolean
}
export interface StackItemProps {
  fill: boolean | number
  shrink: boolean | number
}
