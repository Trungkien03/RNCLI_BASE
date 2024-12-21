module.exports = {
  preset: 'react-native',
  extends: ['plugin:jest/recommended'],
  transform: {
    '^.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-redux|@react-native|react-native|@react-navigation)/)',
  ],
};
