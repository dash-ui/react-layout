global.document = {}

export const rollup = (config) => {
  if (config.output[0].format === 'umd') {
    config.external = ['@dash-ui/styles', '@dash-ui/react', 'react']
    config.output[0].globals = {
      '@dash-ui/styles': 'Dash',
      '@dash-ui/react': 'DashReact',
      react: 'React',
    }
  }

  return config
}
