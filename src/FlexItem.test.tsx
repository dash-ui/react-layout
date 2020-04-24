/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {FlexItem} from './FlexItem'
import {renderMq, mediaQueries} from 'test-utils'

describe('<FlexItem> without media queries', () => {
  it('applies the "align" prop', () => {
    const {getByTestId} = render(<FlexItem align="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('align-self', 'center')
  })

  it('applies the "maxWidth" prop', () => {
    const {getByTestId} = render(<FlexItem maxWidth={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('max-width', '100px')
  })

  it('applies the "maxHeight" prop', () => {
    const {getByTestId} = render(<FlexItem maxHeight={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('max-height', '100px')
  })

  it('applies the "basis" prop', () => {
    const {getByTestId} = render(<FlexItem basis={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('basis', '100px')
  })

  it('applies the "grow" prop', () => {
    const {getByTestId} = render(<FlexItem grow={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('flex-grow', '100')
  })

  it('applies the "grow" prop w/ boolean', () => {
    const {getByTestId} = render(<FlexItem grow data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('flex-grow', '1')
  })

  it('applies the "shrink" prop', () => {
    const {getByTestId} = render(<FlexItem shrink={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('flex-shrink', '100')
  })

  it('applies the "shrink" prop w/ boolean', () => {
    const {getByTestId} = render(<FlexItem shrink data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('flex-shrink', '1')
  })

  it('applies the "order" prop', () => {
    const {getByTestId} = render(<FlexItem order={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('order', '1')
  })
})

describe('<FlexItem> with media queries', () => {
  const mq = {media: mediaQueries.phone}

  it('applies the "align" prop', () => {
    const {getByTestId} = renderMq(
      <FlexItem align={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('align-self', 'center', mq)
  })

  it('applies the "maxWidth" prop', () => {
    const {getByTestId} = renderMq(
      <FlexItem maxWidth={{phone: 100}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('max-width', '100px', mq)
  })

  it('applies the "maxHeight" prop', () => {
    const {getByTestId} = renderMq(
      <FlexItem maxHeight={{phone: 100}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('max-height', '100px', mq)
  })

  it('applies the "basis" prop', () => {
    const {getByTestId} = renderMq(
      <FlexItem basis={{phone: 100}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('basis', '100px', mq)
  })

  it('applies the "grow" prop', () => {
    const {getByTestId} = renderMq(
      <FlexItem grow={{phone: 100}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-grow', '100', mq)
  })

  it('applies the "grow" prop w/ true value', () => {
    const {getByTestId} = renderMq(
      <FlexItem grow={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-grow', '1', mq)
  })

  it('applies the "grow" prop w/ false value', () => {
    const {getByTestId} = renderMq(
      <FlexItem grow={{phone: false}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-grow', '0', mq)
  })

  it('applies the "shrink" prop', () => {
    const {getByTestId} = renderMq(
      <FlexItem shrink={{phone: 100}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-shrink', '100', mq)
  })

  it('applies the "shrink" prop w/ true value', () => {
    const {getByTestId} = renderMq(
      <FlexItem shrink={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-shrink', '1', mq)
  })

  it('applies the "shrink" prop w/ false value', () => {
    const {getByTestId} = renderMq(
      <FlexItem shrink={{phone: false}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('flex-shrink', '0', mq)
  })

  it('applies the "order" prop', () => {
    const {getByTestId} = renderMq(
      <FlexItem order={{phone: 1}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('order', '1', mq)
  })
})
