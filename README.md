<hr>
<div align="center">
  <br/>
  <br/>
  <img src='https://github.com/dash-ui/styles/raw/master/assets/logo.png'/>
  <br/>
  <br/>
</div>

<p align="center">
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
</p>

<pre align="center">npm i @dash-ui/react-layout</pre>
<hr>

Awesome layout primitives for React and [**dash-ui**](https://github.com/dash-ui/styles)

## Quick Start

```jsx harmony
import _ from '@dash-ui/react-layout'
```

## API

### Components

| Component                         | Description                                                                                                                                                        |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [LayoutProvider](#layoutprovider) | A context provider which is only required if you intend on using media query props or a custom `styles` object created by `@dash-ui/react` using `styles.create()` |
| [Cluster](#cluster)               |                                                                                                                                                                    |
| [Column](#column)                 |                                                                                                                                                                    |
| [FlexItem](#flexitem)             |                                                                                                                                                                    |
| [Box](#frame)                     |                                                                                                                                                                    |
| [Grid](#grid)                     |                                                                                                                                                                    |
| [GridItem](#griditem)             |                                                                                                                                                                    |
| [Layer](#layer)                   |                                                                                                                                                                    |
| [LayerItem](#layeritem)           |                                                                                                                                                                    |
| [Row](#row)                       |                                                                                                                                                                    |

### Hooks

| Component               | Description                                                 |
| ----------------------- | ----------------------------------------------------------- |
| [useLayout](#uselayout) | Consumes the context from [LayoutProvider](#layoutprovider) |

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
