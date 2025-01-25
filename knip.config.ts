import { type KnipConfig } from 'knip'

const config: KnipConfig = {
  commitlint: {
    config: 'commitlint.config.mjs'
  },
  ignoreBinaries: ['only-allow'],
  ignoreDependencies: ['prettier-plugin-*'],
  postcss: {
    config: 'postcss.config.mjs'
  }
}

export default config
