/* jest */
import * as React from 'react'
import {render} from '@testing-library/react'
import {Grid, GridItem} from './Grid'
import {renderMq, mediaQueries} from 'test-utils'

describe('<Grid> without media queries', () => {
  it('applies default styles', () => {
    const {getByTestId} = render(<Grid data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'grid')
  })

  it('applies the "inline" prop', () => {
    const {getByTestId} = render(<Grid inline data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('display', 'inline-grid')
  })

  it('applies the "cols" prop w/ specific sizes', () => {
    const {getByTestId} = render(
      <Grid cols={[100, 'auto', '3rem']} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-columns',
      '100px auto 3rem'
    )
  })

  it('applies the "cols" prop w/ fixed number and size', () => {
    const {getByTestId} = render(<Grid cols={3} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-columns',
      '1fr 1fr 1fr'
    )
  })

  it('applies the "rows" prop w/ specific sizes', () => {
    const {getByTestId} = render(
      <Grid cols={[100, 'auto', '3rem']} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-columns',
      '100px auto 3rem'
    )
  })

  it('applies the "rows" prop w/ fixed number and size', () => {
    const {getByTestId} = render(<Grid rows={3} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-rows',
      '1fr 1fr 1fr'
    )
  })

  it('applies the "gap" prop w/ single value', () => {
    const {getByTestId} = render(<Grid gap={1} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-gap',
      'var(--gap-1) var(--gap-1)'
    )
  })

  it('applies the "gap" prop w/ array value', () => {
    const {getByTestId} = render(<Grid gap={[1, 2]} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-gap',
      'var(--gap-1) var(--gap-2)'
    )
  })

  it('applies the "alignX" prop', () => {
    const {getByTestId} = render(<Grid alignX="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('justify-items', 'center')
  })

  it('applies the "alignY" prop', () => {
    const {getByTestId} = render(<Grid alignY="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('align-items', 'center')
  })

  it('applies the "distributeX" prop', () => {
    const {getByTestId} = render(<Grid distributeX="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'center')
  })

  it('applies the "distributeY" prop', () => {
    const {getByTestId} = render(<Grid distributeY="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('align-content', 'center')
  })
})

describe('<Grid> with media queries', () => {
  const mq = {media: mediaQueries.phone}

  it('applies the "inline" prop', () => {
    const {getByTestId} = renderMq(
      <Grid inline={{phone: true}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('display', 'inline-grid', mq)
  })

  it('applies the "cols" prop w/ specific sizes', () => {
    const {getByTestId} = renderMq(
      <Grid cols={{phone: [100, 'auto', '3rem']}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-columns',
      '100px auto 3rem',
      mq
    )
  })

  it('applies the "cols" prop w/ fixed number and size', () => {
    const {getByTestId} = renderMq(<Grid cols={{phone: 3}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-columns',
      '1fr 1fr 1fr',
      mq
    )
  })

  it('applies the "rows" prop w/ specific sizes', () => {
    const {getByTestId} = renderMq(
      <Grid cols={{phone: [100, 'auto', '3rem']}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-columns',
      '100px auto 3rem',
      mq
    )
  })

  it('applies the "rows" prop w/ fixed number and size', () => {
    const {getByTestId} = renderMq(<Grid rows={{phone: 3}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-template-rows',
      '1fr 1fr 1fr',
      mq
    )
  })

  it('applies the "gap" prop w/ single value', () => {
    const {getByTestId} = renderMq(<Grid gap={{phone: 1}} data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-gap',
      'var(--gap-1) var(--gap-1)',
      mq
    )
  })

  it('applies the "gap" prop w/ array value', () => {
    const {getByTestId} = renderMq(
      <Grid gap={{phone: [1, 2]}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule(
      'grid-gap',
      'var(--gap-1) var(--gap-2)',
      mq
    )
  })

  it('applies the "alignX" prop', () => {
    const {getByTestId} = renderMq(
      <Grid alignX={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('justify-items', 'center', mq)
  })

  it('applies the "alignY" prop', () => {
    const {getByTestId} = renderMq(
      <Grid alignY={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('align-items', 'center', mq)
  })

  it('applies the "distributeX" prop', () => {
    const {getByTestId} = renderMq(
      <Grid distributeX={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('justify-content', 'center', mq)
  })

  it('applies the "distributeY" prop', () => {
    const {getByTestId} = renderMq(
      <Grid distributeY={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('align-content', 'center', mq)
  })
})

describe('<GridItem> without media queries', () => {
  it('applies the "colStart" prop', () => {
    const {getByTestId} = render(<GridItem colStart="1" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('grid-column-start', '1')
  })

  it('applies the "colEnd" prop', () => {
    const {getByTestId} = render(<GridItem colEnd="1" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('grid-column-end', '1')
  })

  it('applies the "rowStart" prop', () => {
    const {getByTestId} = render(<GridItem rowStart="1" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('grid-row-start', '1')
  })

  it('applies the "rowEnd" prop', () => {
    const {getByTestId} = render(<GridItem rowEnd="1" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('grid-row-end', '1')
  })

  it('applies the "alignX" prop', () => {
    const {getByTestId} = render(<GridItem alignX="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('justify-self', 'center')
  })

  it('applies the "alignY" prop', () => {
    const {getByTestId} = render(<GridItem alignY="center" data-testid="el" />)
    expect(getByTestId('el')).toHaveStyleRule('align-self', 'center')
  })
})

describe('<GridItem> with media queries', () => {
  const mq = {media: mediaQueries.phone}

  it('applies the "colStart" prop', () => {
    const {getByTestId} = renderMq(
      <GridItem colStart={{phone: 1}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('grid-column-start', '1', mq)
  })

  it('applies the "colEnd" prop', () => {
    const {getByTestId} = renderMq(
      <GridItem colEnd={{phone: 1}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('grid-column-end', '1', mq)
  })

  it('applies the "rowStart" prop', () => {
    const {getByTestId} = renderMq(
      <GridItem rowStart={{phone: 1}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('grid-row-start', '1', mq)
  })

  it('applies the "rowEnd" prop', () => {
    const {getByTestId} = renderMq(
      <GridItem rowEnd={{phone: 1}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('grid-row-end', '1', mq)
  })

  it('applies the "alignX" prop', () => {
    const {getByTestId} = renderMq(
      <GridItem alignX={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('justify-self', 'center', mq)
  })

  it('applies the "alignY" prop', () => {
    const {getByTestId} = renderMq(
      <GridItem alignY={{phone: 'center'}} data-testid="el" />
    )
    expect(getByTestId('el')).toHaveStyleRule('align-self', 'center', mq)
  })
})
