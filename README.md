<hr/>

<img src='https://github.com/dash-ui/styles/raw/main/assets/logo.png'/>

>

```sh
npm i @dash-ui/react-layout
```

<p>
  <a href="https://bundlephobia.com/result?p=@dash-ui/react-layout">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@dash-ui/react-layout">
    <img alt="Types" src="https://img.shields.io/npm/types/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/dash-ui/react-layout">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://github.com/dash-ui/react-layout/actions/workflows/release.yml">
    <img alt="Build status" src="https://img.shields.io/github/workflow/status/dash-ui/react-layout/release/main?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@dash-ui/react-layout">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
</p>

---

## Features

- [x] **Comprehensive** grids, rows, columns, and more.
- [x] **Responsive props** add breakpoint-specific styles to your layout components.
- [x] **CSS variable themes** mean performance is never going to be an issue when
      users switch from light to dark mode.
- [x] **Strong types** even when you use an `as` prop. If it's a button, you're
      going to be limited to `<button>` HTML attributes!
- [x] **Tiny** ([<3.5kB](https://bundlephobia.com/result?p=@dash-ui/react-layout@latest)) as layout primitive libraries go

## Quick start

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-example-3m3rg?file=/src/App.tsx)

```jsx harmony
import * as React from "react";
import { createStyles } from "@dash-ui/styles";
import { LayoutProvider, Box } from "@dash-ui/react-layout";

// These root variable tokens are required in order to access
// all features of @dash-ui/react-layout
const tokens = {
  // "color" is used for the "bg" prop on <Box>
  color: {
    primary: "#ee5b5f",
  },
  // "elevation" is used for the "elevation" prop on <Box>
  // It adds a box shadow to components
  elevation: {
    sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  },
  // "pad" is used for the "pad" prop
  // It adds padding to components
  pad: {
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
  },
  // "gap" is used for the "gap" prop
  // It adds margins between child components
  gap: {
    sm: "0.25rem",
    md: "0.5rem",
    lg: "1rem",
  },
  // "radius" is used for the "radius" prop
  // It adds border-radius to components
  radius: {
    sm: "0.125rem",
    md: "0.25rem",
  },
};

const styles = createStyles({
  tokens,
});

const App = () => (
  <LayoutProvider
    styles={styles}
    mediaQueries={{
      sm: "only screen and (min-width: 0em)",
      md: "only screen and (min-width: 35em)",
      lg: "only screen and (min-width: 80em)",
    }}
  >
    <Component />
  </LayoutProvider>
);

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Box size={300} pad={{ sm: "md", md: "lg" }}>
    Hello world
  </Box>
);
```

## API docs

### Components

| Component                             | Description                                                                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [`<LayoutProvider>`](#layoutprovider) | A context provider which is only required if you intend on using responsive props or a custom `styles` instance.       |
| [`<Box>`](#box)                       | A layout component for adding size, padding, position, color, and more using tokens from your CSS variable theme.      |
| [`<Cluster>`](#cluster)               | A row directional layout component that distributes its items in a cluster. Common use cases are tags and input chips. |
| [`<Column>`](#column)                 | A layout component that distributes its items in a column without wrapping or shrinking.                               |
| [`<FlexItem>`](#flexitem)             | A layout component that can add positioning properties to itself inside of a flex container.                           |
| [`<Grid>`](#grid)                     | A layout component that distributes its children in a grid. This an abstraction of CSS grids.                          |
| [`<GridItem>`](#griditem)             | A layout component that can add positioning properties to itself inside of a [`<Grid>`](#grid) component.              |
| [`<Layer>`](#layer)                   | A layout component that is a container for [`<LayerItem>`](#layeritem)s.                                               |
| [`<LayerItem>`](#layeritem)           | A layout component than positions itself absolutely inside of its container in whichever placement you decide.         |
| [`<Row>`](#row)                       | A layout component that distributes its items in a row without wrapping.                                               |

### Hooks

| Component                                       | Description                                                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| [`useResponsiveStyles()`](#useresponsivestyles) | Returns the [responsive `styles`](https://github.com/dash-ui/responsive) used for creating responsive layout props. |

### TypeScript support

`@dash-ui/react-layout` is written in TypeScript. That said, there are some things to know
as it relates to connecting your `DashTokens` and media query types to these layout
components.

|                                                               | Description                                |
| ------------------------------------------------------------- | ------------------------------------------ |
| [Strongly typed media queries](#strongly-typed-media-queries) | Learn how to add types to responsive props |
| [Strongly typed tokens](#strongly-typed-tokens)               | Learn how to add types to your CSS tokens  |

---

## Components

### &lt;LayoutProvider&gt;

A context provider which is only required if you intend on using media query
props or a custom `styles` instance.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-example-3m3rg?file=/src/App.tsx)

```tsx
import * as React from "react";
import { styles } from "@dash-ui/styles";
import { LayoutProvider, Box } from "@dash-ui/react-layout";

const styles = createStyles();

const App = () => (
  <LayoutProvider
    styles={styles}
    mediaQueries={{
      sm: "only screen and (min-width: 0em)",
      md: "only screen and (min-width: 35em)",
      lg: "only screen and (min-width: 80em)",
    }}
  >
    <Component />
  </LayoutProvider>
);

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Box size={300} pad={{ sm: "md", md: "lg" }}>
    Hello world
  </Box>
);
```

#### Props

| Prop         | Type                             | Default  | Required? | Description                                                                                                                                                        |
| ------------ | -------------------------------- | -------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| styles       | `Styles<DashTokens, DashThemes>` | `styles` | No        | The `styles` instance you're using to create styles. By default this is the `styles` instance exported from [`@dash-ui/styles`](https://github.com/dash-ui/styles) |
| mediaQueries | `Record<string, string>`         |          | No        | A mapping of name/media query pairs. This is only required if youre' using responsive props.                                                                       |

### &lt;Box&gt;

A layout component for adding size, padding, position, color, and more using tokens
from your CSS variable theme.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-box-example-tpsky?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Box } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Box size={300} pad={{ sm: "md", md: "lg" }}>
    Hello world
  </Box>
);
```

#### Props

| Name      | Type                                                                                       | Required? | Description                                                                                                                                                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| display   | `ResponsiveProp<'flex' \| 'inlineFlex' \| 'block' \| 'inlineBlock' \| 'inline' \| 'none'>` | No        | Sets a `display` CSS property on your component.                                                                                                                                                                                                                                  |
| position  | `ResponsiveProp<'relative' \| 'absolute' \| 'sticky' \| 'fixed'>`                          | No        | Sets a `position` CSS property on your component.                                                                                                                                                                                                                                 |
| width     | `ResponsiveProp<number \| string>`                                                         | No        | Sets a `width` CSS property on your component.                                                                                                                                                                                                                                    |
| height    | `ResponsiveProp<number \| string>`                                                         | No        | Sets a `height` CSS property on your component.                                                                                                                                                                                                                                   |
| size      | `ResponsiveProp<number \| string>`                                                         | No        | Sets a `size` CSS property on your component.                                                                                                                                                                                                                                     |
| pad       | `ResponsiveProp<keyof DashTokens['pad'] \| (keyof DashTokens['pad'])[]>`                   | No        | Sets a `padding` CSS property on your component using the "pad" token in your theme. When this is an array padding will be joined in the same order as the `padding` CSS property i.e. `['sm', 'md']` would be `padding: var(--pad-sm) var(--pad-md)`.                            |
| bg        | `ResponsiveProp<keyof DashTokens['color']>`                                                | No        | Sets a `background-color` CSS property on your component using the "color" token in your theme.                                                                                                                                                                                   |
| elevation | `ResponsiveProp<keyof DashTokens['elevation']>`                                            | No        | Sets a `box-shadow` CSS property on your component using the "elevation" token in your theme.                                                                                                                                                                                     |
| radius    | `ResponsiveProp<keyof DashTokens['radius'] \| (keyof DashTokens['radius'])[]>`             | No        | Sets a `border-radius` CSS property on your component using the "radius" token in your theme. When this is an array padding will be joined in the same order as the `border-radius` CSS property i.e. `['sm', 'md']` would be `border-radius: var(--radius-sm) var(--radius-md)`. |
| className | `string \| string[]`                                                                       | No        | Adds one or several class names to your component.                                                                                                                                                                                                                                |

### &lt;Cluster&gt;

A row directional layout component that distributes its items in
a cluster. Common use cases are tags and input chips.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-cluster-example-y0p5c?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Cluster, Box } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Cluster width={{ sm: "100%", md: 400 }} gap={{ sm: "sm", md: "md" }}>
    <Box bg="primary" width={100} height={24} radius="md" />
    <Box bg="primary" width={140} height={24} radius="md" />
    <Box bg="primary" width={80} height={24} radius="md" />
    <Box bg="primary" width={90} height={24} radius="md" />
  </Cluster>
);
```

#### Props

> 🔆 In addition to the props below, `<Row>` inherits all props from [`<Box>`](#box).

| Name    | Type                                      | Required? | Description                                                                                                       |
| ------- | ----------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------- |
| gap     | `ResponsiveProp<keyof DashTokens['gap']>` | No        | Sets a vertical and horizontal gap between the child elements in the cluster using the "gap" token in your theme. |
| reverse | `ResponsiveProp<boolean>`                 | No        | Reverses the direction of your cluster so that it lays out right-to-left.                                         |

### &lt;Column&gt;

A layout component that distributes its items in a column without wrapping
or shrinking.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-column-example-e81yl?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Column, Box } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Column width="100%" gap={{ sm: "sm", md: "md" }}>
    <Box bg="primary" height={100} width="100%" radius="md" />
    <Box bg="primary" height={140} width="100%" radius="md" />
    <Box bg="primary" height={80} width="100%" radius="md" />
    <Box bg="primary" height={90} width="100%" radius="md" />
  </Column>
);
```

#### Props

> 🔆 In addition to the props below, `<Column>` inherits all props from [`<Box>`](#box).

| Name    | Type                                      | Required? | Description                                                                         |
| ------- | ----------------------------------------- | --------- | ----------------------------------------------------------------------------------- |
| gap     | `ResponsiveProp<keyof DashTokens['gap']>` | No        | Sets a vertical gap between its child elements using the "gap" token in your theme. |
| reverse | `ResponsiveProp<boolean>`                 | No        | Reverses the direction of the column to bottom-to-top                               |

### &lt;FlexItem&gt;

A layout component that can add positioning properties to itself inside of
a flex container.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-flexitem-example-mbmu2?file=/src/App.tsx)

```tsx
import * as React from "react";
import { FlexItem, Box, Row } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Row align="start" width="100%" gap={{ sm: "sm", md: "md" }}>
    {/* This item will be aligned in the center */}
    <FlexItem
      align="center"
      bg="primary"
      width={100}
      height={120}
      radius="md"
    />
    {/* These will both align at flex-start */}
    <Box bg="primary" width={140} height={140} radius="md" />
    <Box bg="primary" width={80} height={124} radius="md" />
  </Row>
);
```

#### Props

> 🔆 In addition to the props below, `<FlexItem>` inherits all props from [`<Box>`](#box).

| Name      | Type                                                                      | Required? | Description                                          |
| --------- | ------------------------------------------------------------------------- | --------- | ---------------------------------------------------- |
| align     | `ResponsiveProp<'start' \| 'end' \| 'center' \| 'baseline' \| 'stretch'>` | No        | Sets a `align-self` CSS property on your component.  |
| basis     | `ResponsiveProp<number \| string>`                                        | No        | Sets a `flex-basis` CSS property on your component.  |
| grow      | `ResponsiveProp<boolean \| number>`                                       | No        | Sets a `flex-grow` CSS property on your component.   |
| maxWidth  | `ResponsiveProp<number \| string>`                                        | No        | Sets a `max-width` CSS property on your component.   |
| maxHeight | `ResponsiveProp<number \| string>`                                        | No        | Sets a `max-height` CSS property on your component.  |
| order     | `ResponsiveProp<number>`                                                  | No        | Sets a `order` CSS property on your component.       |
| shrink    | `ResponsiveProp<boolean \| number>`                                       | No        | Sets a `flex-shrink` CSS property on your component. |

### &lt;Grid&gt;

A layout component that distributes its children in a grid. This an abstraction
of CSS grids.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-grid-example-okqnz?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Grid, Box } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Grid cols={3} rows={3} gap={{ sm: "sm", md: "md" }}>
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
    <Box bg="primary" height={100} radius="md" />
  </Grid>
);
```

#### Props

> 🔆 In addition to the props below, `<Grid>` inherits all props from [`<Box>`](#box),
> omitting `display` which is always `"grid"`.

| Name        | Type                                                                                             | Required? | Description                                                                                                   |
| ----------- | ------------------------------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------- |
| alignX      | `ResponsiveProp<'start' \| 'center' \| 'end' \| 'stretch'>`                                      | No        | Sets a `justify-items` CSS property on your component.                                                        |
| alignY      | `ResponsiveProp<'start' \| 'center' \| 'end' \| 'stretch'>`                                      | No        | Sets a `align-items` CSS property on your component.                                                          |
| cols        | `ResponsiveProp<number \| (number \| string)[]>`                                                 | No        | Sets a `grid-template-columns` CSS property on your component.                                                |
| distributeX | `ResponsiveProp<'start' \| 'center' \| 'end' \| 'stretch' \| 'around' \| 'between' \| 'evenly'>` | No        | Sets a `justify-content` CSS property on your component.                                                      |
| distributeY | `ResponsiveProp<'start' \| 'center' \| 'end' \| 'stretch' \| 'around' \| 'between' \| 'evenly'>` | No        | Sets a `align-content` CSS property on your component.                                                        |
| gap         | [`ResponsiveProp<GapProp>`](#gapprop)                                                            | No        | Sets a horizontal and vertical gap between the child elements in the row using the "gap" token in your theme. |
| inline      | `ResponsiveProp<boolean>`                                                                        | No        | Makes the component display as an `inline-grid` rather than `grid`.                                           |
| rows        | `ResponsiveProp<number \| (number \| string)[]>`                                                 | No        | Sets a `grid-template-rows` CSS property on your component.                                                   |

#### GapProp

```typescript
type GapProp =
  | keyof DashTokens["gap"]
  | [keyof DashTokens["gap"], keyof DashTokens["gap"]];
```

### &lt;GridItem&gt;

A layout component that can add positioning properties to itself inside of
a [`<Grid>`](#grid) component.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-griditem-example-c1tc7?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Grid, GridItem, Box } from "@dash-ui/react-layout";

const Component = () => (
  <Grid cols={3} rows={[100, 100]} gap={{ sm: "sm", md: "md" }}>
    {/* This item spans 3 columns */}
    <GridItem bg="primary" colStart={1} colEnd={4} radius="md" />
    <Box bg="primary" radius="md" />
    <Box bg="primary" radius="md" />
    <Box bg="primary" radius="md" />
  </Grid>
);
```

#### Props

> 🔆 In addition to the props below, `<GridItem>` inherits all props from [`<Box>`](#box).

| Name     | Type                                                        | Required? | Description                                                |
| -------- | ----------------------------------------------------------- | --------- | ---------------------------------------------------------- |
| alignX   | `ResponsiveProp<'start' \| 'center' \| 'end' \| 'stretch'>` | No        | Sets a `justify-self` CSS property on your component.      |
| alignY   | `ResponsiveProp<'start' \| 'center' \| 'end' \| 'stretch'>` | No        | Sets a `align-self` CSS property on your component.        |
| colStart | `ResponsiveProp<number \| string>`                          | No        | Sets a `grid-column-start` CSS property on your component. |
| colEnd   | `ResponsiveProp<number \| string>`                          | No        | Sets a `grid-column-end` CSS property on your component.   |
| rowStart | `ResponsiveProp<number \| string>`                          | No        | Sets a `grid-row-start` CSS property on your component.    |
| rowEnd   | `ResponsiveProp<number \| string>`                          | No        | Sets a `grid-row-end` CSS property on your component.      |

### &lt;Layer&gt;

A layout component that is a container for [`<LayerItem>`](#layeritem)s.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-layer-and-layeritem-example-we2by?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Layer, LayerItem } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Layer width={600} height={600}>
    <LayerItem placement="bottomRight" bg="primary" size={64} radius="md" />
    <LayerItem placement="topLeft" bg="primary" size={64} radius="md" />
  </Layer>
);
```

#### Props

> 🔆 `<Layer>` inherits all of its props from [`<Box>`](#box),
> omitting `position` which is always `"relative"`.

### &lt;LayerItem&gt;

A layout component than positions itself absolutely inside of its container
in whichever placement you decide.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-layer-and-layeritem-example-we2by?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Layer, LayerItem } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Layer width={400} height={400}>
    <LayerItem placement="bottomRight" bg="primary" size={64} radius="md" />
    <LayerItem placement="topLeft" bg="primary" size={64} radius="md" />
  </Layer>
);
```

#### Props

> 🔆 In addition to the props below, `<LayerItem>` inherits all props from [`<Box>`](#box).

| Name      | Type                                        | Required? | Description                                                                                       |
| --------- | ------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------- |
| offset    | `ResponsiveProp<number \| string>`          | No        | Sets a `margin` between the edges of the layer item's container.                                  |
| placement | [`ResponsiveProp<Placements>`](#placements) | Yes       | Sets the placement of your layer item relative to its container. See [`Placements`](#placements). |
| z         | `ResponsiveProp<number>`                    | No        | Sets a `z-index` CSS property on your component.                                                  |

#### Placements

```typescript
type Placements =
  | "top"
  | "right"
  | "bottom"
  | "left"
  | "center"
  | "topLeft"
  | "topRight"
  | "bottomRight"
  | "bottomLeft";
```

### &lt;Row&gt;

A layout component that distributes its items in a row without wrapping
or shrinking.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-row-example-ysvex?file=/src/App.tsx)

```tsx
import * as React from "react";
import { Row, Box } from "@dash-ui/react-layout";

const Component = () => (
  // Responsive props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Row width="100%" gap={{ sm: "sm", md: "md" }}>
    <Box bg="primary" width={100} height={120} radius="md" />
    <Box bg="primary" width={140} height={140} radius="md" />
    <Box bg="primary" width={80} height={124} radius="md" />
    <Box bg="primary" width={90} height={96} radius="md" />
  </Row>
);
```

#### Props

> 🔆 In addition to the props below, `<Row>` inherits all props from [`<Box>`](#box).

| Name    | Type                                      | Required? | Description                                                                           |
| ------- | ----------------------------------------- | --------- | ------------------------------------------------------------------------------------- |
| gap     | `ResponsiveProp<keyof DashTokens['gap']>` | No        | Sets a horizontal gap between its child elements using the "gap" token in your theme. |
| reverse | `ResponsiveProp<boolean>`                 | No        | Reverses the direction of the column to right-to-left                                 |

## Hooks

### useResponsiveStyles()

Returns the [responsive `styles`](https://github.com/dash-ui/responsive)
used for creating responsive layout props.

#### Returns

```typescript
// See https://github.com/dash-ui/responsive
ResponsiveStyles<DashTokens, MediaQueries, DashThemeNames>
```

## TypeScript Support

### Strongly typed media queries

To use media query types with `@dash-ui/react-layout`, you have to use the module declaration
pattern:

[Play with this example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-example-3m3rg?file=/src/App.tsx)

```typescript
const mediaQueries = {
  sm: "only screen and (min-width: 0em)",
  md: "only screen and (min-width: 35em)",
  lg: "only screen and (min-width: 80em)",
} as const;

type AppMediaQueries = typeof mediaQueries;

declare module "@dash-ui/react-layout" {
  export interface MediaQueries extends AppMediaQueries {}
}

// OR alternatively
declare module "@dash-ui/react-layout" {
  export interface MediaQueries {
    sm: string;
    md: string;
    lg: string;
  }
}
```

### Strongly typed tokens

To use variable types with `@dash-ui/react-layout`, you have to use the module declaration
pattern:

[Play with this example on **CodeSandbox**](https://codesandbox.io/s/dash-uistyles-strongly-typed-tokens-example-2-yk9bc?file=/src/App.tsx)

```typescript
const tokens = {
  color: {
    red: "#c17",
  },
};

type AppTokens = typeof tokens;

declare module "@dash-ui/styles" {
  export interface DashTokens extends AppTokens {}
}

// OR alternatively
declare module "@dash-ui/styles" {
  export interface DashTokens {
    color: {
      red: string;
    };
  }
}
```

## LICENSE

MIT
