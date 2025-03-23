import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import mdx from '@astrojs/mdx';

import alpinejs from '@astrojs/alpinejs';

import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    site: 'https://sebastien.morel.me',
    trailingSlash: 'ignore',
    integrations: [mdx(), alpinejs(), sitemap({}), react()],
});
