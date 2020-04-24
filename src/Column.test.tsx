/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Column} from './Column'
import {renderMq, mediaQueries} from 'test-utils'

describe('<Column> without media queries', () => {
  it('applies default styles', () => {
    const {getByTestId} = render(<Column data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'flex')
  })

  it('applies the "gap" prop', () => {
    const {getByTestId} = render(<Column gap={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>* + *',
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    const {getByTestId} = render(<Column gap={1} reverse data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-bottom',
      'var(--gap-1)!important',
      {
        target: '>* + *',
      }
    )
  })

  it('applies the "reverse" prop', () => {
    const {getByTestId} = render(<Column reverse data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'flex-direction',
      'column-reverse'
    )
  })

  it('applies the "align" prop', () => {
    const {getByTestId} = render(<Column align="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distribute" prop', () => {
    const {getByTestId} = render(
      <Column distribute="center" data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'center')
  })
})

describe('<Column> with media queries', () => {
  it('applies the "gap" prop', () => {
    const {getByTestId} = renderMq(<Column gap={{phone: 1}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>* + *',
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    const {getByTestId} = renderMq(
      <Column gap={{phone: 1}} reverse data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-bottom',
      'var(--gap-1)!important',
      {
        target: '>* + *',
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "reverse" prop', () => {
    const {getByTestId} = renderMq(
      <Column reverse={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'flex-direction',
      'column-reverse',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "align" prop', () => {
    const {getByTestId} = renderMq(
      <Column align={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('align-items', 'center', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "distribute" prop', () => {
    const {getByTestId} = renderMq(
      <Column distribute={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'center', {
      media: mediaQueries.phone,
    })
  })
})
