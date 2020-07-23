import * as React from 'react'
import {styles as defaultStyles} from '@dash-ui/styles'
import dashMq from '@dash-ui/mq'
import type {
  Styles,
  DashVariables,
  StyleMap,
  StyleObject,
  StyleCallback,
  StyleValue,
  StylesOne,
} from '@dash-ui/styles'

const oneCache = new Map()
const defaultOne = getOneCache(defaultStyles)
const defaultMq = function <V>(style: any, value: unknown) {
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
      ? style(value as V)
      : typeof value === 'string'
      ? style[value as keyof typeof style]
      : ('' as any)
  )()
}

const LayoutContext = React.createContext<LayoutContextType>({
  styles: defaultStyles,
  cls: (style: StyleValue) => defaultOne(style)(),
  mediaQueries: {},
  mq: defaultMq,
})

export function useLayout() {
  return React.useContext(LayoutContext)
}

export function LayoutProvider({
  styles = defaultStyles,
  mediaQueries = {},
  children,
}: LayoutProviderProps) {
  const context = React.useMemo(() => {
    const one = getOneCache(styles)
    // @ts-expect-error
    const mediaQueryKeys: Extract<keyof MediaQueries, string>[] = Object.keys(
      mediaQueries
    )
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
            string | StyleObject | StyleCallback<DashVariables>
          > = {}
          for (let i = 0; i < mediaQueryKeys.length; i++) {
            const queryName = mediaQueryKeys[i]
            const queryValue = value[queryName]

            if (queryValue !== void 0) {
              // @ts-expect-error
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
  let cache: Map<string, StylesOne> = oneCache.get(styles)

  if (!cache) {
    cache = new Map()
    oneCache.set(styles, cache)
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

    if (typeof key !== 'string') return styles.one(style)

    let value = cache.get(key)

    if (value === void 0) {
      value = styles.one(style)
      cache.set(key, value)
    }

    return value
  }
}

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

export type MqPropCallback<V> = (
  queryValue: V,
  queryName: keyof MediaQueries
) => StyleValue<DashVariables>

export type MqProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }

export interface LayoutProviderProps {
  styles?: Styles
  mediaQueries?: MediaQueries
  children?: React.ReactNode
}

export interface MediaQueries {}
