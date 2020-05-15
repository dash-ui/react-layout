/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Row} from './Row'
import {renderMq, mediaQueries} from 'test-utils'

describe('<Row> without media queries', () => {
  it('applies default styles', () => {
    const {getByTestId} = render(<Row data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'flex')
  })

  it('applies the "gap" prop', () => {
    const {getByTestId} = render(<Row gap={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'var(--gap-1)!important',
      {
        target: '>* + *',
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    const {getByTestId} = render(<Row gap={1} reverse data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'var(--gap-1)!important',
      {
        target: '>* + *',
      }
    )
  })

  it('applies the "reverse" prop', () => {
    const {getByTestId} = render(<Row reverse data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('flex-direction', 'row-reverse')
  })

  it('applies the "align" prop', () => {
    const {getByTestId} = render(<Row align="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distribute" prop', () => {
    const {getByTestId} = render(<Row distribute="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'center')
  })
})

describe('<Row> with media queries', () => {
  it('applies the "gap" prop', () => {
    const {getByTestId} = renderMq(<Row gap={{phone: 1}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'var(--gap-1)!important',
      {
        target: '>* + *',
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ "reverse"', () => {
    const {getByTestId} = renderMq(
      <Row gap={{phone: 1}} reverse data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'var(--gap-1)!important',
      {
        target: '>* + *',
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "reverse" prop', () => {
    const {getByTestId} = renderMq(
      <Row reverse={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-direction', 'row-reverse', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "align" prop', () => {
    const {getByTestId} = renderMq(
      <Row align={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('align-items', 'center', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "distribute" prop', () => {
    const {getByTestId} = renderMq(
      <Row distribute={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'center', {
      media: mediaQueries.phone,
    })
  })
})