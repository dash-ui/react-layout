export declare const alignItems: {
  start: string;
  center: string;
  end: string;
  baseline: string;
  stretch: string;
};
declare type AlignItems = Record<keyof typeof alignItems, string>;
export declare const alignSelf: AlignItems;
export declare const justifySelf: AlignItems;
export declare const justifyItems: AlignItems;
export declare const justifyContent: {
  start: string;
  center: string;
  end: string;
  around: string;
  between: string;
  evenly: string;
  stretch: string;
};
declare type JustifyContent = Record<keyof typeof justifyContent, string>;
export declare const alignContent: JustifyContent;
export declare const flexDirection: {
  row: string;
  reversedRow: string;
  column: string;
  reversedColumn: string;
};
export {};
