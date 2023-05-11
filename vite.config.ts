/// <reference types="vitest" />
import React from '@vitejs/plugin-react';
import { resolve } from 'path';
import { presetAttributify, presetIcons, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [
		UnoCSS({
			shortcuts: [
				{
					logo: 'i-logos-react w-6em h-6em transform transition-800 hover:rotate-180',
				},
			],
			presets: [
				presetUno(),
				presetAttributify(),
				presetIcons({
					extraProperties: {
						display: 'inline-block',
						'vertical-align': 'middle',
					},
				}),
			],
		}),
		React(),
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
		},
	},
	server: {
		host: '0.0.0.0',
		open: true,
		proxy: {
			'/api': {
				target: 'http://localhost:3000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
