import * as React from 'react'
import defaultStyles, {useDash} from '@dash-ui/react'
import dashMq from '@dash-ui/mq'
import type {MediaQueryCallback} from '@dash-ui/mq'
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
const defaultOneStyle = getOneStyleCache(defaultStyles)
const defaultMq = dashMq({}) as Mq
defaultMq.prop = function <V = any, Names extends string = string>(
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

  return defaultOneStyle(
    typeof style === 'function'
      ? style(value as V)
      : typeof value === 'string'
      ? style[value as keyof typeof style]
      : ('' as any)
  )()
}

const LayoutContext = React.createContext<LayoutContextType>({
  styles: defaultStyles,
  oneStyle: defaultOneStyle,
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
    const oneStyle = getOneStyleCache(styles)
    const mq = dashMq(mediaQueries) as Mq
    mq.prop = (style: any, value: any) => {
      if (value === void 0) return

      if (typeof value === 'object' && !Array.isArray(value)) {
        // Media queries
        const mqObj = mq(
          Object.keys(mediaQueries).reduce(
            (stylesWithMq: any, queryName: any) => {
              const queryValue = value[queryName as keyof MediaQueries]

              if (value[queryName as keyof MediaQueries] !== void 0) {
                stylesWithMq[queryName] =
                  typeof style === 'function'
                    ? style(queryValue, queryName)
                    : style[queryValue]
              }

              return stylesWithMq
            },
            {} as Record<
              keyof MediaQueries,
              string | StyleObject | StyleCallback<DashVariables>
            >
          )
        )

        return styles.one(mqObj)()
      }
      // Single style
      return oneStyle(
        typeof style === 'function'
          ? style(value)
          : typeof value === 'string'
          ? style[value]
          : ''
      )()
    }

    return {styles, oneStyle, mediaQueries, mq}
  }, [styles, mediaQueries])
  return <LayoutContext.Provider value={context} children={children} />
}

// This puts string styles w/o media queries on a hot path that makes their
// class name retrieval 10x faster
function getOneStyleCache(styles: Styles) {
  let cache: Record<string, StylesOne> = oneCache.get(styles)

  if (!cache) {
    cache = {}
    oneCache.set(styles, cache)
  }

  return (style: StyleValue) => {
    if (typeof style !== 'string') return styles.one(style)
    if (cache[style] === void 0) cache[style] = styles.one(style)
    return cache[style]
  }
}

export interface LayoutContextType {
  styles: Styles
  mediaQueries: MediaQueries
  oneStyle: (style: StyleValue) => StylesOne
  mq: Mq
}

type Mq = MediaQueryCallback<
  Extract<keyof MediaQueries, string>,
  DashVariables
> & {
  prop: MqContextProp
}

interface MqContextProp<V = any> {
  (style: MqPropCallback<V>, value: V): string | undefined
}

interface MqContextProp<V = any, Names extends string = string> {
  (style: StyleMap<Names>, value: V): string | undefined
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
