import type {Styles} from '@-ui/react'
export declare const gapClass: (
  styles: Styles<import('@-ui/styles').DefaultVars, never>,
  direction: 'column' | 'row' | 'rowReverse' | 'columnReverse',
  gapProp: string
) => string
export declare const flexClass: (
  styles: Styles<import('@-ui/styles').DefaultVars, never>,
  flexProps: {
    direction?: 'column' | 'row' | 'reversedRow' | 'reversedColumn' | undefined
    alignment?: 'center' | 'end' | 'start' | undefined
    distribution?: 'stretch' | 'around' | 'between' | 'even' | undefined
    wrap?: boolean | 'reverse' | 'wrap' | undefined
  }
) => string
