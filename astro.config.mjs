import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://housesofluna.com',
  compressHTML: false,
  trailingSlash: 'ignore',
  build: { format: 'file' },   // flat dist/<page>.html — matches production's
                               // no-slash-canonical pretty-URL layout (AM-002)
});
