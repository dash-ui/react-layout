import * as React from 'react'

/**
 * Omits an props in `T` that are already present in `P`
 */
export type Prefer<P, T> = P & Omit<T, keyof P>

/**
 * Maps a keyof JSX.IntrinsicElement (e.g. 'div' or 'svg') or a
 * React.ComponentType to it's type.
 *
 * For example:
 *   FromReactType<"div"> ==> HTMLDivElement
 *   FromReactType<"svg"> ==> SVGSVGElement
 *   FromReactType<React.FC<P>. ==> React.FC<P>
 */
export type FromReactType<
  T extends React.ReactType
> = T extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[T] extends React.DetailedHTMLFactory<
      React.HTMLAttributes<infer U>,
      infer U
    >
    ? U
    : JSX.IntrinsicElements[T] extends React.SVGProps<infer V>
    ? V
    : never
  : T

/**
 * These are the types accepted by the "as" prop in layout components
 */
export type AsProp = React.ReactType | keyof JSX.IntrinsicElements
