import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    additionalData: `@import '@styles/variables'; @import '@styles/mixins';`,  // Глобальные импорты
  },
}

export default nextConfig
