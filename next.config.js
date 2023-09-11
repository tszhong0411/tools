/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals.push({
      canvas: 'canvas'
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return config
  }
}

export default nextConfig
