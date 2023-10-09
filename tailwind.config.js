/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Oswald': ['Oswald', 'sans']
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-l': 'radial-gradient(ellipse at left, var(--tw-gradient-stops))',
        'gradient-radial-at-r': 'radial-gradient(ellipse at right, var(--tw-gradient-stops))',
        'gradient-radial-at-tl': 'radial-gradient(ellipse at top left, var(--tw-gradient-stops))',
        'gradient-radial-at-tr': 'radial-gradient(ellipse at top right, var(--tw-gradient-stops))',
        'gradient-radial-at-bl': 'radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))',
        'gradient-radial-at-br': 'radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))',
      },
      keyframes: {
        glint: {
          '0%, 100%': { transform: 'rotate(-3deg) ' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'slide-up': {
          '0%, 100%': { transform: 'translateY(-2rem)' },
          '50%': { transform: 'translateY(0)' },
        }
      },
      animation: {
        'bgradial1': 'glint 1s ease-out infinite',
        'slide-up': 'slide-up 1000ms ease-in-out infinite'
      },
    },
  },
  plugins: [],
}


// bg-gradient-to-t from-slate-800 via-teal-800 to-stone-800