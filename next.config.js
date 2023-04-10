/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },

  webpack: (config) => {
    config.externals.push({
      canvas: 'canvas',
    })

    return config
  },
}

export default nextConfig
