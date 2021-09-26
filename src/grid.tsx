import type { DashTokens } from "@dash-ui/styles";
import clsx from "clsx";
import forwardRefAs from "forward-ref-as";
import css from "minify-css.macro";
import * as React from "react";
import { Box } from "./box";
import type { BoxProps } from "./box";
import { useResponsiveStyles } from "./layout";
import type { ResponsiveLazyProp, ResponsiveProp } from "./layout";
import {
  alignContent,
  alignItems,
  alignSelf,
  justifyContent,
  justifyItems,
  justifySelf,
} from "./styles";
import { unit } from "./utils";

/**
 * A layout component that distributes its children in a grid like so:
 *
 * ```
 * ☐ ☐ ☐
 * ☐ ☐ ☐
 * ☐ ☐ ☐
 * ```
 *
 * @example
 * <Grid cols={2} rows={2}>
 *   <GridItem/>
 *   <GridItem/>
 *   <GridItem/>
 *   <GridItem/>
 * </Grid>
 */
export const Grid = forwardRefAs<"div", GridProps>(function Grid(
  {
    className,
    alignX,
    alignY,
    distributeX,
    distributeY,
    cols,
    rows,
    inline,
    gap,
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
          css`
            display: grid;
          `,
          styles(justifyItems).css(alignX),
          styles(alignItems).css(alignY),
          styles(justifyContent).css(distributeX),
          styles(alignContent).css(distributeY),
          inline === void 0 ? "" : styles.lazy(gridStyle).css(inline || false),
          gap === void 0 ? "" : styles.lazy(gapStyle).css(gap)
        ),
        cols === void 0 ? "" : styles.lazy(colsStyle)(cols),
        rows === void 0 ? "" : styles.lazy(rowsStyle)(rows)
      )}
      {...props}
    />
  );
});

/**
 * A layout component that can add positioning properties to itself inside
 * of a `<Grid>` component.
 *
 * @example
 * <Grid cols={2} rows={2}>
 *   // Occupies 2 columns
 *   <GridItem colStart={1} colEnd={2}/>
 *   <GridItem/>
 *   <GridItem/>
 * </Grid>
 */
export const GridItem = forwardRefAs<"div", GridItemProps>(function GridItem(
  { className, alignX, alignY, colStart, colEnd, rowStart, rowEnd, ...props },
  ref
) {
  const styles = useResponsiveStyles();

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        styles.join(
          styles(justifySelf).css(alignX),
          styles(alignSelf).css(alignY),
          colStart === void 0 ? "" : styles.lazy(colStartStyle).css(colStart),
          colEnd === void 0 ? "" : styles.lazy(colEndStyle).css(colEnd),
          rowStart === void 0 ? "" : styles.lazy(rowStartStyle).css(rowStart),
          rowEnd === void 0 ? "" : styles.lazy(rowEndStyle).css(rowEnd)
        )
      )}
      {...props}
    />
  );
});

const gridStyle = (inline: boolean) => ({
  display: inline ? "inline-grid" : "grid",
});

const colsStyle = (cols: number | (number | string)[]) => {
  let value: (number | string)[];
  if (Array.isArray(cols)) value = cols;
  // ie doesn't have repeat
  else value = new Array(cols).fill("1fr");
  return css`
    grid-template-columns: ${value.map((col) => unit(col)).join(" ")};
  `;
};

const rowsStyle = (rows: number | (number | string)[]) => {
  let value: (number | string)[];
  if (Array.isArray(rows)) value = rows;
  // ie doesn't have repeat
  else value = new Array(rows).fill("1fr");
  return css`
    grid-template-rows: ${value.map((row) => unit(row)).join(" ")};
  `;
};

const gapStyle: ResponsiveLazyProp<
  // @ts-expect-error
  | Extract<keyof DashTokens["gap"], number | string>
  | [
      // @ts-expect-error
      Extract<keyof DashTokens["gap"], number | string>,
      // @ts-expect-error
      Extract<keyof DashTokens["gap"], number | string>
    ]
  // @ts-expect-error
> =
  (gapProp: GapProp) =>
  ({ gap }) =>
    css`
      grid-gap: ${Array.isArray(gapProp)
        ? gapProp.map((p) => gap[p]).join(" ")
        : gap[gapProp] + " " + gap[gapProp]};
    `;

const colStartStyle = (gridColumnStart: number | string) => css`
  grid-column-start: ${gridColumnStart};
`;

const colEndStyle = (gridColumnEnd: number | string) => css`
  grid-column-end: ${gridColumnEnd};
`;

const rowStartStyle = (gridRowStart: number | string) => css`
  grid-row-start: ${gridRowStart};
`;

const rowEndStyle = (gridRowEnd: number | string) => css`
  grid-row-end: ${gridRowEnd};
`;

type GapProp =
  // @ts-expect-error
  | Extract<keyof DashTokens["gap"], number | string>
  | [
      // @ts-expect-error
      Extract<keyof DashTokens["gap"], number | string>,
      // @ts-expect-error
      Extract<keyof DashTokens["gap"], number | string>
    ];

export interface GridProps extends Omit<BoxProps, "display"> {
  /**
   * Sets a `justify-items` CSS property on your component
   */
  readonly alignX?: ResponsiveProp<"start" | "center" | "end" | "stretch">;
  /**
   * Sets an `align-items` CSS property on your component
   */
  readonly alignY?: ResponsiveProp<"start" | "center" | "end" | "stretch">;
  /**
   * Sets a `grid-template-columns` CSS property on your component
   */
  readonly cols?: ResponsiveProp<number | (number | string)[]>;
  /**
   * Sets a `justify-content` CSS property on your component
   */
  readonly distributeX?: ResponsiveProp<
    "start" | "center" | "end" | "stretch" | "around" | "between" | "evenly"
  >;
  /**
   * Sets an `align-content` CSS property on your component
   */
  readonly distributeY?: ResponsiveProp<
    "start" | "center" | "end" | "stretch" | "around" | "between" | "evenly"
  >;
  /**
   * Sets a horizontal and vertical gap between the child elements in the row
   * using the "gap" token in your theme
   */
  readonly gap?: ResponsiveProp<GapProp>;
  /**
   * Makes the component display as an `inline-grid` rather than `grid`
   */
  readonly inline?: ResponsiveProp<boolean>;
  /**
   * Sets a `grid-template-rows` CSS property on your component
   */
  readonly rows?: ResponsiveProp<number | (number | string)[]>;
}

export interface GridItemProps extends BoxProps {
  /**
   * Sets a `justify-self` CSS property on your component
   */
  readonly alignX?: ResponsiveProp<"start" | "center" | "end" | "stretch">;
  /**
   * Sets an `align-self` CSS property on your component
   */
  readonly alignY?: ResponsiveProp<"start" | "center" | "end" | "stretch">;
  /**
   * Sets a `grid-column-start` CSS property on your component
   */
  readonly colStart?: ResponsiveProp<number | string>;
  /**
   * Sets a `grid-column-end` CSS property on your component
   */
  readonly colEnd?: ResponsiveProp<number | string>;
  /**
   * Sets a `grid-row-start` CSS property on your component
   */
  readonly rowStart?: ResponsiveProp<number | string>;
  /**
   * Sets a `grid-row-end` CSS property on your component
   */
  readonly rowEnd?: ResponsiveProp<number | string>;
}

/* istanbul ignore next */
if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
  Grid.displayName = "Grid";
  GridItem.displayName = "GridItem";
}
