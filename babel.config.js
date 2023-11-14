module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        root: ['.'],
        alias: {
          '@api': './src/Api',
          '@app': './src/App',
          '@assets': './src/Assets',
          '@config': './src/Config',
          '@constants': './src/Constants',
          '@utils': './src/Utils',
          '@components': './src/Components',
          '@screens': './src/Screens',
          '@interfaces': './src/Interfaces',
          '@navigators': './src/Navigators',
          '@helpers': './src/Helpers',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
