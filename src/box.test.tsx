/* jest */
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {renderMq, mediaQueries} from 'test-utils'
import {Box} from './box'

describe('<Box> without media queries', () => {
  it('applies the "display" prop', () => {
    render(<Box display='block' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('display', 'block')
  })

  it('applies the "position" prop', () => {
    render(<Box position='relative' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('position', 'relative')
  })

  it('applies the "width" prop', () => {
    render(<Box width='100%' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '100%')
  })

  it('applies the "width" prop w/ px default', () => {
    render(<Box width={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '100px')
  })

  it('applies the "height" prop', () => {
    render(<Box height='100%' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '100%')
  })

  it('applies the "height" prop w/ px default', () => {
    render(<Box height={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('applies the "width" and "height" props together', () => {
    render(<Box width={200} height={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '200px')
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('applies the "size" prop', () => {
    render(<Box size='100%' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '100%')
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '100%')
  })

  it('applies the "size" prop w/ px default', () => {
    render(<Box size={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '100px')
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '100px')
  })

  it('grants the "size" prop precedence over "width" and "height"', () => {
    render(<Box width='100%' height='100%' size='50%' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '50%')
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '50%')
  })

  it('applies the "max-width" prop', () => {
    render(<Box maxWidth='100%' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-width', '100%')
  })

  it('applies the "max-width" prop w/ px default', () => {
    render(<Box maxWidth={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-width', '100px')
  })

  it('applies the "max-height" prop', () => {
    render(<Box maxHeight='100%' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-height', '100%')
  })

  it('applies the "max-height" prop w/ px default', () => {
    render(<Box maxHeight={100} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('max-height', '100px')
  })

  it('applies the "border" prop w/ px default', () => {
    render(<Box border={['hairline', 'green']} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'border-width',
      'var(--border-width-hairline)'
    )
    expect(screen.getByTestId('el')).toHaveStyleRule('border-style', 'solid')
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'border-color',
      'var(--color-green)'
    )
  })

  it('applies the "bg" prop', () => {
    render(<Box bg='green' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'background-color',
      'var(--color-green)'
    )
  })

  it('applies the "pad" prop', () => {
    render(<Box pad={1} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('padding', 'var(--pad-1)')
  })

  it('applies the "pad" prop w/ array', () => {
    render(<Box pad={[0, 'auto']} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'padding',
      'var(--pad-0) var(--pad-auto)'
    )
  })

  it('applies the "radius" prop', () => {
    render(<Box radius='sm' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm)'
    )
  })

  it('applies the "radius" prop w/ array', () => {
    render(<Box radius={['sm', 'md']} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm) var(--radius-md)'
    )
  })

  it('applies the "elevation" prop', () => {
    render(<Box elevation='low' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-low)'
    )
  })

  it('applies several props', () => {
    const {asFragment} = render(
      <Box
        display='block'
        position='absolute'
        size='200px'
        pad={3}
        elevation='high'
        bg='blue'
        data-testid='el'
      />
    )
    expect(asFragment()).toMatchSnapshot()
    expect(screen.getByTestId('el')).toHaveStyleRule('display', 'block')
    expect(screen.getByTestId('el')).toHaveStyleRule('position', 'absolute')
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '200px')
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '200px')
    expect(screen.getByTestId('el')).toHaveStyleRule('padding', 'var(--pad-3)')
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-high)'
    )
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'background-color',
      'var(--color-blue)'
    )
  })

  it('works inside the <LayoutProvider>', () => {
    renderMq(<Box display='block' data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('display', 'block')
  })
})

describe('<Box> with media queries', () => {
  it('applies the "display" prop', () => {
    renderMq(<Box display={{phone: 'block'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('display', 'block', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "position" prop', () => {
    renderMq(<Box position={{phone: 'relative'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('position', 'relative', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "width" prop', () => {
    renderMq(<Box width={{phone: '100%'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "height" prop', () => {
    renderMq(<Box height={{phone: '100%'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "size" prop', () => {
    renderMq(<Box size={{phone: '100%'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('width', '100%', {
      media: mediaQueries.phone,
    })
    expect(screen.getByTestId('el')).toHaveStyleRule('height', '100%', {
      media: mediaQueries.phone,
    })
  })

  it('applies the "bg" prop', () => {
    renderMq(<Box bg={{phone: 'green'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'background-color',
      'var(--color-green)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "pad" prop', () => {
    renderMq(<Box pad={{phone: 1}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'padding',
      'var(--pad-1)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "pad" prop w/ array', () => {
    renderMq(<Box pad={{phone: [0, 'auto']}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'padding',
      'var(--pad-0) var(--pad-auto)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "radius" prop', () => {
    renderMq(<Box radius={{phone: 'sm'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "radius" prop w/ array', () => {
    renderMq(<Box radius={{phone: ['sm', 'md']}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'border-radius',
      'var(--radius-sm) var(--radius-md)',
      {
        media: mediaQueries.phone,
      }
    )
  })

  it('applies the "elevation" prop', () => {
    renderMq(<Box elevation={{phone: 'low'}} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule(
      'box-shadow',
      'var(--elevation-low)',
      {
        media: mediaQueries.phone,
      }
    )
  })
})
