import {styles} from '@dash-ui/styles'
import {matchers} from '@dash-ui/jest'

// Add the custom matchers provided by '@dash-ui/jest'
expect.extend(matchers)
// This file is for setting up Jest test environments
afterEach(() => {
  jest.clearAllMocks()
  styles.dash.sheet.flush()
  styles.dash.inserted.clear()
})
