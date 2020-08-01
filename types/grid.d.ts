import type {DashTokens} from '@dash-ui/styles'
import type {BoxProps} from './box'
import type {ResponsiveProp} from './layout'
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
export declare const Grid: import('forward-ref-as').ForwardRefAsExoticComponent<
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
export declare const GridItem: import('forward-ref-as').ForwardRefAsExoticComponent<
  GridItemProps,
  'div'
>
declare type GapProp =
  | keyof DashTokens['gap']
  | [keyof DashTokens['gap'], keyof DashTokens['gap']]
export interface GridProps extends Omit<BoxProps, 'display'> {
  /**
   * Sets a `justify-items` CSS property on your component
   */
  readonly alignX?: ResponsiveProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets an `align-items` CSS property on your component
   */
  readonly alignY?: ResponsiveProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets a `grid-template-columns` CSS property on your component
   */
  readonly cols?: ResponsiveProp<number | (number | string)[]>
  /**
   * Sets a `justify-content` CSS property on your component
   */
  readonly distributeX?: ResponsiveProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /**
   * Sets an `align-content` CSS property on your component
   */
  readonly distributeY?: ResponsiveProp<
    'start' | 'center' | 'end' | 'stretch' | 'around' | 'between' | 'evenly'
  >
  /**
   * Sets a horizontal and vertical gap between the child elements in the row
   * using the "gap" token in your theme
   */
  readonly gap?: ResponsiveProp<GapProp>
  /**
   * Makes the component display as an `inline-grid` rather than `grid`
   */
  readonly inline?: ResponsiveProp<boolean>
  /**
   * Sets a `grid-template-rows` CSS property on your component
   */
  readonly rows?: ResponsiveProp<number | (number | string)[]>
}
export interface GridItemProps extends BoxProps {
  /**
   * Sets a `justify-self` CSS property on your component
   */
  readonly alignX?: ResponsiveProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets an `align-self` CSS property on your component
   */
  readonly alignY?: ResponsiveProp<'start' | 'center' | 'end' | 'stretch'>
  /**
   * Sets a `grid-column-start` CSS property on your component
   */
  readonly colStart?: ResponsiveProp<number | string>
  /**
   * Sets a `grid-column-end` CSS property on your component
   */
  readonly colEnd?: ResponsiveProp<number | string>
  /**
   * Sets a `grid-row-start` CSS property on your component
   */
  readonly rowStart?: ResponsiveProp<number | string>
  /**
   * Sets a `grid-row-end` CSS property on your component
   */
  readonly rowEnd?: ResponsiveProp<number | string>
}
export {}
