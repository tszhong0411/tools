import { tailwindPreset } from '@codewithhong/ui'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@codewithhong/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [tailwindPreset],
}
