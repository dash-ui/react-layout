import {FrameProps} from './Frame'

// Makes frames to layer on top of each other, top-to-bottom
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
