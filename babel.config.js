module.exports = (api) => {
  const esm = api.env('esm')
  const module = api.env('module')
  const presetEnv = [
    '@lunde/es',
    {
      env: {
        modules: esm || module ? false : 'commonjs',
        targets: module
          ? {
              browsers: '> 2%',
            }
          : {
              node: esm ? '12' : '10',
            },
      },
      devExpression: false,
      objectAssign: false,
      restSpread: false,
    },
  ]

  return {
    presets: [['@babel/preset-react', {useSpread: true}], presetEnv],
    plugins: ['optimize-react', 'annotate-pure-calls'],
  }
}
