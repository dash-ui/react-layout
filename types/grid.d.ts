import type {DashVariables} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {MqProp} from './layout'
/**
 * A layout component that distributes its children in a grid like so:
 *
 * ```
 * ☐ ☐ ☐
 * ☐ ☐ ☐
 * ☐ ☐ ☐
 * ```
 *
 * @example
 * <Grid cols={2} rows={2}>
 *   <GridItem/>
 *   <GridItem/>
 *   <GridItem/>
 *   <GridItem/>
 * </Grid>
 */
export declare const Grid: import('./utils').ForwardRefAsExoticComponent<
  GridProps,
  'div'
>
/**
 * A layout component that can add positioning properties to itself inside
 * of a `<Grid>` component.
 *
 * @example
 * <Grid cols={2} rows={2}>
 *   // Occupies 2 columns
 *   <GridItem colStart={1} colEnd={2}/>
 *   <GridItem/>
 *   <GridItem/>
 * </Grid>
 */
export declare const GridItem: import('./utils').ForwardRefAsExoticComponent<
  GridItemProps,
  'div'
>
declare type GapProp =
  | keyof DashVariables['gap']
  | [keyof DashVariables['gap'], keyof DashVariables['gap']]
export interface GridProps extends Omit<BoxProps, 'display'> {
  /**
   * Sets a `justify-items` CSS property on your component
   */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets an `align-items` CSS property on your component
   */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets a `grid-template-columns` CSS property on your component
   */
  readonly cols?: MqProp<number | (number | string)[]>
  /**
   * Sets a `justify-content` CSS property on your component
   */
  readonly distributeX?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /**
   * Sets an `align-content` CSS property on your component
   */
  readonly distributeY?: MqProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /**
   * Sets a horizontal and vertical gap between the child elements in the row
   * using the "gap" token in your theme
   */
  readonly gap?: MqProp<GapProp>
  /**
   * Makes the component display as an `inline-grid` rather than `grid`
   */
  readonly inline?: MqProp<boolean>
  /**
   * Sets a `grid-template-rows` CSS property on your component
   */
  readonly rows?: MqProp<number | (number | string)[]>
}
export interface GridItemProps extends BoxProps {
  /**
   * Sets a `justify-self` CSS property on your component
   */
  readonly alignX?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets an `align-self` CSS property on your component
   */
  readonly alignY?: MqProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets a `grid-column-start` CSS property on your component
   */
  readonly colStart?: MqProp<number | string>
  /**
   * Sets a `grid-column-end` CSS property on your component
   */
  readonly colEnd?: MqProp<number | string>
  /**
   * Sets a `grid-row-start` CSS property on your component
   */
  readonly rowStart?: MqProp<number | string>
  /**
   * Sets a `grid-row-end` CSS property on your component
   */
  readonly rowEnd?: MqProp<number | string>
}
export {}
