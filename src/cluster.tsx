import type { DashTokens } from "@dash-ui/styles";
import clsx from "clsx";
import forwardRefAs from "forward-ref-as";
import css from "minify-css.macro";
import * as React from "react";
import { Box } from "./box";
import type { BoxProps } from "./box";
import { useResponsiveStyles } from "./layout";
import type { ResponsiveLazyProp, ResponsiveProp } from "./layout";
import { flexDirection, justifyContent } from "./styles";

/**
 * A row directional layout component that distributes its items in a cluster
 * like so:
 *
 * ```
 * ☐☐☐☐☐
 * ☐☐☐☐☐☐
 * ☐☐☐☐☐
 * ☐☐☐
 * ```
 *
 * or
 * ```
 *  ☐☐☐☐☐
 * ☐☐☐☐☐☐
 *  ☐☐☐☐☐
 *    ☐☐☐
 * ```
 *
 * Some use cases include input chips and tags.
 *
 * @example
 * <Cluster gap='sm'>
 *   <Item/>
 *   <Item/>
 * </Cluster>
 */
export const Cluster = forwardRefAs<"div", ClusterProps>(function Cluster(
  { className, gap, reverse = false, ...props },
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
            display: flex;
            flex-wrap: wrap;
            & > * {
              flex-shrink: 0;
            }
          `,
          gap === void 0 ? "" : styles.lazy(gapStyle(reverse)).css(gap),
          reverse === void 0 ? "" : styles.lazy(reverseStyle).css(reverse)
        )
      )}
      {...props}
    />
  );
});

const reverseStyle = (reverse: boolean) =>
  flexDirection[reverse ? "reversedRow" : "row"] + justifyContent.start;

const gapStyle =
  (
    reverse: ClusterProps["reverse"]
  ): ResponsiveLazyProp<Extract<keyof DashTokens["gap"], string | number>> =>
  (gapProp, queryName) => {
    const reversed =
      !reverse || typeof reverse === "boolean" ? reverse : reverse[queryName];
    const marginDirection = reversed ? "right" : "left";

    return ({ gap }) => css`
    margin-top: calc(-1 * ${gap[gapProp]})!important;
    margin-${marginDirection}: calc(-1 * ${gap[gapProp]})!important;

    & > * {
      margin-top: ${gap[gapProp]}!important;
      margin-${marginDirection}: ${gap[gapProp]}!important;
    }
  `;
  };

export interface ClusterProps extends Omit<BoxProps, "display"> {
  /**
   * Reverses the direction of your cluster so that it lays out right-to-left
   *
   * @default false
   */
  readonly reverse?: ResponsiveProp<boolean>;
  /**
   * Sets a vertical and horizontal gap between the child elements in the
   * cluster using the "gap" token in your theme
   */
  readonly gap?: ResponsiveProp<
    Extract<keyof DashTokens["gap"], string | number>
  >;
}

/* istanbul ignore next */
if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
  Cluster.displayName = "Cluster";
}
