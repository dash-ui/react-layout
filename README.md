<hr>
<div align="center">
  <h1 align="center">
    @-ui/react-layout
  </h1>
</div>

<p align="center">
  <a href="https://bundlephobia.com/result?p=@-ui/react-layout">
    <img alt="Bundlephobia" src="https://img.shields.io/bundlephobia/minzip/@-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Types" href="https://www.npmjs.com/package/@-ui/react-layout">
    <img alt="Types" src="https://img.shields.io/npm/types/@-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Code coverage report" href="https://codecov.io/gh/dash-ui/react-layout">
    <img alt="Code coverage" src="https://img.shields.io/codecov/c/gh/dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="Build status" href="https://travis-ci.com/dash-ui/react-layout">
    <img alt="Build status" src="https://img.shields.io/travis/com/dash-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/package/@-ui/react-layout">
    <img alt="NPM Version" src="https://img.shields.io/npm/v/@-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
  <a aria-label="License" href="https://jaredlunde.mit-license.org/">
    <img alt="MIT License" src="https://img.shields.io/npm/l/@-ui/react-layout?style=for-the-badge&labelColor=24292e">
  </a>
</p>

<pre align="center">npm i @-ui/react-layout</pre>
<hr>

Awesome layout primitives for React and [dash-ui](https://github.com/dash-ui)

## Quick Start

```jsx harmony
import _ from '@-ui/react-layout'
```

## API

### Components

| Component                         | Description                                                                                                                                                    |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [LayoutProvider](#layoutprovider) | A context provider which is only required if you intend on using media query props or a custom `styles` object created by `@-ui/react` using `styles.create()` |
| [Cluster](#cluster)               |                                                                                                                                                                |
| [Column](#column)                 |                                                                                                                                                                |
| [FlexItem](#flexitem)             |                                                                                                                                                                |
| [Frame](#frame)                   |                                                                                                                                                                |
| [Grid](#grid)                     |                                                                                                                                                                |
| [GridItem](#griditem)             |                                                                                                                                                                |
| [Layer](#layer)                   |                                                                                                                                                                |
| [LayerItem](#layeritem)           |                                                                                                                                                                |
| [Row](#row)                       |                                                                                                                                                                |

### Hooks

| Component               | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| [useLayout](#uselayout) | Consumes the context from [LayoutProvider](#layoutprovider) |

### Styles

These are useful objects for using quick flex styles in media query props

| Component                         | Description |
| --------------------------------- | ----------- |
| [alignContent](#aligncontent)     |             |
| [alignItems](#alignitems)         |             |
| [alignSelf](#alignself)           |             |
| [flexDirection](#flexdirection)   |             |
| [justifyContent](#justifycontent) |             |
| [justifyItems](#justifyitems)     |             |
| [justifySelf](#justifyself)       |             |

---

## Components

### &lt;LayoutProvider&gt;

| Prop | Type | Default | Required? | Description |
| ---- | ---- | ------- | --------- | ----------- |
|      |      |         |           |             |

## Hooks

### useLayout()

Consumes the context from [LayoutProvider](#layoutprovider)

## Styles

### alignItems

An object containing a property map for `align-items` styles

## LICENSE

MIT
