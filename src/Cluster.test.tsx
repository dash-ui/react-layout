/* jest */
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {renderMq, mediaQueries} from 'test-utils'
import {Cluster} from './cluster'

describe('<Cluster> without media queries', () => {
  it('applies default styles', () => {
    render(<Cluster data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('display', 'flex')
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-wrap', 'wrap')
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'justify-content',
      'flex-start'
    )
  })

  it('applies the "gap" prop', () => {
    render(<Cluster gap={1} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))!important'
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'calc(-1 * var(--gap-1))!important'
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    render(<Cluster reverse gap={1} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))!important'
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'calc(-1 * var(--gap-1))!important'
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
  })

  it('applies the "reverse" prop', () => {
    render(<Cluster reverse data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'flex-direction',
      'row-reverse'
    )
  })
})

describe('<Cluster> with media queries', () => {
  it('applies the "gap" prop', () => {
    renderMq(<Cluster gap={{phone: 1}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as a boolean', () => {
    renderMq(<Cluster gap={{phone: 1}} reverse data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as a media query', () => {
    renderMq(
      <Cluster gap={{phone: 1}} reverse={{phone: true}} data-testid='el' />
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as an unmatching media query', () => {
    renderMq(
      <Cluster gap={{phone: 1}} reverse={{tablet: true}} data-testid='el' />
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "reverse" prop', () => {
    renderMq(<Cluster reverse={{phone: true}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'flex-direction',
      'row-reverse',
      {
        media: mediaQueries.phone,
      }
    )
  })
})
