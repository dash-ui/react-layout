/**
 * Adds a `px` unit to numeric values and returns non-numeric values as
 * they are.
 *
 * @param value - The value you want to maybe add a unit to
 */
export function unit<T extends number | string | undefined>(value: T) {
  return !isNaN(value as any) && value !== 0 ? `${value}px` : value;
}
