/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Box} from './Box'
import {silenceErrors, renderMq, mediaQueries} from 'test-utils'

describe('<Box> without media queries', () => {
  it(
    'should throw if media queries are used without <LayoutProvider>',
    silenceErrors(() => {
      expect(() =>
        render(<Box display={{phone: 'block'}} />)
      ).toThrowErrorMatchingSnapshot()
    })
  )

  it('applies the "display" prop', () => {
    const {getByTestId} = render(<Box display="block" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'block')
  })

  it('applies the "position" prop', () => {
    const {getByTestId} = render(<Box position="relative" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('position', 'relative')
  })

  it('applies the "width" prop', () => {
    const {getByTestId} = render(<Box width="100%" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100%')
  })

  it('applies the "width" prop w/ px default', () => {
    const {getByTestId} = render(<Box width={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100px')
  })

  it('applies the "height" prop', () => {
    const {getByTestId} = render(<Box height="100%" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('height', '100%')
  })

  it('applies the "height" prop w/ px default', () => {
    const {getByTestId} = render(<Box height={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('applies the "width" and "height" props together', () => {
    const {getByTestId} = render(
      <Box width={200} height={100} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('width', '200px')
    expect(getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('applies the "size" prop', () => {
    const {getByTestId} = render(<Box size="100%" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100%')
    expect(getByTestId('el')).toHaveStyleRule('height', '100%')
  })

  it('applies the "size" prop w/ px default', () => {
    const {getByTestId} = render(<Box size={100} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('width', '100px')
    expect(getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('grants the "size" prop precedence over "width" and "height"', () => {
    const {getByTestId} = render(
      <Box width="100%" height="100%" size="50%" data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('width', '50%')
    expect(getByTestId('el')).toHaveStyleRule('height', '50%')
  })

  it('applies the "bg" prop', () => {
    const {getByTestId} = render(<Box bg="green" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'background',
      'var(--color-green)'
    )
  })

  it('applies the "pad" prop', () => {
    const {getByTestId} = render(<Box pad={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('padding', 'var(--pad-1)')
  })

  it('applies the "pad" prop w/ array', () => {
    const {getByTestId} = render(<Box pad={[0, 'auto']} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'padding',
      'var(--pad-0) var(--pad-auto)'
    )
  })

  it('applies the "radius" prop', () => {
    const {getByTestId} = render(<Box radius="sm" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm)'
    )
  })

  it('applies the "radius" prop w/ array', () => {
    const {getByTestId} = render(<Box radius={['sm', 'md']} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm) var(--radius-md)'
    )
  })

  it('applies the "elevation" prop', () => {
    const {getByTestId} = render(<Box elevation="low" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-low)'
    )
  })

  it('applies several props', () => {
    const {asFragment, getByTestId} = render(
      <Box
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
    const {getByTestId} = renderMq(<Box display="block" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'block')
  })
})

describe('<Box> with media queries', () => {
  it('applies the "display" prop', () => {
    const {getByTestId} = renderMq(
      <Box display={{phone: 'block'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('display', 'block', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "position" prop', () => {
    const {getByTestId} = renderMq(
      <Box position={{phone: 'relative'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('position', 'relative', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "width" prop', () => {
    const {getByTestId} = renderMq(
      <Box width={{phone: '100%'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('width', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "height" prop', () => {
    const {getByTestId} = renderMq(
      <Box height={{phone: '100%'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('height', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "size" prop', () => {
    const {getByTestId} = renderMq(
      <Box size={{phone: '100%'}} data-testid="el" />
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
      <Box bg={{phone: 'green'}} data-testid="el" />
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
    const {getByTestId} = renderMq(<Box pad={{phone: 1}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('padding', 'var(--pad-1)', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "pad" prop w/ array', () => {
    const {getByTestId} = renderMq(
      <Box pad={{phone: [0, 'auto']}} data-testid="el" />
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
      <Box radius={{phone: 'sm'}} data-testid="el" />
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
      <Box radius={{phone: ['sm', 'md']}} data-testid="el" />
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
      <Box elevation={{phone: 'low'}} data-testid="el" />
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
