## [0.9.3](https://github.com/dash-ui/react-layout/compare/v0.9.2...v0.9.3) (2021-10-03)

### Bug Fixes

- fix type errors ([4926481](https://github.com/dash-ui/react-layout/commit/4926481fef8abc81c34f58589b6b9628ed34b544))

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.9.2](https://github.com/dash-ui/react-layout/compare/v0.9.1...v0.9.2) (2021-02-16)

### Features

- **box:** add z/inset props ([fd89194](https://github.com/dash-ui/react-layout/commit/fd8919431c515a17c811127d917234ebeff3354e))

### [0.9.1](https://github.com/dash-ui/react-layout/compare/v0.9.0...v0.9.1) (2021-02-16)

### Features

- add more box properties ([0610c90](https://github.com/dash-ui/react-layout/commit/0610c9005ad26a6d533a22d8aa10229ecf6a2040))

## [0.9.0](https://github.com/dash-ui/react-layout/compare/v0.8.5...v0.9.0) (2021-02-15)

### ⚠ BREAKING CHANGES

- Removes `forwardRefAs` util and `AsProp` type

### Features

- upgrade forward-ref-as ([5a9ceab](https://github.com/dash-ui/react-layout/commit/5a9ceab26937dea3ff150da33e07ae1fba618ea0))

### [0.8.5](https://github.com/dash-ui/react-layout/compare/v0.8.4...v0.8.5) (2021-01-01)

### [0.8.4](https://github.com/dash-ui/react-layout/compare/v0.8.3...v0.8.4) (2020-08-20)

### Bug Fixes

- **deps:** upgrade forward-ref-as ([f007b65](https://github.com/dash-ui/react-layout/commit/f007b65df6f63410fbdb43947bd854fa18bf849f))

### [0.8.3](https://github.com/dash-ui/react-layout/compare/v0.8.2...v0.8.3) (2020-08-10)

### Bug Fixes

- **box.tsx:** fix forward ref type ([d69dafe](https://github.com/dash-ui/react-layout/commit/d69dafeca5d717058e16b9e8c865df0393f7d7ba))

### [0.8.2](https://github.com/dash-ui/react-layout/compare/v0.8.1...v0.8.2) (2020-08-09)

### [0.8.1](https://github.com/dash-ui/react-layout/compare/v0.8.0...v0.8.1) (2020-08-09)

### Bug Fixes

- fix memoization for lazy styles ([b081446](https://github.com/dash-ui/react-layout/commit/b08144648725c093f19b154a6ee161b38d01be41))

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
