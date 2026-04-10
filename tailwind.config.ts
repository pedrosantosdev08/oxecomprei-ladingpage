import type { Config } from 'tailwindcss'

const config: Config = {
  // Define os caminhos para todos os teus ficheiros de template
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  // Ativa o modo escuro baseado numa classe no elemento HTML (opcional)
  darkMode: 'class',

  theme: {
    extend: {
      // Aqui podes adicionar as tuas cores, fontes e espaçamentos personalizados
      colors: {
        brand: {
          light: '#3fbaeb',
          DEFAULT: '#0fa9e6',
          dark: '#0c87b8',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      
      // Exemplo de animações personalizadas
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
      },
      
      // Exemplo de fontes (deves configurar no teu CSS global ou via Next.js Font)
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },

  // Adiciona plugins úteis (deves instalá-los via npm se quiseres usar)
  plugins: [
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
    // require('@tailwindcss/aspect-ratio'),
  ],
}

export default config