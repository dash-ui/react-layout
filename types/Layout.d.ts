import * as React from 'react'
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
  one: (style: StyleValue) => StylesOne
  mq: Mq
}
interface Mq<V = any> {
  (style: MqPropCallback<V>, value: V): string | undefined
}
interface Mq<V = any, Names extends string = string> {
  (style: StyleMap<Names, DashVariables>, value: V): string | undefined
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
