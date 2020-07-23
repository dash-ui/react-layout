<hr>
  <br/>
  <img src='https://github.com/dash-ui/styles/raw/master/assets/logo.png'/>
  <blockquote>Awesome layout primitives for React and <a href="https://github.com/dash-ui/styles">dash-ui</a></blockquote>
  
  <pre>npm i @dash-ui/react-layout</pre>
  <br/>
  
  <a href="https://bundlephobia.com/result?p=@dash-ui/react-layout">
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

- [x] Includes all of the most common layout components you'll need to build your app.
      Grids, rows, columns, and more.
- [x] **Media query props** add breakpoint-specific styles to your layout components.
- [x] **CSS variable themes** mean performance is never going to be an issue when
      users switch from light to dark mode.
- [x] **Strong types** even when you use an `as` prop. If it's a button, you're
      going to be limited to `<button>` HTML attributes!
- [x] **Tiny** ([<3.5kB](https://bundlephobia.com/result?p=@dash-ui/react-layout)) as layout primitive libraries go

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

| Component                             | Description                                                                                                                                                        |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [`<LayoutProvider>`](#layoutprovider) | A context provider which is only required if you intend on using media query props or a custom `styles` object created by `@dash-ui/react` using `styles.create()` |
| [`<Cluster>`](#cluster)               |                                                                                                                                                                    |
| [`<Column>`](#column)                 |                                                                                                                                                                    |
| [`<FlexItem>`](#flexitem)             |                                                                                                                                                                    |
| [`<Box>`](#frame)                     |                                                                                                                                                                    |
| [`<Grid>`](#grid)                     |                                                                                                                                                                    |
| [`<GridItem>`](#griditem)             |                                                                                                                                                                    |
| [`<Layer>`](#layer)                   |                                                                                                                                                                    |
| [`<LayerItem>`](#layeritem)           |                                                                                                                                                                    |
| [`<Row>`](#row)                       |                                                                                                                                                                    |

### Hooks

| Component                   | Description                                                             |
| --------------------------- | ----------------------------------------------------------------------- |
| [`useLayout()`](#uselayout) | Consumes the context from the nearest [LayoutProvider](#layoutprovider) |

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

| Prop | Type | Default | Required? | Description |
| ---- | ---- | ------- | --------- | ----------- |
|      |      |         |           |             |

## Hooks

### useLayout()

Consumes the context from [LayoutProvider](#layoutprovider)

## LICENSE

MIT
