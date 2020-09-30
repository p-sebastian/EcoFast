module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        alias: {
          "@assets": './src/ui/assets',
          "@components": './src/ui/components',
          "@epics": './src/redux/epics',
          "@hoc": './src/hoc',
          "@hooks": './src/hooks',
          "@navigation": './src/ui/navigation',
          "@services": './src/services',
          "@slices": './src/redux/slices',
          "@ui": './src/ui',
          "@util": './src/utilities',
        }
      }
    ]
  ],
  env: {
    test: {
      plugins: ["transform-es2015-modules-commonjs"]
    }
  }
}
