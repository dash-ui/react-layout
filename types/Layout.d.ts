import * as React from 'react'
import type {MediaQueryCallback} from '@dash-ui/mq'
import type {
  Styles,
  DashVariables,
  StyleMap,
  StyleValue,
  StylesOne,
} from '@dash-ui/styles'
export declare const useLayout: () => LayoutContextType
export declare const LayoutProvider: React.FC<LayoutProviderProps>
export interface LayoutContextType {
  styles: Styles
  mediaQueries: MediaQueries
  oneStyle: (style: StyleValue) => StylesOne
  mq: Mq
}
declare type Mq = MediaQueryCallback<
  Extract<keyof MediaQueries, string>,
  DashVariables
> & {
  prop: MqContextProp
}
interface MqContextProp<V = any> {
  (style: MqPropCallback<V>, value: V): string | undefined
}
interface MqContextProp<V = any, Names extends string = string> {
  (style: StyleMap<Names>, value: V): string | undefined
}
export declare type MqPropCallback<V = any> = (
  queryValue: V,
  queryName: keyof MediaQueries
) => StyleValue<DashVariables>
export declare type MqProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }
export interface LayoutProviderProps {
  mediaQueries?: MediaQueries
}
export interface MediaQueries {}
export {}
