import * as React from 'react'
import defaultStyles, {useDash} from '@-ui/react'
import dashMq from '@-ui/mq'
import type {MediaQueryCallback} from '@-ui/mq'
import type {
  Styles,
  DefaultVars,
  StyleDefs,
  StyleObject,
  StyleGetter,
} from '@-ui/react'

declare const __DEV__: boolean

const defaultMq = dashMq({}) as Mq
defaultMq.prop = (styleGetter, value) => {
  if (value === void 0) return
  /* istanbul ignore next */
  if (__DEV__) {
    if (typeof value === 'object' && !Array.isArray(value)) {
      throw new Error(
        '@-ui/layout is attempting to use media queries without a <LayoutProvider> component. This is not allowed.'
      )
    }
  }

  // Single style
  return defaultStyles.one(
    typeof styleGetter === 'function'
      ? styleGetter(value)
      : typeof value === 'string'
      ? styleGetter[value]
      : ''
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
    mq.prop = (styleGetter, value, context) => {
      if (value === void 0) return

      if (typeof value === 'object' && !Array.isArray(value)) {
        // Media queries
        const mqObj = mq(
          Object.keys(mediaQueries).reduce((stylesWithMq, queryName) => {
            const queryValue = value[queryName]

            if (value[queryName] !== void 0) {
              stylesWithMq[queryName] =
                typeof styleGetter === 'function'
                  ? styleGetter(queryValue, queryName, context)
                  : styleGetter[queryValue]
            }

            return stylesWithMq
          }, {})
        )

        return styles.one(mqObj)()
      }
      // Single style
      return styles.one(
        typeof styleGetter === 'function'
          ? styleGetter(value)
          : typeof value === 'string'
          ? styleGetter[value]
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
  DefaultVars
> & {
  prop: MqProp
}

export interface MqProp<Names extends string = string> {
  (
    styleGetter: (
      value: any,
      queryName: string
    ) => string | StyleObject | StyleGetter,
    value: undefined | MediaQueryProp<string | number | any[]>,
    context?: any
  ): string | undefined
}

export interface MqProp<Names extends string = string> {
  (
    styleGetter: StyleDefs<Names>,
    value: undefined | MediaQueryProp<string | number>,
    context?: any
  ): string | undefined
}

export interface MediaQueries {}

export type MediaQueryProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }

export interface LayoutProviderProps {
  mediaQueries?: MediaQueries
}
