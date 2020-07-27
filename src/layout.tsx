import * as React from 'react'
import {styles as defaultStyles} from '@dash-ui/styles'
import dashMq from '@dash-ui/mq'
import type {
  Styles,
  DashTokens,
  StyleMap,
  StyleObject,
  StyleCallback,
  StyleValue,
  StylesOne,
} from '@dash-ui/styles'

const oneCache = new Map<Styles, Map<string, StylesOne>>()
const defaultOne = getOneCache(defaultStyles)
function defaultMq<V>(style: any, value: V) {
  if (value === void 0) return
  /* istanbul ignore next */
  if (typeof process !== 'undefined' && process.env.NODE_ENV !== 'production') {
    if (typeof value === 'object' && !Array.isArray(value)) {
      throw new Error(
        '@dash-ui/layout is attempting to use media queries without a <LayoutProvider> component. This is not allowed.'
      )
    }
  }

  return defaultOne(
    typeof style === 'function'
      ? style(value)
      : typeof value === 'string'
      ? style[value]
      : ''
  )()
}

const LayoutContext = React.createContext<LayoutContextType>({
  styles: defaultStyles,
  cls: (style: StyleValue) => defaultOne(style)(),
  mediaQueries: {},
  mq: defaultMq,
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
  const context = React.useMemo(() => {
    const one = getOneCache(styles)
    const mediaQueryKeys: Extract<keyof MediaQueries, string>[] = Object.keys(
      mediaQueries
    )
    // We need to allow for the 'default' setting in mq() as well
    mediaQueryKeys.push('default')
    const mq = dashMq(mediaQueries)

    return {
      styles,
      cls: (style: StyleValue) => one(style)(),
      mediaQueries,
      mq: (style: any, value: any) => {
        if (value === void 0) return

        if (typeof value === 'object' && !Array.isArray(value)) {
          // Media queries
          const mqs: Record<
            keyof MediaQueries,
            string | StyleObject | StyleCallback<DashTokens>
          > = {}
          for (let i = 0; i < mediaQueryKeys.length; i++) {
            const queryName = mediaQueryKeys[i]
            const queryValue = value[queryName]

            if (queryValue !== void 0) {
              mqs[queryName] =
                typeof style === 'function'
                  ? style(queryValue, queryName)
                  : style[queryValue]
            }
          }

          return one(mq(mqs))()
        }

        // Single style
        return one(
          typeof style === 'function'
            ? style(value)
            : typeof value === 'string'
            ? style[value]
            : ''
        )()
      },
    }
  }, [styles, mediaQueries])

  return <LayoutContext.Provider value={context} children={children} />
}

// This puts string styles w/o media queries on a hot path that makes their
// class name retrieval 10x faster. Also puts simple objects and media queries
// on a hot path for about a 3x gain.
function getOneCache(styles: Styles) {
  const initialCache = oneCache.get(styles)
  let cache: Map<string, StylesOne>

  if (!initialCache) {
    cache = new Map<string, StylesOne>()
    oneCache.set(styles, cache)
  } else {
    cache = initialCache
  }

  return (style: StyleValue) => {
    let key: StyleValue = style
    // Caching simple media query/object styles is about 3x faster
    // than not caching
    if (typeof key === 'object') {
      const values = Object.values(style)
      // Please don't devsplain me about Array.every()
      let every = true
      const len = values.length
      let i = 0

      for (; i < len; i++)
        if (typeof values[i] !== 'string') {
          every = false
          break
        }

      if (every) key = JSON.stringify(style)
    }

    // We don't even attemp to cache callbacks
    if (typeof key !== 'string') return styles.one(style)

    // Get the cached "one" callback if there one, otherwise
    // create a new one
    let value = cache.get(key)

    if (value === void 0) {
      value = styles.one(style)
      cache.set(key, value)
    }

    return value
  }
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

export type MqPropCallback<V> = (
  queryValue: V,
  queryName: keyof MediaQueries
) => StyleValue<DashTokens>

export type MqProp<ValueType> =
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

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  LayoutProvider.displayName = 'LayoutProvider'
}
