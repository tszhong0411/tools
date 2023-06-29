import { tailwindPreset } from '@tszhong0411/ui'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@tszhong0411/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [tailwindPreset],
}
