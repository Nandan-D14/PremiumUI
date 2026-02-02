import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
        include: ['components/lib', 'context', 'utils', 'lib.ts'],
        insertTypesEntry: true,
    })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib.ts'),
      name: 'PremiumUI',
      fileName: (format) => `premium-ui.${format}.js`,
      formats: ['es', 'cjs']
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'framer-motion',
        'react-router-dom',
        'lucide-react',
        'tailwind-merge',
        'clsx',
        'recharts'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'framer-motion': 'Motion',
          'react-router-dom': 'ReactRouterDOM',
          'lucide-react': 'LucideReact',
          'tailwind-merge': 'TailwindMerge',
          'clsx': 'Clsx',
          'recharts': 'Recharts'
        }
      }
    },
    sourcemap: true,
    emptyOutDir: true,
  }
});
