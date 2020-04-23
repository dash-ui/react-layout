/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Row} from './Row'
import {renderMq, mediaQueries} from 'test-utils'

describe('<Row> without media queries', () => {
  it('applies default styles', () => {
    const {getByTestId} = render(<Row data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'flex')
    expect(getByTestId('el')).toHaveStyleRule('flex-wrap', 'wrap')
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'flex-start')
  })

  it('applies the "gap" prop', () => {
    const {getByTestId} = render(<Row gap={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))'
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'calc(-1 * var(--gap-1))'
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    const {getByTestId} = render(<Row reverse gap={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))'
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'calc(-1 * var(--gap-1))'
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'var(--gap-1)!important',
      {
        target: '>*',
      }
    )
  })

  it('applies the "reverse" prop', () => {
    const {getByTestId} = render(<Row reverse data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'flex-end')
    expect(getByTestId('el')).toHaveStyleRule('flex-direction', 'row-reverse')
  })
})

describe('<Row> with media queries', () => {
  it('applies the "gap" prop', () => {
    const {getByTestId} = renderMq(<Row gap={{phone: 1}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as a boolean', () => {
    const {getByTestId} = renderMq(
      <Row gap={{phone: 1}} reverse data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as a media query', () => {
    const {getByTestId} = renderMq(
      <Row gap={{phone: 1}} reverse={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as an unmatching media query', () => {
    const {getByTestId} = renderMq(
      <Row gap={{phone: 1}} reverse={{tablet: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "reverse" prop', () => {
    const {getByTestId} = renderMq(
      <Row reverse={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'flex-end', {
      media: mediaQueries.phone,
    })
  })
})
