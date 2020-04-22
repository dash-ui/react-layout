import type {Styles} from '@-ui/react'
export declare const gapClass: (
  styles: Styles<import('@-ui/styles').DefaultVars, never>,
  direction: 'column' | 'row' | 'rowReverse' | 'columnReverse',
  gapProp: string
) => string
export declare const flexClass: (
  styles: Styles<import('@-ui/styles').DefaultVars, never>,
  flexProps: {
    direction: 'column' | 'row' | 'reversedRow' | 'reversedColumn'
    alignment: LineAlignSetting
    distribution: 'stretch' | 'around' | 'between' | 'even'
    wrap: boolean | 'reverse' | 'wrap'
  }
) => string
