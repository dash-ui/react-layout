import type { DashTokens } from "@dash-ui/styles";
import clsx from "clsx";
import forwardRefAs from "forward-ref-as";
import css from "minify-css.macro";
import * as React from "react";
import { useResponsiveStyles } from "./layout";
import type { ResponsiveLazyProp, ResponsiveProp } from "./layout";
import { unit } from "./utils";

/**
 * A layout component for adding size, padding, position, color, and more
 * using tokens from your CSS variable theme.
 *
 * @example
 * <Box size={300} bg={{sm: 'red', md: 'blue'}}/>
 */
export const Box = forwardRefAs<"div", BoxProps>(function Box(
  {
    as: As = "div",
    className,
    display,
    position,
    width,
    maxWidth,
    height,
    maxHeight,
    size,
    pad,
    bg,
    border,
    elevation,
    radius,
    inset,
    z,
    ...props
  },
  ref
) {
  const styles = useResponsiveStyles();

  return (
    <As
      ref={ref}
      className={clsx(
        className,
        styles.join(
          styles(frameStyle).css(display),
          styles(frameStyle).css(position),
          !pad ? "" : styles.lazy(padStyle).css(pad),
          !bg ? "" : styles.lazy(bgStyle).css(bg),
          !border ? "" : styles.lazy(borderStyle).css(border),
          !elevation ? "" : styles.lazy(elevationStyle).css(elevation),
          !radius ? "" : styles.lazy(radiusStyle).css(radius),
          inset === void 0 ? "" : styles.lazy(insetStyle).css(inset),
          z === void 0 ? "" : styles.lazy(zStyle).css(z)
        ),
        // These dynamic styles aren't joined because they're the
        // most likely to be unique. Leaving these types of styles
        // as atomic improves their performance.
        width !== void 0 && styles.lazy(widthStyle)(width),
        maxWidth !== void 0 && styles.lazy(maxWidthStyle)(maxWidth),
        height !== void 0 && styles.lazy(heightStyle)(height),
        maxHeight !== void 0 && styles.lazy(maxHeightStyle)(maxHeight),
        size !== void 0 && styles.lazy(sizeStyle)(size)
      )}
      {...props}
    />
  );
});

const d = "display";
const p = "position";
const frameStyle = {
  flex: css`
    ${d}: flex;
  `,
  inlineFlex: css`
    ${d}: inline-flex;
  `,
  block: css`
    ${d}: block;
  `,
  inlineBlock: css`
    ${d}: inline-block;
  `,
  inline: css`
    ${d}: inline;
  `,
  none: css`
    ${d}: none;
  `,
  relative: css`
    ${p}: relative;
  `,
  absolute: css`
    ${p}: absolute;
  `,
  sticky: css`
    ${p}: sticky;
  `,
  fixed: css`
    ${p}: fixed;
  `,
};

const widthStyle = (width: number | string) => css`
  width: ${unit(width)};
`;
const heightStyle = (height: number | string) => css`
  height: ${unit(height)};
`;

const maxWidthStyle = (maxWidth: number | string) => css`
  max-width: ${unit(maxWidth)};
`;
const maxHeightStyle = (maxHeight: number | string) => css`
  max-height: ${unit(maxHeight)};
`;
const sizeStyle = (size: number | string) => {
  size = unit(size);
  return css`
    width: ${size};
    height: ${size};
  `;
};

const padStyle: ResponsiveLazyProp<
  // @ts-expect-error
  | Extract<keyof DashTokens["pad"], string | number>
  // @ts-expect-error
  | Extract<keyof DashTokens["pad"], string | number>[]
> =
  (padProp) =>
  // @ts-expect-error
  ({ pad }) =>
    css`
      padding: ${Array.isArray(padProp)
        ? padProp.map((k) => pad[k]).join(" ")
        : pad[padProp]};
    `;

const bgStyle: ResponsiveLazyProp<
  Extract<
    // @ts-expect-error
    keyof DashTokens["color"],
    string | number
  >
> =
  (bg) =>
  ({
    // @ts-expect-error
    color,
  }) =>
    css`
      background-color: ${color[bg]};
    `;

const borderStyle: ResponsiveLazyProp<
  [
    // @ts-expect-error
    Extract<keyof DashTokens["borderWidths"], string | number>,
    // @ts-expect-error
    Extract<keyof DashTokens["color"], string | number>
  ]
> =
  ([width, borderColor]) =>
  ({
    // @ts-expect-error
    borderWidth,
    // @ts-expect-error
    color,
  }) =>
    css`
      border-width: ${borderWidth[width]};
      border-style: solid;
      border-color: ${color[borderColor]};
    `;

const elevationStyle: ResponsiveLazyProp<
  Extract<
    // @ts-expect-error
    keyof DashTokens["elevation"],
    string | number
  >
> =
  (elevationProp) =>
  // @ts-expect-error
  ({ elevation }) =>
    css`
      box-shadow: ${elevation[elevationProp]};
    `;
const radiusStyle: ResponsiveLazyProp<
  // @ts-expect-error
  | Extract<keyof DashTokens["radius"], string | number>
  // @ts-expect-error
  | Extract<keyof DashTokens["radius"], string | number>[]
> =
  (radiusProp) =>
  // @ts-expect-error
  ({ radius }) =>
    css`
      border-radius: ${Array.isArray(radiusProp)
        ? radiusProp.map((k) => radius[k]).join(" ")
        : radius[radiusProp]};
    `;

const insetStyle: ResponsiveLazyProp<string | number | (string | number)[]> = (
  value
) => {
  if (Array.isArray(value)) {
    return {
      top: value[0],
      right: value[1] ?? value[0],
      bottom: value[2] ?? value[0],
      left: value[3] ?? value[1] ?? value[0],
    };
  }

  return { top: value, right: value, bottom: value, left: value };
};

const zStyle: ResponsiveLazyProp<
  // @ts-expect-error
  number | Extract<keyof DashTokens["zIndexes"], string | number>
> =
  (value) =>
  // @ts-expect-error
  ({ zIndexes }) =>
    css`
      z-index: ${typeof value === "number" ? value : zIndexes[value]};
    `;

export interface BoxProps {
  /**
   * Adds one or several class names to your component
   */
  readonly className?: string | string[];
  /**
   * Sets a `display` CSS property on your component
   */
  readonly display?: ResponsiveProp<
    "flex" | "inlineFlex" | "block" | "inlineBlock" | "inline" | "none"
  >;
  /**
   * Sets a `position` CSS property on your component
   */
  readonly position?: ResponsiveProp<
    "relative" | "absolute" | "sticky" | "fixed"
  >;
  /**
   * Sets a `width` CSS property on your component
   */
  readonly width?: ResponsiveProp<number | string>;
  /**
   * Sets a `height` CSS property on your component
   */
  readonly height?: ResponsiveProp<number | string>;
  /**
   * Sets a `max-width` CSS property on your component
   */
  readonly maxWidth?: ResponsiveProp<number | string>;
  /**
   * Sets a `max-height` CSS property on your component
   */
  readonly maxHeight?: ResponsiveProp<number | string>;
  /**
   * Sets a `width` and `height` CSS property on your component
   */
  readonly size?: ResponsiveProp<number | string>;
  /**
   * Sets a `padding` CSS property on your component using the "pad"
   * token in your theme
   */
  readonly pad?: ResponsiveProp<
    // @ts-expect-error
    | Extract<keyof DashTokens["pad"], string | number>
    // @ts-expect-error
    | Extract<keyof DashTokens["pad"], string | number>[]
  >;
  /**
   * Sets a `background-color` CSS property on your component using the "color"
   * token in your theme
   */
  readonly border?: ResponsiveProp<
    [
      // @ts-expect-error
      Extract<keyof DashTokens["borderWidth"], string | number>,
      // @ts-expect-error
      Extract<keyof DashTokens["color"], string | number>
    ]
  >;
  /**
   * Sets a `background-color` CSS property on your component using the "color"
   * token in your theme
   */
  readonly bg?: ResponsiveProp<
    // @ts-expect-error
    Extract<keyof DashTokens["color"], string | number>
  >;
  /**
   * Sets a `box-shadow` CSS property on your component using the "elevation"
   * token in your theme
   */
  readonly elevation?: ResponsiveProp<
    // @ts-expect-error
    Extract<keyof DashTokens["elevation"], string | number>
  >;
  /**
   * Sets a `border-radius` CSS property on your component using the "radius"
   * token in your theme
   */
  readonly radius?: ResponsiveProp<
    // @ts-expect-error
    | Extract<keyof DashTokens["radius"], string | number>
    // @ts-expect-error
    | Extract<keyof DashTokens["radius"], string | number>[]
  >;
  /**
   * Sets the top, right, bottom, left position of the element
   */
  inset?: ResponsiveProp<string | number | (string | number)[]>;
  /**
   * Sets a `z-index` CSS property on your component
   */
  z?: ResponsiveProp<
    // @ts-expect-error
    number | Extract<keyof DashTokens["zIndexes"], string | number>
  >;
}

/* istanbul ignore next */
if (typeof process !== "undefined" && process.env.NODE_ENV === "development") {
  Box.displayName = "Box";
}
