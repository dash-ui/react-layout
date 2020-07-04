/* jest */
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import {renderMq, mediaQueries} from 'test-utils'
import {Layer, LayerItem} from './layer'

describe('<Layer>', () => {
  it('should apply default styles', () => {
    render(<Layer data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('position', 'relative')
  })
})

describe('<LayerItem> without media queries', () => {
  it('applies default styles for each position', () => {
    const placements = [
      'center',
      'topLeft',
      'top',
      'topRight',
      'right',
      'bottomRight',
      'bottom',
      'bottomLeft',
      'left',
    ]
    for (const placement of placements) {
      const {asFragment} = render(<LayerItem placement={placement as any} />)
      expect(asFragment()).toMatchSnapshot(placement)
    }
  })

  it('applies styles with offsets for each position', () => {
    const placements = [
      'topLeft',
      'top',
      'topRight',
      'right',
      'bottomRight',
      'bottom',
      'bottomLeft',
      'left',
    ]
    for (const placement of placements) {
      const {asFragment} = render(
        <LayerItem placement={placement as any} offset={10} />
      )
      expect(asFragment()).toMatchSnapshot(placement)
    }
  })

  it('applies the "z" prop', () => {
    render(<LayerItem placement='top' z={1} data-testid='el' />)
    expect(screen.getByTestId('el')).toHaveStyleRule('z-index', '1')
  })
})

describe('<LayerItem> with media queries', () => {
  it('applies default styles for each position', () => {
    const placements = [
      'center',
      'topLeft',
      'top',
      'topRight',
      'right',
      'bottomRight',
      'bottom',
      'bottomLeft',
      'left',
    ]
    for (const placement of placements) {
      const {asFragment} = renderMq(
        <LayerItem placement={{phone: placement as any}} />
      )
      expect(asFragment()).toMatchSnapshot(placement)
    }
  })

  it('applies styles with offsets for each position', () => {
    const placements = [
      'topLeft',
      'top',
      'topRight',
      'right',
      'bottomRight',
      'bottom',
      'bottomLeft',
      'left',
    ]
    for (const placement of placements) {
      const {asFragment} = renderMq(
        <LayerItem placement={{phone: placement as any}} offset={10} />
      )
      expect(asFragment()).toMatchSnapshot(placement)
    }
  })

  it('applies the "z" prop', () => {
    renderMq(<LayerItem placement='top' z={{phone: 1}} data-testid='el' />)

    expect(screen.getByTestId('el')).toHaveStyleRule('z-index', '1', {
      media: mediaQueries.phone,
    })
  })
})
