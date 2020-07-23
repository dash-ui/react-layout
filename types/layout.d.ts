import * as React from 'react'
import type {Styles, DashVariables, StyleMap, StyleValue} from '@dash-ui/styles'
export declare function useLayout(): LayoutContextType
export declare function LayoutProvider({
  styles,
  mediaQueries,
  children,
}: LayoutProviderProps): JSX.Element
export interface LayoutContextType {
  styles: Styles
  mediaQueries: MediaQueries
  cls: (style: StyleValue) => string
  mq: Mq
}
interface Mq {
  <T, V>(style: MqPropCallback<T>, value: V): string | undefined
}
interface Mq {
  <V, Names extends string>(style: StyleMap<Names, DashVariables>, value: V):
    | string
    | undefined
}
export declare type MqPropCallback<V> = (
  queryValue: V,
  queryName: keyof MediaQueries
) => StyleValue<DashVariables>
export declare type MqProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }
export interface LayoutProviderProps {
  styles?: Styles
  mediaQueries?: MediaQueries
  children?: React.ReactNode
}
export interface MediaQueries extends Record<string, string> {}
export {}
