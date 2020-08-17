module.exports = {
  'root': true,
  'extends': [
    'standard',
    'plugin:vue/recommended'
  ],
  'parserOptions': {
    'parser': 'babel-eslint',
    'ecmaVersion': 6,
    'sourceType': 'module',
    'ecmaFeatures': {
 
      'jsx': true,
    }
  },
  'plugins': [
    'vue'
  ],
  'rules': {
    'generator-star-spacing': 'off',
  },
  "env": {
    "node": true
  }
};
