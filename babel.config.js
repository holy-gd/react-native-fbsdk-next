module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@holy-gd/react-native-fbsdk-next': './src',
        },
      },
    ],
  ],
};
