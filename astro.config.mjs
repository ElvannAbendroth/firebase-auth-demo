import { defineConfig } from 'astro/config'

import vercel from '@astrojs/vercel/serverless'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  adapter: vercel(),
  server: {
    headers: {
      'access-control-allow-origin': '*',
      'access-control-expose-headers': '*',
      'access-control-request-method': '*',
      'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
    },
  },
})
