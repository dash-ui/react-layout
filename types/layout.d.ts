import * as React from 'react'
import responsive from '@dash-ui/responsive'
import type {
  Responsive,
  ResponsiveStyle,
  ResponsiveCallback,
  ResponsiveStyleWithCallback,
} from '@dash-ui/responsive'
import type {Styles, Style, DashTokens, StyleMap} from '@dash-ui/styles'
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
declare function memoResponsive(
  r: ReturnType<typeof responsive>
): {
  <Variant extends string>(
    style: StyleMap<Variant, DashTokens>
  ): ResponsiveStyle<Variant, DashTokens, MediaQueries>
  <Variant_1 extends string>(
    style: Style<Variant_1, DashTokens>
  ): ResponsiveStyle<Variant_1, DashTokens, MediaQueries>
  <Variant_2 extends unknown>(
    style: ResponsiveCallback<Variant_2, DashTokens, MediaQueries>
  ): ResponsiveStyleWithCallback<Variant_2, DashTokens, MediaQueries>
}
export interface LayoutContextType {
  /**
   * The `styles()` instance being used by this provider
   */
  styles: Styles
  /**
   * A function for adding responsive props to components
   */
  responsiveStyles: ReturnType<typeof memoResponsive>
}
export declare type ResponsiveProp<ValueType> = Responsive<
  ValueType,
  MediaQueries
>
export declare type ResponsivePropCallback<Variant> = ResponsiveCallback<
  Variant,
  DashTokens,
  MediaQueries
>
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
