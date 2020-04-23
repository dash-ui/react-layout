import css from 'minify-css.macro'

export const alignItems = {
  start: css`
    align-items: flex-start;
  `,
  center: css`
    align-items: center;
  `,
  end: css`
    align-items: flex-end;
  `,
  baseline: css`
    align-items: baseline;
  `,
  stretch: css`
    align-items: stretch;
  `,
}

export const justify = {
  start: css`
    justify-content: flex-start;
  `,
  center: css`
    justify-content: center;
  `,
  end: css`
    justify-content: flex-end;
  `,
  around: css`
    justify-content: space-around;
  `,
  between: css`
    justify-content: space-between;
  `,
  evenly: css`
    justify-content: space-evenly;
  `,
  stretch: css`
    justify-content: stretch;
  `,
}

export const flex = {
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
}
