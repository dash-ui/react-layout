/* jest */
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {renderMq, mediaQueries} from 'test-utils'
import {Column} from './Column'

describe('<Column> without media queries', () => {
  it('applies default styles', () => {
    render(<Column data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('display', 'flex')
  })

  it('applies the "gap" prop', () => {
    render(<Column gap={1} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>* + *',
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    render(<Column gap={1} reverse data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-bottom',
      'var(--gap-1)!important',
      {
        target: '>* + *',
      }
    )
  })

  it('applies the "reverse" prop', () => {
    render(<Column reverse data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'flex-direction',
      'column-reverse'
    )
  })

  it('applies the "align" prop', () => {
    render(<Column align='center' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distribute" prop', () => {
    render(<Column distribute='center' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'justify-content',
      'center'
    )
  })
})

describe('<Column> with media queries', () => {
  it('applies the "gap" prop', () => {
    renderMq(<Column gap={{phone: 1}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>* + *',
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    renderMq(<Column gap={{phone: 1}} reverse data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'margin-bottom',
      'var(--gap-1)!important',
      {
        target: '>* + *',
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "reverse" prop', () => {
    renderMq(<Column reverse={{phone: true}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'flex-direction',
      'column-reverse',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "align" prop', () => {
    renderMq(<Column align={{phone: 'center'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('align-items', 'center', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "distribute" prop', () => {
    renderMq(<Column distribute={{phone: 'center'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'justify-content',
      'center',
      {
        media: mediaQueries.phone,
      }
    )
  })
})
