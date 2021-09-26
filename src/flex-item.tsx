import clsx from "clsx";
import forwardRefAs from "forward-ref-as";
import css from "minify-css.macro";
import * as React from "react";
import { Box } from "./box";
import type { BoxProps } from "./box";
import { useResponsiveStyles } from "./layout";
import type { ResponsiveProp } from "./layout";
import { alignSelf } from "./styles";
import { unit } from "./utils";

/**
 * A layout component that can add positioning properties to itself inside
 * of a flex container.
 *
 * @example
 * <FlexItem align='top'/>
 */
export const FlexItem = forwardRefAs<"div", FlexItemProps>(function FlexItem(
  {
    className,
    maxWidth,
    maxHeight,
    basis,
    order,
    grow,
    shrink,
    align,
    ...props
  },
  ref
) {
  const styles = useResponsiveStyles();

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        styles.join(
          basis === void 0 ? "" : styles.lazy(basisStyle).css(basis),
          order === void 0 ? "" : styles.lazy(orderStyle).css(order),
          grow === void 0 ? "" : styles.lazy(growStyle).css(grow),
          shrink === void 0 ? "" : styles.lazy(shrinkStyle).css(shrink),
          styles(alignSelf).css(align)
        ),
        maxWidth === void 0 ? "" : styles.lazy(maxWidthStyle)(maxWidth),
        maxHeight === void 0 ? "" : styles.lazy(maxHeightStyle)(maxHeight)
      )}
      {...props}
    />
  );
});

const maxWidthStyle = (maxWidth: number | string) =>
  css`
    max-width: ${unit(maxWidth)};
  `;
const maxHeightStyle = (maxHeight: number | string) => css`
  max-height: ${unit(maxHeight)};
`;
const basisStyle = (basis: number | string) => css`
  flex-basis: ${unit(basis)};
`;
const orderStyle = (order: number) => css`
  order: ${order};
`;
const growStyle = (grow: number | boolean) => css`
  flex-grow: ${grow === true ? 1 : grow === false ? 0 : grow};
`;
const shrinkStyle = (shrink: number | boolean) => css`
  flex-shrink: ${shrink === true ? 1 : shrink === false ? 0 : shrink};
`;

export interface FlexItemProps extends BoxProps {
  /**
   * Sets a `align-self` CSS property on your component
   */
  readonly align?: ResponsiveProp<
    "start" | "end" | "center" | "baseline" | "stretch"
  >;
  /**
   * Sets a `flex-basis` CSS property on your component
   */
  readonly basis?: ResponsiveProp<number | string>;
  /**
   * Sets a `flex-grow` CSS property on your component
   */
  readonly grow?: ResponsiveProp<boolean | number>;
  /**
   * Sets a `max-width` CSS property on your component
   */
  readonly maxWidth?: ResponsiveProp<number | string>;
  /**
   * Sets a `max-height` CSS property on your component
   */
  readonly maxHeight?: ResponsiveProp<number | string>;
  /**
   * Sets a `order` CSS property on your component
   */
  readonly order?: ResponsiveProp<number>;
  /**
   * Sets a `flex-shrink` CSS property on your component
   */
  readonly shrink?: ResponsiveProp<boolean | number>;
}

/* istanbul ignore next */
if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
  FlexItem.displayName = "FlexItem";
}
