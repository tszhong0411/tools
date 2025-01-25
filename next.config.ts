import { type NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.externals.push({
      canvas: 'canvas'
    })

    // eslint-disable-next-line @typescript-eslint/no-unsafe-return -- it's unknown what the return type is
    return config
  }
}

export default nextConfig
