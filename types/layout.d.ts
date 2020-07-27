import * as React from 'react'
import type {Styles, DashTokens, StyleMap, StyleValue} from '@dash-ui/styles'
/**
 * A context consumer hook for `<LayoutProvider>`
 */
export declare function useLayout(): LayoutContextType
/**
 * A context provider which is only required if you intend on using
 * media query props or a custom `styles()` instance.
 *
 * @example
 * <LayoutProvider
 *   styles={styles}
 *   mediaQueries={{sm: 'only screen and (min-width: 0em)'}}
 * >
 *  <App/>
 * </LayoutProvider>
 */
export declare function LayoutProvider({
  styles,
  mediaQueries,
  children,
}: LayoutProviderProps): JSX.Element
export declare namespace LayoutProvider {
  var displayName: string
}
export interface LayoutContextType {
  /**
   * The `styles()` instance being used by this provider
   */
  styles: Styles
  /**
   * The media queries being used by this provider
   */
  mediaQueries: MediaQueries
  /**
   * A function that accepts a style value and returns a
   * class name
   */
  cls: (style: StyleValue) => string
  /**
   * A function for adding media query props to components
   */
  mq: Mq
}
interface Mq {
  <T, V>(style: MqPropCallback<T>, value: V): string | undefined
}
interface Mq {
  <V, Names extends string>(style: StyleMap<Names, DashTokens>, value: V):
    | string
    | undefined
}
export declare type MqPropCallback<V> = (
  queryValue: V,
  queryName: keyof MediaQueries
) => StyleValue<DashTokens>
export declare type MqProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }
export interface LayoutProviderProps {
  /**
   * The `styles()` instance you're using to create styles. By default this is the `styles()` instance
   * exported from [`@dash-ui/styles`](https://github.com/dash-ui/styles).
   */
  styles?: Styles
  mediaQueries?: MediaQueries
  children?: React.ReactNode
}
export interface MediaQueries extends Record<string, string> {}
export {}
