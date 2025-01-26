import { appTools, defineConfig } from '@modern-js/app-tools';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  output: {
    filename: {
      html: 'index.html',
    },
    distPath: {
      js: '',
      css: '',
      html: '',
    },
  },
  html: {
    disableHtmlFolder: true,
  },
  plugins: [
    appTools({
      bundler: 'rspack', // Set to 'webpack' to enable webpack
    }),
  ],
});
