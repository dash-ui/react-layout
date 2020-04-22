import {matchers} from '@-ui/jest'

// Add the custom matchers provided by '@-ui/jest'
expect.extend(matchers)
// This file is for setting up Jest test environments
afterEach(() => {
  jest.clearAllMocks()
})
