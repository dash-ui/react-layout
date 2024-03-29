import type { DashTokens } from "@dash-ui/styles";
import clsx from "clsx";
import forwardRefAs from "forward-ref-as";
import css from "minify-css.macro";
import * as React from "react";
import { Box } from "./box";
import type { BoxProps } from "./box";
import { useResponsiveStyles } from "./layout";
import type { ResponsiveLazyProp, ResponsiveProp } from "./layout";
import { alignItems, flexDirection, justifyContent } from "./styles";

/**
 * A layout component that distributes its items in a row without wrapping
 * like so:
 *
 * ```
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 * ```
 *
 * @example
 * <Row gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Row>
 */
export const Row = forwardRefAs<"div", RowProps>(function Row(
  { className, align, distribute, gap, reverse = false, ...props },
  ref
) {
  const styles = useResponsiveStyles();

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        styles.join(
          css`
            & > * {
              flex-shrink: 0;
            }
          `,
          styles.variants(alignItems).css(align),
          styles.variants(justifyContent).css(distribute),
          gap === void 0 ? "" : styles.lazy(gapStyle(reverse)).css(gap),
          reverse === void 0 ? "" : styles.lazy(reverseStyle).css(reverse)
        )
      )}
      display="flex"
      {...props}
    />
  );
});

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? "reversedRow" : "row"];

const gapStyle =
  (
    reverse: RowProps["reverse"]
  ): ResponsiveLazyProp<Extract<keyof DashTokens["gap"], number | string>> =>
  (gapProp, queryName) => {
    const reversed =
      !reverse || typeof reverse === "boolean" ? reverse : reverse[queryName];
    const marginDirection = reversed ? "right" : "left";

    return ({ gap }) => css`
    & > * + * {
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `;
  };

export interface RowProps extends BoxProps {
  readonly display?: undefined;
  /**
   * Positional alignment for its child items on the y-axis using `align-items`
   */
  readonly align?: ResponsiveProp<
    "start" | "center" | "end" | "baseline" | "stretch"
  >;
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: ResponsiveProp<
    "start" | "center" | "end" | "around" | "between" | "evenly" | "stretch"
  >;
  /**
   * Sets a horizontal gap between the child elements in the row using the "gap"
   * token in your theme
   */
  readonly gap?: ResponsiveProp<
    Extract<keyof DashTokens["gap"], number | string>
  >;
  /**
   * Reverses the direction of the row to left-to-right
   *
   * @default false
   */
  readonly reverse?: ResponsiveProp<boolean>;
}

/* istanbul ignore next */
if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
  Row.displayName = "Row";
}
