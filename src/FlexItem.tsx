import * as React from 'react'
import {useDash} from '@-ui/react'
import css from 'minify-css.macro'
import clsx from 'clsx'
import {Frame} from './Frame'
import type {FrameProps} from './Frame'
import type {MediaQueryProp} from './Layout'

export const FlexItem = React.forwardRef<any, FlexItemProps>(
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

export interface FlexItemProps extends FrameProps {
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
