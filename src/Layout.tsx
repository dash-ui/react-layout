import * as React from 'react'
import defaultStyles from '@dash-ui/styles'
import {useDash} from '@dash-ui/react'
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

declare const __DEV__: boolean

const oneCache = new Map()
const defaultOne = getOneCache(defaultStyles)
const defaultMq = function <V = any, Names extends string = string>(
  style: any,
  value: any
) {
  if (value === void 0) return
  /* istanbul ignore next */
  if (__DEV__) {
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
  one: defaultOne,
  // @ts-ignore
  mediaQueries: {},
  mq: defaultMq,
})

export const useLayout = () => React.useContext(LayoutContext)
const emptyObj = {}

export const LayoutProvider: React.FC<LayoutProviderProps> = ({
  mediaQueries = emptyObj,
  children,
}) => {
  const styles = useDash()
  const context = React.useMemo(() => {
    const one = getOneCache(styles)
    // @ts-ignore
    const mediaQueryKeys: Extract<keyof MediaQueries, string>[] = Object.keys(
      mediaQueries
    )
    const mq = dashMq(mediaQueries)
    return {
      styles,
      one,
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
              // @ts-ignore
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
  let cache: Record<string, StylesOne> = oneCache.get(styles)

  if (!cache) {
    cache = {}
    oneCache.set(styles, cache)
  }

  return (style: StyleValue) => {
    let key: StyleValue = style
    // Caching simple media query/object styles is about 3x faster
    // than not caching
    if (typeof key === 'object') {
      const values = Object.values(style)
      // Please don't devsplain me about Array.every(). What's the point in
      // memoization if we don't maximize for performance?
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
    if (cache[key] === void 0) cache[key] = styles.one(style)
    return cache[key]
  }
}

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

export type MqPropCallback<V = any> = (
  queryValue: V,
  queryName: keyof MediaQueries
) => StyleValue<DashVariables>

export type MqProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }

export interface LayoutProviderProps {
  mediaQueries?: MediaQueries
}

export interface MediaQueries {}
