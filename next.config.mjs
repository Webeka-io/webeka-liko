/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ne bloque plus le build/dev si ESLint trouve des erreurs
    ignoreDuringBuilds: true,
  },
  /* autres options ici */
};

export default nextConfig;
