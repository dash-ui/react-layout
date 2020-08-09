import * as React from 'react'
import {styles as defaultStyles} from '@dash-ui/styles'
import responsive from '@dash-ui/responsive'
import type {
  Responsive,
  ResponsiveStyles,
  ResponsiveLazyCallback,
} from '@dash-ui/responsive'
import type {
  Styles,
  DashTokens,
  DashThemeNames,
  LazyValue,
} from '@dash-ui/styles'

const LayoutContext = React.createContext<
  ResponsiveStyles<DashTokens, MediaQueries, DashThemeNames>
>(memoResponsive(responsive(defaultStyles, {})))

/**
 * Returns the [responsive `styles()`](https://github.com/dash-ui/responsive)
 * used for creating responsive layout props.
 */
export function useResponsiveStyles() {
  return React.useContext(LayoutContext)
}

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
export function LayoutProvider({
  styles = defaultStyles,
  mediaQueries = {},
  children,
}: LayoutProviderProps) {
  return (
    <LayoutContext.Provider
      value={React.useMemo(
        () => memoResponsive(responsive(styles, mediaQueries)),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [styles, JSON.stringify(mediaQueries)]
      )}
      children={children}
    />
  )
}

function memoResponsive(
  responsiveStyles: ResponsiveStyles<DashTokens, MediaQueries, DashThemeNames>
): ResponsiveStyles<DashTokens, MediaQueries, DashThemeNames> {
  const memoStyles = Object.assign(memo(responsiveStyles), responsiveStyles)
  memoStyles.lazy = memo(memoStyles.lazy)
  memoStyles.one = memo(memoStyles.one)
  return memoStyles
}

function memo<Value, ReturnValue>(
  fn: (value: Value) => ReturnValue
): (value: Value) => ReturnValue {
  const weakCache = new WeakMap<any, ReturnValue>()
  const mapCache = new Map<any, ReturnValue>()

  return function (value: Value): ReturnValue {
    let returnValue: ReturnValue | undefined
    const isWeak =
      typeof value === 'function' ||
      (typeof value === 'object' && value !== null)

    returnValue = (isWeak ? weakCache : mapCache).get(value)

    if (returnValue === void 0) {
      returnValue = fn(value)
      ;(isWeak ? weakCache : mapCache).set(value, returnValue)
    }

    return returnValue
  }
}

export type ResponsiveProp<Value> = Value | Responsive<Value, MediaQueries>
export type ResponsiveLazyProp<
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

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  LayoutProvider.displayName = 'LayoutProvider'
}
