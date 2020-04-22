import * as React from 'react'
import mq from '@-ui/mq'
import type {MediaQueryCallback} from '@-ui/mq'
import type {DefaultVars} from '@-ui/react'

const MediaQueriesContext = React.createContext<MediaQueriesContextType>({
  queries: {},
  mq: mq({}),
})

export const useMediaQueries = () => React.useContext(MediaQueriesContext)
export const MediaQueriesProvider: React.FC<MediaQueriesProps> = ({
  queries,
  children,
}) => (
  <MediaQueriesContext.Provider
    value={React.useMemo(
      () => ({
        queries,
        mq: mq(queries),
      }),
      [queries]
    )}
    children={children}
  />
)

export interface MediaQueries {}

export type MediaQueriesProp<ValueType> =
  | ValueType
  | {
      [key in Extract<keyof MediaQueries, string>]?: ValueType
    }

export interface MediaQueriesProps {
  queries: MediaQueries
}

export interface MediaQueriesContextType {
  queries: MediaQueries
  mq: MediaQueryCallback<Extract<keyof MediaQueries, string>, DefaultVars>
}
