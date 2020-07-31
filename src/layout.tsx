import * as React from 'react'
import {styles as defaultStyles} from '@dash-ui/styles'
import responsive from '@dash-ui/responsive'
import type {
  Responsive,
  ResponsiveStyle,
  ResponsiveCallback,
  ResponsiveStyleWithCallback,
} from '@dash-ui/responsive'
import type {Styles, Style, DashTokens, StyleMap} from '@dash-ui/styles'

const LayoutContext = React.createContext<LayoutContextType>({
  styles: defaultStyles,
  responsiveStyles: memoResponsive(responsive(defaultStyles, {})),
})

/**
 * A context consumer hook for `<LayoutProvider>`
 */
export function useLayout() {
  return React.useContext(LayoutContext)
}

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
export function LayoutProvider({
  styles = defaultStyles,
  mediaQueries = {},
  children,
}: LayoutProviderProps) {
  const context = React.useMemo(
    () => ({
      styles,
      responsiveStyles: memoResponsive(responsive(styles, mediaQueries)),
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [styles, JSON.stringify(mediaQueries)]
  )

  return <LayoutContext.Provider value={context} children={children} />
}

function memoResponsive(r: ReturnType<typeof responsive>) {
  const cache = new Map<
    any,
    | ResponsiveStyle<any, DashTokens, MediaQueries>
    | ResponsiveStyleWithCallback<any, DashTokens, MediaQueries>
  >()

  function memo<Variant extends string>(
    style: StyleMap<Variant, DashTokens>
  ): ResponsiveStyle<Variant, DashTokens, MediaQueries>
  function memo<Variant extends string>(
    style: Style<Variant, DashTokens>
  ): ResponsiveStyle<Variant, DashTokens, MediaQueries>
  function memo<Variant extends unknown>(
    style: ResponsiveCallback<Variant, DashTokens, MediaQueries>
  ): ResponsiveStyleWithCallback<Variant, DashTokens, MediaQueries>
  function memo<Variant extends string>(
    styleMap:
      | StyleMap<Variant, DashTokens>
      | Style<Variant, DashTokens>
      | ResponsiveCallback<Variant, DashTokens, MediaQueries>
  ):
    | ResponsiveStyle<Variant, DashTokens, MediaQueries>
    | ResponsiveStyleWithCallback<Variant, DashTokens, MediaQueries> {
    const rs = cache.get(styleMap)
    if (rs) return rs
    const nextRs = r(styleMap as any)
    cache.set(styleMap, nextRs)
    return nextRs
  }

  return memo
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

export type ResponsiveProp<ValueType> = Responsive<ValueType, MediaQueries>
export type ResponsivePropCallback<Variant> = ResponsiveCallback<
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

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  LayoutProvider.displayName = 'LayoutProvider'
}
