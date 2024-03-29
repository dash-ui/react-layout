import responsive from "@dash-ui/responsive";
import type {
  Responsive,
  ResponsiveLazyCallback,
  ResponsiveStyles,
} from "@dash-ui/responsive";
import { styles as defaultStyles } from "@dash-ui/styles";
import type {
  DashThemes,
  DashTokens,
  LazyValue,
  Styles,
} from "@dash-ui/styles";
import * as React from "react";

const LayoutContext = React.createContext<
  ResponsiveStyles<DashTokens, DashThemes, MediaQueries>
>(memoResponsive(responsive(defaultStyles, {})));

/**
 * Returns the [responsive `styles()`](https://github.com/dash-ui/responsive)
 * used for creating responsive layout props.
 */
export function useResponsiveStyles() {
  return React.useContext(LayoutContext);
}

/**
 * A context provider which is only required if you intend on using
 * responsive props or a custom `styles()` instance.
 *
 * @param root0
 * @param root0.styles
 * @param root0.mediaQueries
 * @param root0.children
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
  );
}

function memoResponsive(
  responsiveStyles: ResponsiveStyles<DashTokens, DashThemes, MediaQueries>
): ResponsiveStyles<DashTokens, DashThemes, MediaQueries> {
  const memoStyles = Object.assign(
    memo(responsiveStyles as any),
    responsiveStyles
  );
  memoStyles.lazy = memo(memoStyles.lazy);
  memoStyles.one = memo(memoStyles.one);
  return memoStyles;
}

function memo<Value, ReturnValue>(
  fn: (value: Value) => ReturnValue
): (value: Value) => ReturnValue {
  const weakCache = new WeakMap<any, ReturnValue>();
  const mapCache = new Map<any, ReturnValue>();

  return function (value: Value): ReturnValue {
    let returnValue: ReturnValue | undefined;
    const isWeak =
      typeof value === "function" ||
      (typeof value === "object" && value !== null);

    returnValue = (isWeak ? weakCache : mapCache).get(value);

    if (returnValue === void 0) {
      returnValue = fn(value);
      (isWeak ? weakCache : mapCache).set(value, returnValue);
    }

    return returnValue;
  };
}

export type ResponsiveProp<Value> = Value | Responsive<Value, MediaQueries>;
export type ResponsiveLazyProp<Variant extends LazyValue> =
  ResponsiveLazyCallback<
    Variant,
    Record<string, any>,
    Record<string, any>,
    MediaQueries
  >;

export interface LayoutProviderProps {
  /**
   * The `styles()` instance you're using to create styles. By default this is the `styles()` instance
   * exported from [`@dash-ui/styles`](https://github.com/dash-ui/styles).
   */
  styles?: Styles;
  mediaQueries?: MediaQueries;
  children?: React.ReactNode;
}

export interface MediaQueries extends Record<string, string> {}

/* istanbul ignore next */
if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
  LayoutProvider.displayName = "LayoutProvider";
}
