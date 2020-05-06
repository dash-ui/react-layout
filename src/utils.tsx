export const unit = (key: string, value: any): string =>
  typeof !isNaN(value) && value !== 0 ? `${value}px` : value
