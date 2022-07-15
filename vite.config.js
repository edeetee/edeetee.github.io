import { sveltekit } from '@sveltejs/kit/vite';
import glslify from 'vite-plugin-glslify';
import path from "path";
import { fileURLToPath } from 'url';

import { defineConfig } from 'vite';

let dir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
	plugins: [sveltekit(), glslify.default()],
	resolve: {
		alias: {
			"@src": path.join(dir, "src"),
			"@public": path.join(dir, "static")
		}
	}
});
