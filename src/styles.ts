import css from "minify-css.macro";

const ai = "align-items";
export const alignItems = {
  start: css`
    ${ai}: flex-start;
  `,
  center: css`
    ${ai}: center;
  `,
  end: css`
    ${ai}: flex-end;
  `,
  baseline: css`
    ${ai}: baseline;
  `,
  stretch: css`
    ${ai}: stretch;
  `,
};

const aiEntries = Object.entries(alignItems);
type AlignItems = Record<keyof typeof alignItems, string>;

const replaceReducer =
  <ReturnType, Key extends string = string, Value extends string = string>(
    from: string,
    to: string
  ) =>
  (current: ReturnType, [key, value]: [Key, Value]): ReturnType => {
    (current as any)[key] = value.replace(from, to);
    return current;
  };
export const alignSelf: AlignItems = aiEntries.reduce<AlignItems>(
  replaceReducer<AlignItems>("items", "self"),
  {} as AlignItems
);

export const justifySelf: AlignItems = aiEntries.reduce<AlignItems>(
  replaceReducer<AlignItems>(ai, "justify-self"),
  {} as AlignItems
);

export const justifyItems: AlignItems = aiEntries.reduce<AlignItems>(
  replaceReducer<AlignItems>("align", "justify"),
  {} as AlignItems
);

const jc = "justify-content";
export const justifyContent = {
  start: css`
    ${jc}: flex-start;
  `,
  center: css`
    ${jc}: center;
  `,
  end: css`
    ${jc}: flex-end;
  `,
  around: css`
    ${jc}: space-around;
  `,
  between: css`
    ${jc}: space-between;
  `,
  evenly: css`
    ${jc}: space-evenly;
  `,
  stretch: css`
    ${jc}: stretch;
  `,
};

type JustifyContent = Record<keyof typeof justifyContent, string>;

export const alignContent: JustifyContent = Object.entries(
  justifyContent
).reduce<JustifyContent>(
  replaceReducer<JustifyContent>("justify", "align"),
  {} as JustifyContent
);

const fd = "flex-direction";
export const flexDirection = {
  row: css`
    ${fd}: row;
  `,
  reversedRow: css`
    ${fd}: row-reverse;
  `,
  column: css`
    ${fd}: column;
  `,
  reversedColumn: css`
    ${fd}: column-reverse;
  `,
};
