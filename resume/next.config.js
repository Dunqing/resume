/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        type: 'asset/source',
        generator: {
          filename: 'static/[hash][ext][query]'
        }
      }
    )
    return config
  }
}

module.exports = nextConfig
