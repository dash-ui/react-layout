import * as React from 'react'
import clsx from 'clsx'
import css from 'minify-css.macro'
import type {DashTokens} from '@dash-ui/styles'
import {Box} from './box'
import type {BoxProps} from './box'
import {useLayout} from './layout'
import type {MqProp, MqPropCallback} from './layout'
import {
  alignSelf,
  justifySelf,
  alignItems,
  justifyItems,
  justifyContent,
  alignContent,
} from './styles'
import {unit, forwardRefAs} from './utils'

/**
 * A layout component that distributes its children in a grid like so:
 *
 * ```
 * ☐ ☐ ☐
 * ☐ ☐ ☐
 * ☐ ☐ ☐
 * ```
 *
 * @example
 * <Grid cols={2} rows={2}>
 *   <GridItem/>
 *   <GridItem/>
 *   <GridItem/>
 *   <GridItem/>
 * </Grid>
 */
export const Grid = forwardRefAs<GridProps, 'div'>(function Grid(
  {
    className,
    alignX,
    alignY,
    distributeX,
    distributeY,
    cols,
    rows,
    inline,
    gap,
    ...props
  },
  ref
) {
  const {mq} = useLayout()

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        mq(justifyItems, alignX),
        mq(alignItems, alignY),
        mq(justifyContent, distributeX),
        mq(alignContent, distributeY),
        mq(colsStyle, cols),
        mq(rowsStyle, rows),
        mq(gridStyle, inline || false),
        mq(gapStyle, gap)
      )}
      {...props}
    />
  )
})

/**
 * A layout component that can add positioning properties to itself inside
 * of a `<Grid>` component.
 *
 * @example
 * <Grid cols={2} rows={2}>
 *   // Occupies 2 columns
 *   <GridItem colStart={1} colEnd={2}/>
 *   <GridItem/>
 *   <GridItem/>
 * </Grid>
 */
export const GridItem = forwardRefAs<GridItemProps, 'div'>(function GridItem(
  {className, alignX, alignY, colStart, colEnd, rowStart, rowEnd, ...props},
  ref
) {
  const {mq} = useLayout()

  return (
    <Box
      ref={ref}
      className={clsx(
        className,
        mq(justifySelf, alignX),
        mq(alignSelf, alignY),
        mq(colStartStyle, colStart),
        mq(colEndStyle, colEnd),
        mq(rowStartStyle, rowStart),
        mq(rowEndStyle, rowEnd)
      )}
      {...props}
    />
  )
})

const gridStyle = (inline: boolean) => ({
  display: inline ? 'inline-grid' : 'grid',
})

const colsStyle = (cols: number | (number | string)[]) => {
  let value: (number | string)[]
  if (Array.isArray(cols)) value = cols
  // ie doesn't have repeat
  else value = new Array(cols).fill('1fr')
  return css`
    grid-template-columns: ${value.map((col) => unit(col)).join(' ')};
  `
}

const rowsStyle = (rows: number | (number | string)[]) => {
  let value: (number | string)[]
  if (Array.isArray(rows)) value = rows
  // ie doesn't have repeat
  else value = new Array(rows).fill('1fr')
  return css`
    grid-template-rows: ${value.map((row) => unit(row)).join(' ')};
  `
}

const gapStyle: MqPropCallback<
  // @ts-expect-error
  | keyof DashTokens['gap']
  // @ts-expect-error
  | [keyof DashTokens['gap'], keyof DashTokens['gap']]
  // @ts-expect-error
> = (gapProp: GapProp) => ({gap}) => css`
  grid-gap: ${Array.isArray(gapProp)
    ? gapProp.map((p) => gap[p]).join(' ')
    : gap[gapProp] + ' ' + gap[gapProp]};
`

const colStartStyle = (gridColumnStart: number | string) => css`
  grid-column-start: ${gridColumnStart};
`

const colEndStyle = (gridColumnEnd: number | string) => css`
  grid-column-end: ${gridColumnEnd};
`

const rowStartStyle = (gridRowStart: number | string) => css`
  grid-row-start: ${gridRowStart};
`

const rowEndStyle = (gridRowEnd: number | string) => css`
  grid-row-end: ${gridRowEnd};
`

type GapProp =
  // @ts-expect-error
  | keyof DashTokens['gap']
  // @ts-expect-error
  | [keyof DashTokens['gap'], keyof DashTokens['gap']]

export interface GridProps extends Omit<BoxProps, 'display'> {
  /**
   * Sets a `justify-items` CSS property on your component
   */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets an `align-items` CSS property on your component
   */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets a `grid-template-columns` CSS property on your component
   */
  readonly cols?: MqProp<number | (number | string)[]>
  /**
   * Sets a `justify-content` CSS property on your component
   */
  readonly distributeX?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /**
   * Sets an `align-content` CSS property on your component
   */
  readonly distributeY?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /**
   * Sets a horizontal and vertical gap between the child elements in the row
   * using the "gap" token in your theme
   */
  readonly gap?: MqProp<GapProp>
  /**
   * Makes the component display as an `inline-grid` rather than `grid`
   */
  readonly inline?: MqProp<boolean>
  /**
   * Sets a `grid-template-rows` CSS property on your component
   */
  readonly rows?: MqProp<number | (number | string)[]>
}

export interface GridItemProps extends BoxProps {
  /**
   * Sets a `justify-self` CSS property on your component
   */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets an `align-self` CSS property on your component
   */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets a `grid-column-start` CSS property on your component
   */
  readonly colStart?: MqProp<number | string>
  /**
   * Sets a `grid-column-end` CSS property on your component
   */
  readonly colEnd?: MqProp<number | string>
  /**
   * Sets a `grid-row-start` CSS property on your component
   */
  readonly rowStart?: MqProp<number | string>
  /**
   * Sets a `grid-row-end` CSS property on your component
   */
  readonly rowEnd?: MqProp<number | string>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Grid.displayName = 'Grid'
  GridItem.displayName = 'GridItem'
}
