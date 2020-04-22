/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Frame} from './Frame'
import {renderLayout} from 'test-utils'

describe('<Frame> without media queries', () => {
  it('applies the "display" prop', () => {
    const {getByTestId} = render(<Frame display="block" data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('display', 'block')
  })

  it('applies the "position" prop', () => {
    const {getByTestId} = render(
      <Frame position="relative" data-testid="frame" />
    )
    expect(getByTestId('frame')).toHaveStyleRule('position', 'relative')
  })

  it('applies the "width" prop', () => {
    const {getByTestId} = render(<Frame width="100%" data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('width', '100%')
  })

  it('applies the "width" prop w/ px default', () => {
    const {getByTestId} = render(<Frame width={100} data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('width', '100px')
  })

  it('applies the "height" prop', () => {
    const {getByTestId} = render(<Frame height="100%" data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('height', '100%')
  })

  it('applies the "height" prop w/ px default', () => {
    const {getByTestId} = render(<Frame height={100} data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('height', '100px')
  })

  it('applies the "width" and "height" props together', () => {
    const {getByTestId} = render(
      <Frame width={200} height={100} data-testid="frame" />
    )
    expect(getByTestId('frame')).toHaveStyleRule('width', '200px')
    expect(getByTestId('frame')).toHaveStyleRule('height', '100px')
  })

  it('applies the "size" prop', () => {
    const {getByTestId} = render(<Frame size="100%" data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('width', '100%')
    expect(getByTestId('frame')).toHaveStyleRule('height', '100%')
  })

  it('applies the "size" prop w/ px default', () => {
    const {getByTestId} = render(<Frame size={100} data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('width', '100px')
    expect(getByTestId('frame')).toHaveStyleRule('height', '100px')
  })

  it('grants the "size" prop precedence over "width" and "height"', () => {
    const {getByTestId} = render(
      <Frame width="100%" height="100%" size="50%" data-testid="frame" />
    )
    expect(getByTestId('frame')).toHaveStyleRule('width', '50%')
    expect(getByTestId('frame')).toHaveStyleRule('height', '50%')
  })

  it('applies the "bg" prop', () => {
    const {getByTestId} = render(<Frame bg="green" data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule(
      'background',
      'var(--color-green)'
    )
  })

  it('applies the "pad" prop', () => {
    const {getByTestId} = render(<Frame pad={1} data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('padding', 'var(--pad-1)')
  })

  it('applies the "pad" prop w/ array', () => {
    const {getByTestId} = render(
      <Frame pad={[0, 'auto']} data-testid="frame" />
    )
    expect(getByTestId('frame')).toHaveStyleRule(
      'padding',
      'var(--pad-0) var(--pad-auto)'
    )
  })

  it('applies the "elevation" prop', () => {
    const {getByTestId} = render(<Frame elevation="low" data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-low)'
    )
  })

  it('applies the "hidden" prop', () => {
    const {getByTestId} = render(<Frame hidden data-testid="frame" />)
    expect(getByTestId('frame')).toHaveStyleRule('display', 'none')
    expect(getByTestId('frame').getAttribute('aria-hidden')).toBe('true')
  })

  it('applies several props', () => {
    const {asFragment, getByTestId} = render(
      <Frame
        display="block"
        position="absolute"
        size="200px"
        pad={3}
        elevation="high"
        bg="blue"
        data-testid="frame"
      />
    )
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('frame')).toHaveStyleRule('display', 'block')
    expect(getByTestId('frame')).toHaveStyleRule('position', 'absolute')
    expect(getByTestId('frame')).toHaveStyleRule('width', '200px')
    expect(getByTestId('frame')).toHaveStyleRule('height', '200px')
    expect(getByTestId('frame')).toHaveStyleRule('padding', 'var(--pad-3)')
    expect(getByTestId('frame')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-high)'
    )
    expect(getByTestId('frame')).toHaveStyleRule(
      'background',
      'var(--color-blue)'
    )
  })
})
