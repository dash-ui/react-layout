import type {Styles} from '@-ui/react'
import css from 'minify-css.macro'

export const gapClass = (
  styles: Styles,
  direction: 'row' | 'rowReverse' | 'column' | 'columnReverse',
  gapProp: string
) =>
  styles.one(
    // @ts-ignore
    ({gap}) => css`
      & > * + * {
        margin-${
          direction === 'column'
            ? 'top'
            : direction === 'columnReverse'
            ? 'bottom'
            : direction === 'rowReverse'
            ? 'right'
            : 'left'
        }: ${gap[gapProp]}!important;
      }
    `
  )()

export const flexClass = (
  styles: Styles,
  flexProps: {
    direction: 'row' | 'column' | 'reversedRow' | 'reversedColumn'
    alignment: 'start' | 'center' | 'end'
    distribution: 'around' | 'between' | 'even' | 'stretch'
    wrap: 'wrap' | 'reverse' | boolean
  }
) => {
  const {direction = 'row'} = flexProps
  return styles(flexStyles)({
    [direction]: direction,
    [`${direction}.${flexProps.alignment}`]: flexProps.alignment,
    [`${direction}.${flexProps.distribution}`]: flexProps.distribution,
    [`wrap.${flexProps.wrap}`]: flexProps.wrap,
  })
}

const flexStyles = {
  row: css`
    flex-direction: row;
  `,
  column: css`
    flex-direction: column;
  `,
  reversedRow: css`
    flex-direction: row-reverse;
  `,
  reversedColumn: css`
    flex-direction: column-reverse;
  `,
  'row.start': css`
    justify-content: flex-start;
  `,
  'column.start': css`
    align-items: flex-start;
  `,
  'row.center': css`
    justify-content: center;
  `,
  'column.center': css`
    align-items: center;
  `,
  'row.end': css`
    justify-content: flex-end;
  `,
  'column.end': css`
    align-items: flex-end;
  `,
  'row.around': css`
    justify-content: space-around;
  `,
  'column.around': css`
    align-content: space-around;
  `,
  'row.between': css`
    justify-content: space-between;
  `,
  'column.between': css`
    align-content: space-between;
  `,
  'row.even': css`
    justify-content: space-evenly;
  `,
  'column.even': css`
    align-content: space-evenly;
  `,
  'row.stretch': css`
    justify-content: stretch;
  `,
  'column.stretch': css`
    align-items: stretch;
  `,
  'wrap.wrap': css`
    flex-wrap: wrap;
  `,
  'wrap.reverse': css`
    flex-wrap: wrap-reverse;
  `,
  'wrap.true': css`
    flex-wrap: wrap;
  `,
  'wrap.false': css`
    flex-wrap: nowrap;
  `,
}
