/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Cluster} from './Cluster'
import {renderMq, mediaQueries} from 'test-utils'

describe('<Cluster> without media queries', () => {
  it('applies default styles', () => {
    const {getByTestId} = render(<Cluster data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'flex')
    expect(getByTestId('el')).toHaveStyleRule('flex-wrap', 'wrap')
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'flex-start')
  })

  it('applies the "gap" prop', () => {
    const {getByTestId} = render(<Cluster gap={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))!important'
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'calc(-1 * var(--gap-1))!important'
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
    const {getByTestId} = render(<Cluster reverse gap={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))!important'
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-top',
      'calc(-1 * var(--gap-1))!important'
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
    const {getByTestId} = render(<Cluster reverse data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('flex-direction', 'row-reverse')
  })
})

describe('<Cluster> with media queries', () => {
  it('applies the "gap" prop', () => {
    const {getByTestId} = renderMq(
      <Cluster gap={{phone: 1}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as a boolean', () => {
    const {getByTestId} = renderMq(
      <Cluster gap={{phone: 1}} reverse data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as a media query', () => {
    const {getByTestId} = renderMq(
      <Cluster gap={{phone: 1}} reverse={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-right',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "gap" prop w/ the "reverse" prop as an unmatching media query', () => {
    const {getByTestId} = renderMq(
      <Cluster gap={{phone: 1}} reverse={{tablet: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'margin-left',
      'calc(-1 * var(--gap-1))!important',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "reverse" prop', () => {
    const {getByTestId} = renderMq(
      <Cluster reverse={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-direction', 'row-reverse', {
      media: mediaQueries.phone,
    })
  })
})
