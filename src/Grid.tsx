import * as React from 'react'
import clsx from 'clsx'
import {Box} from './Box'
import {useLayout} from './Layout'
import {
  alignSelf,
  justifySelf,
  alignItems,
  justifyItems,
  justifyContent,
  alignContent,
} from './styles'
import {unit} from './utils'
import type {DefaultVars} from '@-ui/react'
import type {BoxProps} from './Box'
import type {MediaQueryProp} from './Layout'

export const Grid = React.forwardRef<any, GridProps>(
  (
    {
      className,
      alignX,
      alignY,
      cols,
      distributeX,
      distributeY,
      gap,
      inline,
      rows,
      ...props
    },
    ref
  ) => {
    const prop = useLayout().mq.prop

    return (
      <Box
        ref={ref}
        className={clsx(
          className,
          prop(gridStyle, inline || false),
          prop(colsStyle, cols),
          prop(rowsStyle, rows),
          prop(justifyItems, alignX),
          prop(alignItems, alignY),
          prop(justifyContent, distributeX),
          prop(alignContent, distributeY),
          prop(gapStyle, gap)
        )}
        {...props}
      />
    )
  }
)

export const GridItem = React.forwardRef<any, GridItemProps>(
  (
    {className, alignX, alignY, colStart, colEnd, rowStart, rowEnd, ...props},
    ref
  ) => {
    const prop = useLayout().mq.prop

    return (
      <Box
        ref={ref}
        className={clsx(
          className,
          prop(justifySelf, alignX),
          prop(alignSelf, alignY),
          prop(colStartStyle, colStart),
          prop(colEndStyle, colEnd),
          prop(rowStartStyle, rowStart),
          prop(rowEndStyle, rowEnd)
        )}
        {...props}
      />
    )
  }
)

const gridStyle = (inline: boolean) => ({
  display: inline ? 'inline-grid' : 'grid',
})

const colsStyle = (cols: number | (number | string)[]) => {
  let value: (number | string)[]
  if (Array.isArray(cols)) value = cols
  // ie doesn't have repeat
  else value = new Array(cols).fill('1fr')
  return {
    gridTemplateColumns: value
      .map((col) => unit('grid-template-columns', col))
      .join(' '),
  }
}

const rowsStyle = (rows: number | (number | string)[]) => {
  let value: (number | string)[]
  if (Array.isArray(rows)) value = rows
  // ie doesn't have repeat
  else value = new Array(rows).fill('1fr')
  return {
    gridTemplateRows: value
      .map((col) => unit('grid-template-rows', col))
      .join(' '),
  }
}

const gapStyle = (gapProp: GapProp) => ({gap}) => ({
  gridGap: Array.isArray(gapProp)
    ? gapProp.map((p) => gap[p]).join(' ')
    : `${gap[gapProp]} ${gap[gapProp]}`,
})

const colStartStyle = (gridColumnStart: number | string) => ({
  gridColumnStart,
})
const colEndStyle = (gridColumnEnd: number | string) => ({
  gridColumnEnd,
})
const rowStartStyle = (gridRowStart: number | string) => ({
  gridRowStart,
})
const rowEndStyle = (gridRowEnd: number | string) => ({
  gridRowEnd,
})

type GapProp =
  // @ts-ignore
  | keyof DefaultVars['gap']
  // @ts-ignore
  | [keyof DefaultVars['gap'], keyof DefaultVars['gap']]

export interface GridProps extends BoxProps {
  readonly display?: undefined
  /** justify-items */
  readonly alignX?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-items */
  readonly alignY?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-template-columns */
  readonly cols?: MediaQueryProp<number | (number | string)[]>
  /** justify-content */
  readonly distributeX?: MediaQueryProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** align-content */
  readonly distributeY?: MediaQueryProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /** grid-gap, row-gap, column-gap */
  readonly gap?: MediaQueryProp<GapProp>
  /** display: inline-grid */
  readonly inline?: MediaQueryProp<boolean>
  /** grid-template-rows */
  readonly rows?: MediaQueryProp<number | (number | string)[]>
}

export interface GridItemProps extends BoxProps {
  /** justify-self */
  readonly alignX?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** align-self */
  readonly alignY?: MediaQueryProp<'start' | 'center' | 'end' | 'stretch'>
  /** grid-column-start */
  readonly colStart?: MediaQueryProp<number | string>
  /** grid-column-end */
  readonly colEnd?: MediaQueryProp<number | string>
  /** grid-row-start */
  readonly rowStart?: MediaQueryProp<number | string>
  /** grid-row-end */
  readonly rowEnd?: MediaQueryProp<number | string>
}
