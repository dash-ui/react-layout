/* jest */
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {renderMq, mediaQueries} from 'test-utils'
import {FlexItem} from './flex-item'

describe('<FlexItem> without media queries', () => {
  it('applies the "align" prop', () => {
    render(<FlexItem align='center' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('align-self', 'center')
  })

  it('applies the "maxWidth" prop', () => {
    render(<FlexItem maxWidth={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-width', '100px')
  })

  it('applies the "maxHeight" prop', () => {
    render(<FlexItem maxHeight={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-height', '100px')
  })

  it('applies the "basis" prop', () => {
    render(<FlexItem basis={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-basis', '100px')
  })

  it('applies the "grow" prop', () => {
    render(<FlexItem grow={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-grow', '100')
  })

  it('applies the "grow" prop w/ boolean', () => {
    render(<FlexItem grow data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-grow', '1')
  })

  it('applies the "shrink" prop', () => {
    render(<FlexItem shrink={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-shrink', '100')
  })

  it('applies the "shrink" prop w/ boolean', () => {
    render(<FlexItem shrink data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-shrink', '1')
  })

  it('applies the "order" prop', () => {
    render(<FlexItem order={1} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('order', '1')
  })
})

describe('<FlexItem> with media queries', () => {
  const mq = {media: mediaQueries.phone}

  it('applies the "align" prop', () => {
    renderMq(<FlexItem align={{phone: 'center'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('align-self', 'center', mq)
  })

  it('applies the "maxWidth" prop', () => {
    renderMq(<FlexItem maxWidth={{phone: 100}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-width', '100px', mq)
  })

  it('applies the "maxHeight" prop', () => {
    renderMq(<FlexItem maxHeight={{phone: 100}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-height', '100px', mq)
  })

  it('applies the "basis" prop', () => {
    renderMq(<FlexItem basis={{phone: 100}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-basis', '100px', mq)
  })

  it('applies the "grow" prop', () => {
    renderMq(<FlexItem grow={{phone: 100}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-grow', '100', mq)
  })

  it('applies the "grow" prop w/ true value', () => {
    renderMq(<FlexItem grow={{phone: true}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-grow', '1', mq)
  })

  it('applies the "grow" prop w/ false value', () => {
    renderMq(<FlexItem grow={{phone: false}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-grow', '0', mq)
  })

  it('applies the "shrink" prop', () => {
    renderMq(<FlexItem shrink={{phone: 100}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-shrink', '100', mq)
  })

  it('applies the "shrink" prop w/ true value', () => {
    renderMq(<FlexItem shrink={{phone: true}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-shrink', '1', mq)
  })

  it('applies the "shrink" prop w/ false value', () => {
    renderMq(<FlexItem shrink={{phone: false}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('flex-shrink', '0', mq)
  })

  it('applies the "order" prop', () => {
    renderMq(<FlexItem order={{phone: 1}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('order', '1', mq)
  })
})
