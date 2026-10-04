import type { NextConfig } from 'next';
const config: NextConfig = {
  output: 'standalone',
  transpilePackages: ['@tier-agro/contracts', '@tier-agro/ui-tokens'],
};
export default config;
