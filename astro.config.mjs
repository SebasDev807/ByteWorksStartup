// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import Icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), Icon()]
});