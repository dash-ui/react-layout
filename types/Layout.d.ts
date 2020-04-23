import * as React from 'react'
import type {MediaQueryCallback} from '@-ui/mq'
import type {
  Styles,
  DefaultVars,
  StyleDefs,
  StyleObject,
  StyleGetter,
} from '@-ui/react'
export declare const useLayout: () => LayoutContextType
export declare const LayoutProvider: React.FC<LayoutProviderProps>
export interface LayoutContextType {
  styles: Styles
  mediaQueries: MediaQueries
  mq: Mq
}
export declare type Mq = MediaQueryCallback<
  Extract<keyof MediaQueries, string>,
  DefaultVars
> & {
  prop: MqProp
}
export interface MqProp<Names extends string = string> {
  (
    styleGetter: (
      value: any,
      queryName: string
    ) => string | StyleObject | StyleGetter,
    value: undefined | MediaQueryProp<string | number | any[]>,
    context?: any
  ): string | undefined
}
export interface MqProp<Names extends string = string> {
  (
    styleGetter: StyleDefs<Names>,
    value: undefined | MediaQueryProp<string | number>,
    context?: any
  ): string | undefined
}
export interface MediaQueries {}
export declare type MediaQueryProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }
export interface LayoutProviderProps {
  mediaQueries?: MediaQueries
}
