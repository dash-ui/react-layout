# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.8.0](https://github.com/dash-ui/react-layout/compare/v0.7.1...v0.8.0) (2020-08-09)

### ⚠ BREAKING CHANGES

- `useLayout()` has been removed and `useResponsiveStyles()` has been added

- update @dash-ui/responsive ([fd68ff6](https://github.com/dash-ui/react-layout/commit/fd68ff620189dfc4f456676a3b429b43153095e5))

### [0.7.1](https://github.com/dash-ui/react-layout/compare/v0.7.0...v0.7.1) (2020-08-01)

## [0.7.0](https://github.com/dash-ui/react-layout/compare/v0.6.0...v0.7.0) (2020-07-31)

### ⚠ BREAKING CHANGES

- The LayoutContext value has been changed and several types have been updated

### Bug Fixes

- **layout:** responsive props should always accept a "default" property ([6f29c2f](https://github.com/dash-ui/react-layout/commit/6f29c2f349f3ab534824b28b21908f8ab37bee92))

* replace mq() with @dash-ui/responsive ([cb6d3e8](https://github.com/dash-ui/react-layout/commit/cb6d3e8c6629bbb5666374cd0497e88813861966))

### [0.6.1](https://github.com/dash-ui/react-layout/compare/v0.6.0...v0.6.1) (2020-07-27)

### Bug Fixes

- **layout:** responsive props should always accept a "default" property ([6f29c2f](https://github.com/dash-ui/react-layout/commit/6f29c2f349f3ab534824b28b21908f8ab37bee92))

## [0.6.0](https://github.com/dash-ui/react-layout/compare/v0.5.2...v0.6.0) (2020-07-27)

### ⚠ BREAKING CHANGES

- Drops support for @dash-ui/styles@<0.8.0

- rename "variables" to "tokens" ([1b2c23c](https://github.com/dash-ui/react-layout/commit/1b2c23cbabf96112647ad6f78a1ead9555f27a29))

### [0.5.2](https://github.com/dash-ui/react-layout/compare/v0.5.0...v0.5.2) (2020-07-24)

### Bug Fixes

- **utils:** fix forwardRefAs ref type ([b99eadf](https://github.com/dash-ui/react-layout/commit/b99eadfadf808e5280fab2bc390a538301af18fb))

### [0.5.1](https://github.com/dash-ui/react-layout/compare/v0.5.0...v0.5.1) (2020-07-24)

### Bug Fixes

- **utils:** fix forwardRefAs ref type ([b99eadf](https://github.com/dash-ui/react-layout/commit/b99eadfadf808e5280fab2bc390a538301af18fb))

## [0.5.0](https://github.com/dash-ui/react-layout/compare/v0.4.0...v0.5.0) (2020-07-24)

### ⚠ BREAKING CHANGES

- **layoutcontext:** The `one()` function has been replaced with `cls()` and no longer needs to be
  called in order to return a class name
- **layout.tsx:** Custom `styles()` instances must be provided directly to the `<LayoutProvider>`, as
  `@dash-ui/react` is no longer used

### Features

- **utils:** add forwardRefAs utility ([c8e31fa](https://github.com/dash-ui/react-layout/commit/c8e31fac5c1c34bdebf1fa08ae41016bb5afcfb4))

* **layout.tsx:** remove @dash-ui/react dependency ([541af58](https://github.com/dash-ui/react-layout/commit/541af585650d332b9edcbac03f5fb72f471d3d0e))
* **layoutcontext:** replace "one" with "cls" in context ([7213be9](https://github.com/dash-ui/react-layout/commit/7213be99774e78ba61b889e262c441bf1e551063))

## [0.4.0](https://github.com/dash-ui/react-layout/compare/v0.3.0...v0.4.0) (2020-07-16)

### ⚠ BREAKING CHANGES

- **deps-dev:** Must be used with @dash-ui/styles@>=0.6.0 now

- **deps-dev:** upgrade @dash-ui/styles to 0.6.1 ([9c93ed3](https://github.com/dash-ui/react-layout/commit/9c93ed34585cc5d2244031e7ccbb841dac5d8f74))

## 0.3.0 (2020-07-04)
