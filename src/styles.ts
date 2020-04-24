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

const aiEntries = Object.entries(alignItems)
type AlignItems = Record<keyof typeof alignItems, string>

const replaceReducer = <T>(from: string, to: string) => (
  current: T,
  [key, value]
) => {
  current[key] = value.replace(from, to)
  return current
}
export const alignSelf: AlignItems = aiEntries.reduce(
  replaceReducer<typeof alignItems>('items', 'self'),
  {} as AlignItems
)

export const justifySelf: AlignItems = aiEntries.reduce(
  replaceReducer<typeof alignItems>('align-items', 'justify-self'),
  {} as AlignItems
)

export const justifyItems: AlignItems = aiEntries.reduce(
  replaceReducer<typeof alignItems>('align', 'justify'),
  {} as AlignItems
)

export const justifyContent = {
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

type JustifyContent = Record<keyof typeof justifyContent, string>

export const alignContent: JustifyContent = Object.entries(
  justifyContent
).reduce(
  replaceReducer<typeof justifyContent>('justify', 'align'),
  {} as JustifyContent
)

export const flexDirection = {
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
