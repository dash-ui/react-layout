export const unit = (value: any): string =>
  !isNaN(value) && value !== 0 ? `${value}px` : value
