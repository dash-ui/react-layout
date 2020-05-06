import * as React from 'react'
import defaultStyles, {useDash, StyleCallback} from '@dash-ui/react'
import dashMq from '@dash-ui/mq'
import type {MediaQueryCallback} from '@dash-ui/mq'
import type {Styles, DashVariables, StyleMap, StyleObject} from '@dash-ui/react'

declare const __DEV__: boolean

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

  // Single style
  return defaultStyles.one(
    typeof style === 'function'
      ? style(value as V)
      : typeof value === 'string'
      ? style[value as keyof typeof style]
      : ('' as any)
  )()
}

const LayoutContext = React.createContext<LayoutContextType>({
  styles: defaultStyles,
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
    const mq = dashMq(mediaQueries) as Mq
    mq.prop = function <V = any, Names extends string = string>(
      style: any,
      value: any,
      context: any
    ) {
      if (value === void 0) return

      if (typeof value === 'object' && !Array.isArray(value)) {
        // Media queries
        const mqObj = mq(
          Object.keys(mediaQueries).reduce<
            Record<keyof MediaQueries, string | StyleObject | StyleCallback>
          >((stylesWithMq: any, queryName: any) => {
            const queryValue = value[queryName as keyof MediaQueries]

            if (value[queryName as keyof MediaQueries] !== void 0) {
              stylesWithMq[queryName] =
                typeof style === 'function'
                  ? style(
                      queryValue as V,
                      queryName as keyof MediaQueries,
                      context
                    )
                  : style[queryValue as Names]
            }

            return stylesWithMq
          }, {})
        )

        return styles.one(mqObj)()
      }
      // Single style
      return styles.one(
        typeof style === 'function'
          ? style(value as any)
          : typeof value === 'string'
          ? style[value]
          : ''
      )()
    }

    return {styles, mediaQueries, mq}
  }, [styles, mediaQueries])
  return <LayoutContext.Provider value={context} children={children} />
}

export interface LayoutContextType {
  styles: Styles
  mediaQueries: MediaQueries
  mq: Mq
}

export type Mq = MediaQueryCallback<
  Extract<keyof MediaQueries, string>,
  DashVariables
> & {
  prop: MqProp
}

export interface MqProp<V = any> {
  (style: any, value: any, context?: any): string | undefined
}

export interface MqProp<V = any, Names extends string = string> {
  (style: StyleMap<Names>, value: any, context?: any): string | undefined
}

export type MediaQueryProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }

export interface LayoutProviderProps {
  mediaQueries?: MediaQueries
}

export interface MediaQueries {}
