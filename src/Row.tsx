import * as React from 'react'
import {useDash} from '@-ui/react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Frame} from './Frame'
import {useLayout} from './Layout'
import type {DefaultVars} from '@-ui/react'
import type {FrameProps} from './Frame'
import type {MediaQueryProp} from './Layout'

/**
 * A component that distributes its items in a row without wrapping like so:
 *
 * ☐ ☐ ☐ ☐ ☐ ☐ ☐
 *
 */
export const Row = React.forwardRef<any, RowProps>(
  (
    {className, align, distribute, gap: gapProp, reverse = false, ...props},
    ref
  ) => {
    const styles = useDash()
    const {mq} = useLayout()
    const marginDirection = reverse ? 'right' : 'left'

    return (
      <Frame
        className={clsx(
          className,
          align && mq.prop(alignItems, align),
          marginDirection &&
            styles.one(
              //@ts-ignore
              ({gap}) => css`
                display: flex;
                
                & > * + * {
                  margin-${marginDirection}: ${gap[gapProp]};
                }
              `
            )
        )}
        {...props}
        ref={ref}
      />
    )
  }
)

const alignItems = {
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

const justify = {
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

export interface RowProps extends FrameProps {
  readonly display?: never
  /**
   * Positional alignment for its child items on the y-axis using `align-items`
   */
  readonly align?: MediaQueryProp<
    'start' | 'center' | 'end' | 'baseline' | 'stretch'
  >
  /**
   * Distributed alignment properties on the x-axis using `justify-content`
   */
  readonly distribute?: MediaQueryProp<
    'start' | 'center' | 'end' | 'around' | 'between' | 'evenly' | 'stretch'
  >
  // @ts-ignore
  readonly gap?: MediaQueryProp<DefaultVars['gap']>
  readonly reverse?: MediaQueryProp<boolean>
}

export const RowItem = React.forwardRef<any, RowItemProps>(
  (
    {
      className,
      align,
      order,
      basis,
      maxWidth,
      maxHeight,
      fill,
      shrink,
      ...props
    },
    ref
  ) => {
    const styles = useDash()

    return (
      <Frame
        className={clsx(
          className,
          maxWidth !== void 0 && styles.one({maxWidth}),
          maxHeight !== void 0 && styles.one({maxHeight}),
          basis !== void 0 && styles.one({flexBasis: basis}),
          align !== void 0 &&
            styles.one(css`
              align-self: ${align};
            `),
          order !== void 0 &&
            styles.one(css`
              order: ${order};
            `),
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

export interface RowItemProps extends FrameProps {
  readonly align?: MediaQueryProp<
    'start' | 'end' | 'center' | 'baseline' | 'stretch'
  >
  readonly basis?: MediaQueryProp<number | string>
  readonly fill?: MediaQueryProp<boolean | number>
  readonly maxWidth?: MediaQueryProp<number | string>
  readonly maxHeight?: MediaQueryProp<number | string>
  readonly order?: MediaQueryProp<number>
  readonly shrink?: MediaQueryProp<boolean | number>
}
