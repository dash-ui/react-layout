<hr>
  <br/>
  <img src='https://github.com/dash-ui/styles/raw/master/assets/logo.png'/>
  <blockquote>Awesome layout primitives for React and <a href="https://github.com/dash-ui/styles">dash-ui</a></blockquote>
  
  <pre>npm i @dash-ui/react-layout</pre>
  <br/>
  
  <a href="https://bundlephobia.com/result?p=@dash-ui/react-layout@latest">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@dash-ui/react-layout">
    <img alt="Types" src="https://img.shields.io/npm/types/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/dash-ui/react-layout">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.com/dash-ui/react-layout">
    <img alt="Build status" src="https://img.shields.io/travis/com/dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@dash-ui/react-layout">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
<hr>

## Features

- [x] **Comprehensive** grids, rows, columns, and more.
- [x] **Media query props** add breakpoint-specific styles to your layout components.
- [x] **CSS variable themes** mean performance is never going to be an issue when
      users switch from light to dark mode.
- [x] **Strong types** even when you use an `as` prop. If it's a button, you're
      going to be limited to `<button>` HTML attributes!
- [x] **Tiny** ([<3.5kB](https://bundlephobia.com/result?p=@dash-ui/react-layout@latest)) as layout primitive libraries go

## Quick start

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-example-3m3rg?file=/src/App.tsx)

```jsx harmony
import * as React from 'react'
import {createStyles} from '@dash-ui/styles'
import {LayoutProvider, Box} from '@dash-ui/react-layout'

// These root variable tokens are required in order to access
// all features of @dash-ui/react-layout
const variables = {
  // "color" is used for the "bg" prop on <Box>
  color: {
    primary: '#ee5b5f',
  },
  // "elevation" is used for the "elevation" prop on <Box>
  // It adds a box shadow to components
  elevation: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  },
  // "pad" is used for the "pad" prop
  // It adds padding to components
  pad: {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
  },
  // "gap" is used for the "gap" prop
  // It adds margins between child components
  gap: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  // "radius" is used for the "radius" prop
  // It adds border-radius to components
  radius: {
    sm: '0.125rem',
    md: '0.25rem',
  },
}

const styles = createStyles({
  variables,
})

const App = () => (
  <LayoutProvider
    styles={styles}
    mediaQueries={{
      sm: 'only screen and (min-width: 0em)',
      md: 'only screen and (min-width: 35em)',
      lg: 'only screen and (min-width: 80em)',
    }}
  >
    <Component />
  </LayoutProvider>
)

const Component = () => (
  // Media query props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Box size={300} pad={{sm: 'md', md: 'lg'}}>
    Hello world
  </Box>
)
```

## API docs

### Components

| Component                             | Description                                                                                                            |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| [`<LayoutProvider>`](#layoutprovider) | A context provider which is only required if you intend on using media query props or a custom `styles()` instance.    |
| [`<Box>`](#box)                       | A layout component for adding size, padding, position, color, and more using tokens from your CSS variable theme.      |
| [`<Cluster>`](#cluster)               | A row directional layout component that distributes its items in a cluster. Common use cases are tags and input chips. |
| [`<Column>`](#column)                 | A layout component that distributes its items in a column without wrapping or shrinking.                               |
| [`<FlexItem>`](#flexitem)             | A layout component that can add positioning properties to itself inside of a flex container.                           |
| [`<Grid>`](#grid)                     | A layout component that distributes its children in a grid. This an abstraction of CSS grids.                          |
| [`<GridItem>`](#griditem)             | A layout component that can add positioning properties to itself inside of a [`<Grid>`](#grid) component.              |
| [`<Layer>`](#layer)                   | A layout component that is a container for [`<LayerItem>s`](#layeritem).                                               |
| [`<LayerItem>`](#layeritem)           | A layout component than positions itself absolutely inside of its container in whichever placement you decide.         |
| [`<Row>`](#row)                       | A layout component that distributes its items in a row without wrapping.                                               |

### Hooks

| Component                   | Description                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| [`useLayout()`](#uselayout) | Consumes the context from the nearest [`<LayoutProvider>`](#layoutprovider) and returns it. |

### Utils

| Util                              | Description                                                                                                      |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [`forwardRefAs()`](#forwardrefas) | A wrapper around `React.forwardRef` that allows HTML attributes and prop types to be derived from the `as` prop. |

### TypeScript support

`@dash-ui/react-layout` is written in TypeScript. That said, there are some things to know
as it relates to connecting your `DashVariables` and media query types to these layout
components.

|                                                               | Description                                  |
| ------------------------------------------------------------- | -------------------------------------------- |
| [Strongly typed media queries](#strongly-typed-media-queries) | Learn how to add types to media query props  |
| [Strongly typed variables](#strongly-typed-variables)         | Learn how to add types to your CSS variables |

---

## Components

### &lt;LayoutProvider&gt;

A context provider which is only required if you intend on using media query
props or a custom `styles()` instance.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-example-3m3rg?file=/src/App.tsx)

```tsx
import * as React from 'react'
import {styles} from '@dash-ui/styles'
import {LayoutProvider, Box} from '@dash-ui/react-layout'

const styles = createStyles()

const App = () => (
  <LayoutProvider
    styles={styles}
    mediaQueries={{
      sm: 'only screen and (min-width: 0em)',
      md: 'only screen and (min-width: 35em)',
      lg: 'only screen and (min-width: 80em)',
    }}
  >
    <Component />
  </LayoutProvider>
)

const Component = () => (
  // Media query props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Box size={300} pad={{sm: 'md', md: 'lg'}}>
    Hello world
  </Box>
)
```

#### Props

| Prop         | Type                                    | Default  | Required? | Description                                                                                                                                                            |
| ------------ | --------------------------------------- | -------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| styles       | `Styles<DashVariables, DashThemeNames>` | `styles` | No        | The `styles()` instance you're using to create styles. By default this is the `styles()` instance exported from [`@dash-ui/styles`](https://github.com/dash-ui/styles) |
| mediaQueries | `Record<string, string>`                |          | No        | A mapping of name/media query pairs. This is only required if youre' using media query props.                                                                          |

### &lt;Box&gt;

A layout component for adding size, padding, position, color, and more using tokens
from your CSS variable theme.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-box-example-tpsky?file=/src/App.tsx)

```tsx
import * as React from 'react'
import {Box} from '@dash-ui/react-layout'

const Component = () => (
  // Media query props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Box size={300} pad={{sm: 'md', md: 'lg'}}>
    Hello world
  </Box>
)
```

#### Props

| Name      | Type                                                                               | Required? | Description                                                                                                                                                                                                                                                                       |
| --------- | ---------------------------------------------------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| display   | `MqProp<'flex' \| 'inlineFlex' \| 'block' \| 'inlineBlock' \| 'inline' \| 'none'>` | No        | Sets a `display` CSS property on your component.                                                                                                                                                                                                                                  |
| position  | `MqProp<'relative' \| 'absolute' \| 'sticky' \| 'fixed'>`                          | No        | Sets a `position` CSS property on your component.                                                                                                                                                                                                                                 |
| width     | `MqProp<number \| string>`                                                         | No        | Sets a `width` CSS property on your component.                                                                                                                                                                                                                                    |
| height    | `MqProp<number \| string>`                                                         | No        | Sets a `height` CSS property on your component.                                                                                                                                                                                                                                   |
| size      | `MqProp<number \| string>`                                                         | No        | Sets a `size` CSS property on your component.                                                                                                                                                                                                                                     |
| pad       | `MqProp<keyof DashVariables['pad'] \| (keyof DashVariables['pad'])[]>`             | No        | Sets a `padding` CSS property on your component using the "pad" token in your theme. When this is an array padding will be joined in the same order as the `padding` CSS property i.e. `['sm', 'md']` would be `padding: var(--pad-sm) var(--pad-md)`.                            |
| bg        | `MqProp<keyof DashVariables['color']>`                                             | No        | Sets a `background-color` CSS property on your component using the "color" token in your theme.                                                                                                                                                                                   |
| elevation | `MqProp<keyof DashVariables['elevation']>`                                         | No        | Sets a `box-shadow` CSS property on your component using the "elevation" token in your theme.                                                                                                                                                                                     |
| radius    | `MqProp<keyof DashVariables['radius'] \| (keyof DashVariables['radius'])[]>`       | No        | Sets a `border-radius` CSS property on your component using the "radius" token in your theme. When this is an array padding will be joined in the same order as the `border-radius` CSS property i.e. `['sm', 'md']` would be `border-radius: var(--radius-sm) var(--radius-md)`. |
| className | `string \| string[]`                                                               | No        | Adds one or several class names to your component.                                                                                                                                                                                                                                |

### &lt;Cluster&gt;

A row directional layout component that distributes its items in
a cluster. Common use cases are tags and input chips.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-cluster-example-y0p5c?file=/src/App.tsx)

```tsx
import * as React from 'react'
import {Cluster, Box} from '@dash-ui/react-layout'

const Component = () => (
  // Media query props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Cluster width={{sm: '100%', md: 400}} gap={{sm: 'sm', md: 'md'}}>
    <Box bg='primary' width={100} height={24} radius='md' />
    <Box bg='primary' width={140} height={24} radius='md' />
    <Box bg='primary' width={80} height={24} radius='md' />
    <Box bg='primary' width={90} height={24} radius='md' />
  </Cluster>
)
```

#### Props

> 🔆 In addition to the props below, `<Row>` inherits all props from [`<Box>`](#box).

| Name    | Type                                 | Required? | Description                                                                                                       |
| ------- | ------------------------------------ | --------- | ----------------------------------------------------------------------------------------------------------------- |
| gap     | `MqProp<keyof DashVariables['gap']>` | No        | Sets a vertical and horizontal gap between the child elements in the cluster using the "gap" token in your theme. |
| reverse | `MqProp<boolean>`                    | No        | Reverses the direction of your cluster so that it lays out right-to-left.                                         |

### &lt;Column&gt;

A layout component that distributes its items in a column without wrapping
or shrinking.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-column-example-e81yl?file=/src/App.tsx)

```tsx
import * as React from 'react'
import {Column, Box} from '@dash-ui/react-layout'

const Component = () => (
  // Media query props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Column width='100%' gap={{sm: 'sm', md: 'md'}}>
    <Box bg='primary' height={100} width='100%' radius='md' />
    <Box bg='primary' height={140} width='100%' radius='md' />
    <Box bg='primary' height={80} width='100%' radius='md' />
    <Box bg='primary' height={90} width='100%' radius='md' />
  </Column>
)
```

#### Props

> 🔆 In addition to the props below, `<Column>` inherits all props from [`<Box>`](#box).

| Name    | Type                                 | Required? | Description                                                                         |
| ------- | ------------------------------------ | --------- | ----------------------------------------------------------------------------------- |
| gap     | `MqProp<keyof DashVariables['gap']>` | No        | Sets a vertical gap between its child elements using the "gap" token in your theme. |
| reverse | `MqProp<boolean>`                    | No        | Reverses the direction of the column to bottom-to-top                               |

### &lt;Row&gt;

A layout component that distributes its items in a row without wrapping
or shrinking.

#### Example

[Check out an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-row-example-ysvex?file=/src/App.tsx)

```tsx
import * as React from 'react'
import {Row, Box} from '@dash-ui/react-layout'

const Component = () => (
  // Media query props are opt-in. In order to use them
  // you have to define a "mediaQueries" prop on your
  // <LayoutProvider>
  <Row width='100%' gap={{sm: 'sm', md: 'md'}}>
    <Box bg='primary' width={100} height={120} radius='md' />
    <Box bg='primary' width={140} height={140} radius='md' />
    <Box bg='primary' width={80} height={124} radius='md' />
    <Box bg='primary' width={90} height={96} radius='md' />
  </Row>
)
```

#### Props

> 🔆 In addition to the props below, `<Row>` inherits all props from [`<Box>`](#box).

| Name    | Type                                 | Required? | Description                                                                           |
| ------- | ------------------------------------ | --------- | ------------------------------------------------------------------------------------- |
| gap     | `MqProp<keyof DashVariables['gap']>` | No        | Sets a horizontal gap between its child elements using the "gap" token in your theme. |
| reverse | `MqProp<boolean>`                    | No        | Reverses the direction of the column to right-to-left                                 |

## Hooks

### useLayout()

Consumes the context from [LayoutProvider](#layoutprovider) and returns it.

#### Returns

```typescript
{
  /**
   * The `styles()` instance being used by this provider
   */
  styles: Styles
  /**
   * The media queries being used by this provider
   */
  mediaQueries: MediaQueries
  /**
   * A function that accepts a style value and returns a
   * class name
   */
  cls: (style: StyleValue) => string
  /**
   * A function for adding media query props to components
   */
  mq: Mq
}
```

## Utils

### forwardRefAs()

A wrapper around `React.forwardRef` that allows HTML attributes and prop
types to be derived from the `as` prop.

#### Example

[Play with an example on **CodeSandbox**](https://codesandbox.io/s/dash-uireact-layout-forwardrefas-example-z7f6o?file=/src/App.tsx)

```tsx
import {forwardRefAs} from '@dash-ui/react-layout'

// Forwards `ref` to the underlying button and adds strong
// types for the `as` prop.
const Button = forwardRefAs<ButtonProps, 'button'>(
  ({as: As = 'button', ...props}, ref) => <As ref={ref} {...props} />
)

// ✅ Will pass type checking and autocomplete correctly
<Button as='a' href='https://jaredLunde.com'/>

// ❌ Will fail type checking and not autocomplete "href"
<Button href='#'>
```

#### Arguments

| Name   | Type                                                                                    | Required? | Description                      |
| ------ | --------------------------------------------------------------------------------------- | --------- | -------------------------------- |
| render | `React.RefForwardingComponent<HTMLElement \| SVGElement \| React.ComponentType, Props>` | Yes       | A React ref forwarding component |

## LICENSE

MIT
