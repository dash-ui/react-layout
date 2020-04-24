import * as React from 'react'
// I don't actually know why I have to do this. React w/ TypeScript is a real PITA sometimes.
export type LayoutAttributes = Omit<React.HTMLAttributes<any>, 'className'>
