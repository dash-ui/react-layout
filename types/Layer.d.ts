import {FrameProps} from './Frame'
export interface LayerProps extends FrameProps {
  anchor:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'center'
    | 'topLeft'
    | 'topRight'
    | 'bottomRight'
    | 'bottomLeft'
}
