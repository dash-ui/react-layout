import type { Styles } from '@-ui/react';
export declare const gapClass: (styles: Styles<import("@-ui/styles").DefaultVars, never>, direction: "row" | "rowReverse" | "column" | "columnReverse", gapProp: string) => string;
export declare const flexClass: (styles: Styles<import("@-ui/styles").DefaultVars, never>, flexProps: {
    direction?: "row" | "column" | "reversedRow" | "reversedColumn" | undefined;
    alignment?: "center" | "start" | "end" | undefined;
    distribution?: "stretch" | "around" | "between" | "even" | undefined;
    wrap?: boolean | "reverse" | "wrap" | undefined;
}) => string;
