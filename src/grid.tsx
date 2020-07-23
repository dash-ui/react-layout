import * as React from 'react'
import clsx from 'clsx'
import css from 'minify-css.macro'
import type {DashVariables} from '@dash-ui/styles'
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
  | keyof DashVariables['gap']
  // @ts-expect-error
  | [keyof DashVariables['gap'], keyof DashVariables['gap']]
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
  | keyof DashVariables['gap']
  // @ts-expect-error
  | [keyof DashVariables['gap'], keyof DashVariables['gap']]

export interface GridProps extends BoxProps {
  readonly display?: undefined
  /** justify-items */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-items */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-template-columns */
  readonly cols?: MqProp<number | (number | string)[]>
  /** justify-content */
  readonly distributeX?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** align-content */
  readonly distributeY?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** grid-gap, row-gap, column-gap */
  readonly gap?: MqProp<GapProp>
  /** display: inline-grid */
  readonly inline?: MqProp<boolean>
  /** grid-template-rows */
  readonly rows?: MqProp<number | (number | string)[]>
}

export interface GridItemProps extends BoxProps {
  /** justify-self */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-self */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-column-start */
  readonly colStart?: MqProp<number | string>
  /** grid-column-end */
  readonly colEnd?: MqProp<number | string>
  /** grid-row-start */
  readonly rowStart?: MqProp<number | string>
  /** grid-row-end */
  readonly rowEnd?: MqProp<number | string>
}

/* istanbul ignore next */
if (typeof process !== 'undefined' && process.env.NODE_ENV === 'development') {
  Grid.displayName = 'Grid'
  GridItem.displayName = 'GridItem'
}
