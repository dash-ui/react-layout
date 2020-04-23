/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Frame} from './Frame'
import {silenceErrors, renderMq, mediaQueries} from 'test-utils'

describe('<Frame> without media queries', () => {
  it(
    'should throw if media queries are used without <LayoutProvider>',
    silenceErrors(() => {
      expect(() =>
        render(<Frame display={{phone: 'block'}} />)
      ).toThrowErrorMatchingSnapshot()
    })
  )

  it('applies the "display" prop', () => {
    const {getByTestId} = render(<Frame display="block" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'block')
  })

  it('applies the "position" prop', () => {
    const {getByTestId} = render(<Frame position="relative" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('position', 'relative')
  })

  it('applies the "width" prop', () => {
    const {getByTestId} = render(<Frame width="100%" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100%')
  })

  it('applies the "width" prop w/ px default', () => {
    const {getByTestId} = render(<Frame width={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100px')
  })

  it('applies the "height" prop', () => {
    const {getByTestId} = render(<Frame height="100%" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('height', '100%')
  })

  it('applies the "height" prop w/ px default', () => {
    const {getByTestId} = render(<Frame height={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('applies the "width" and "height" props together', () => {
    const {getByTestId} = render(
      <Frame width={200} height={100} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('width', '200px')
    expect(getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('applies the "size" prop', () => {
    const {getByTestId} = render(<Frame size="100%" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100%')
    expect(getByTestId('el')).toHaveStyleRule('height', '100%')
  })

  it('applies the "size" prop w/ px default', () => {
    const {getByTestId} = render(<Frame size={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100px')
    expect(getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('grants the "size" prop precedence over "width" and "height"', () => {
    const {getByTestId} = render(
      <Frame width="100%" height="100%" size="50%" data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('width', '50%')
    expect(getByTestId('el')).toHaveStyleRule('height', '50%')
  })

  it('applies the "bg" prop', () => {
    const {getByTestId} = render(<Frame bg="green" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'background',
      'var(--color-green)'
    )
  })

  it('applies the "pad" prop', () => {
    const {getByTestId} = render(<Frame pad={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('padding', 'var(--pad-1)')
  })

  it('applies the "pad" prop w/ array', () => {
    const {getByTestId} = render(<Frame pad={[0, 'auto']} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'padding',
      'var(--pad-0) var(--pad-auto)'
    )
  })

  it('applies the "radius" prop', () => {
    const {getByTestId} = render(<Frame radius="sm" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm)'
    )
  })

  it('applies the "radius" prop w/ array', () => {
    const {getByTestId} = render(
      <Frame radius={['sm', 'md']} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm) var(--radius-md)'
    )
  })

  it('applies the "elevation" prop', () => {
    const {getByTestId} = render(<Frame elevation="low" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-low)'
    )
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
        data-testid="el"
      />
    )
    expect(asFragment()).toMatchSnapshot()
    expect(getByTestId('el')).toHaveStyleRule('display', 'block')
    expect(getByTestId('el')).toHaveStyleRule('position', 'absolute')
    expect(getByTestId('el')).toHaveStyleRule('width', '200px')
    expect(getByTestId('el')).toHaveStyleRule('height', '200px')
    expect(getByTestId('el')).toHaveStyleRule('padding', 'var(--pad-3)')
    expect(getByTestId('el')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-high)'
    )
    expect(getByTestId('el')).toHaveStyleRule('background', 'var(--color-blue)')
  })

  it('works inside the <LayoutProvider>', () => {
    const {getByTestId} = renderMq(<Frame display="block" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'block')
  })
})

describe('<Frame> with media queries', () => {
  it('applies the "display" prop', () => {
    const {getByTestId} = renderMq(
      <Frame display={{phone: 'block'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('display', 'block', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "position" prop', () => {
    const {getByTestId} = renderMq(
      <Frame position={{phone: 'relative'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('position', 'relative', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "width" prop', () => {
    const {getByTestId} = renderMq(
      <Frame width={{phone: '100%'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('width', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "height" prop', () => {
    const {getByTestId} = renderMq(
      <Frame height={{phone: '100%'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('height', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "size" prop', () => {
    const {getByTestId} = renderMq(
      <Frame size={{phone: '100%'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('width', '100%', {
      media: mediaQueries.phone,
    })
    expect(getByTestId('el')).toHaveStyleRule('height', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "bg" prop', () => {
    const {getByTestId} = renderMq(
      <Frame bg={{phone: 'green'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'background',
      'var(--color-green)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "pad" prop', () => {
    const {getByTestId} = renderMq(<Frame pad={{phone: 1}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('padding', 'var(--pad-1)', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "pad" prop w/ array', () => {
    const {getByTestId} = renderMq(
      <Frame pad={{phone: [0, 'auto']}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'padding',
      'var(--pad-0) var(--pad-auto)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "radius" prop', () => {
    const {getByTestId} = renderMq(
      <Frame radius={{phone: 'sm'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "radius" prop w/ array', () => {
    const {getByTestId} = renderMq(
      <Frame radius={{phone: ['sm', 'md']}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm) var(--radius-md)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "elevation" prop', () => {
    const {getByTestId} = renderMq(
      <Frame elevation={{phone: 'low'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-low)',
      {
        media: mediaQueries.phone,
      }
    )
  })
})
