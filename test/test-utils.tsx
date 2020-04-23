import '@-ui/jest'
import React from 'react'
import {render as renderTest} from '@testing-library/react'
import styles from '@-ui/react'
import {LayoutProvider} from '../src/Layout'
import type {RenderResult, RenderOptions} from '@testing-library/react'

const theme = {
  gap: {
    auto: 'auto',
    0: 0,
    1: '0.25rem',
    2: '0.5rem',
    3: '1rem',
    4: '2rem',
    5: '4rem',
  },
  pad: {
    auto: 'auto',
    0: 0,
    1: '0.125rem',
    2: '0.25rem',
    3: '0.5rem',
    4: '1rem',
    5: '2rem',
    6: '4rem',
  },
  color: {
    blue: 'blue',
    green: 'green',
  },
  elevation: {
    low: 'low',
    high: 'high',
  },
  radius: {
    sm: '0.125rem',
    md: '0.25rem',
  },
}

type Theme = typeof theme
styles.variables(theme)

export const mediaQueries = {
  phone: 'only screen and (min-width: 0em)',
  tablet: 'only screen and (min-width: 35em)',
  desktop: 'only screen and (min-width: 80em)',
}

type ThemeMediaQueries = typeof mediaQueries

declare module '@-ui/react' {
  interface DefaultVars extends Theme {}
}

declare module '../src/Layout' {
  interface MediaQueries extends ThemeMediaQueries {}
}

export const renderMq = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'queries'> & {layoutProps: Record<string, any>}
): RenderResult => {
  return renderTest(ui, {
    ...options,
    // Allows wrapper in children to be applied in addition to our
    // theme wrapper
    wrapper: (props) => (
      <LayoutProvider
        mediaQueries={mediaQueries}
        {...options?.layoutProps}
        {...props}
      />
    ),
  })
}

// Silences React errors when we test exceptions
export const silenceErrors = (test: jest.ProvidesCallback) => (
  ...args: Parameters<jest.ProvidesCallback>
): ReturnType<jest.ProvidesCallback> => {
  const originalError = console.error
  console.error = jest.fn()
  test(...args)
  console.error = originalError
}
