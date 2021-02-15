/**
 * Adds a `px` unit to numeric values and returns non-numeric values as
 * they are.
 * @param value The value you want to maybe add a unit to
 */
export declare function unit<T extends unknown>(value: T): string | T
