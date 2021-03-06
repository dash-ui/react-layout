import * as React from 'react'
import type {
  Responsive,
  ResponsiveStyles,
  ResponsiveLazyCallback,
} from '@dash-ui/responsive'
import type {Styles, DashTokens, LazyValue} from '@dash-ui/styles'
/**
 * Returns the [responsive `styles()`](https://github.com/dash-ui/responsive)
 * used for creating responsive layout props.
 */
export declare function useResponsiveStyles(): ResponsiveStyles<
  DashTokens,
  MediaQueries,
  never
>
/**
 * A context provider which is only required if you intend on using
 * responsive props or a custom `styles()` instance.
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
export declare type ResponsiveProp<Value> =
  | Value
  | Responsive<Value, MediaQueries>
export declare type ResponsiveLazyProp<
  Variant extends LazyValue
> = ResponsiveLazyCallback<Variant, DashTokens, MediaQueries>
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
