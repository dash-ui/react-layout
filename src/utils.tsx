import unitless from '@emotion/unitless'

const isCustomProperty = (property: string) => property.charCodeAt(1) === 45
export const unit = (key: string, value: any): string =>
  unitless[key] !== 1 &&
  !isCustomProperty(key) &&
  typeof value === 'number' &&
  value !== 0
    ? `${value}px`
    : value
