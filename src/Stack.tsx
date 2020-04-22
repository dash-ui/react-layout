import React from 'react'
import {useDash} from '@-ui/react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Frame} from './Frame'
import {flexClass} from './styles'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'

/**
 * A component that distributes its items in a row or column without
 * wrapping by default like so:
 *
 * ☐ ☐ ☐ ☐ ☐
 *
 * or
 *
 * ☐
 * ☐
 * ☐
 * ☐
 */
export const Stack = React.forwardRef<any, StackProps>(
  (
    {
      className,
      gap: gapProp,
      direction = 'row',
      alignment = 'start',
      distribution,
      wrap = false,
      ...props
    },
    ref
  ) => {
    const styles = useDash()
    const marginDirection =
      direction === 'row'
        ? 'left'
        : direction === 'reversedRow'
        ? 'right'
        : direction === 'column'
        ? 'top'
        : direction === 'reversedColumn'
        ? 'bottom'
        : false

    return (
      <Frame
        className={clsx(
          className,
          marginDirection &&
            styles.one(
              //@ts-ignore
              ({gap}) => css`
                display: flex;
                
                & > * + * {
                  margin-${marginDirection}: ${gap[gapProp]};
                }
              `
            ),
          flexClass(styles, {direction, alignment, distribution, wrap})
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

export interface StackProps extends FrameProps {
  readonly display?: never
  readonly direction?: 'row' | 'column' | 'reversedRow' | 'reversedColumn'
  readonly alignment?: 'start' | 'center' | 'end'
  readonly distribution?: 'around' | 'between' | 'even' | 'stretch'
  readonly wrap?: 'wrap' | 'reverse' | boolean
  // @ts-ignore
  readonly gap?: DefaultVars['gap']
}

export const StackItem = React.forwardRef<any, StackItemProps>(
  ({className, basis, maxWidth, maxHeight, fill, shrink, ...props}, ref) => {
    const styles = useDash()

    return (
      <Frame
        className={clsx(
          className,
          maxWidth !== void 0 && styles.one({maxWidth}),
          maxHeight !== void 0 && styles.one({maxHeight}),
          basis !== void 0 && styles.one({flexBasis: basis}),
          fill !== void 0 &&
            styles.one(css`
              flex-grow: ${Number(fill)};
            `),
          shrink !== void 0 &&
            styles.one(css`
              flex-shrink: ${Number(shrink)};
            `)
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

export interface StackItemProps extends FrameProps {
  readonly basis?: number | string
  readonly maxWidth?: number | string
  readonly maxHeight?: number | string
  readonly fill?: boolean | number
  readonly shrink?: boolean | number
}
