import path from 'path';

export default {
  dist: path.resolve(__dirname, 'dist'),
  copyAssets: [
    'README.md',
    'package.json',
    {
      asset: 'src/js/**',
      babel: true
    }
  ],
  jsAssets: [
    'src/js/**/*.js'
  ],
  mainJs: 'src/js/index.js',
  webpack: {
    output: {
      filename: 'grommet-addons.min.js',
      libraryTarget: 'var',
      library: 'GrommetAddons'
    },
    resolve: {
      modulesDirectories: ['node_modules', 'src/js']
    },
    externals: {
      'react': 'React',
      'grommet': 'grommet'
    }
  },
  testPaths: [
    '__tests__',
    '!__tests__/utils/'
  ]
};
