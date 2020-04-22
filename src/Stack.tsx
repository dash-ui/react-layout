import {FrameProps} from './Frame'

// Distributes and aligns its child components in a row or column layout
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
