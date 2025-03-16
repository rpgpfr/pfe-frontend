import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
<<<<<<< HEAD
                primaryGreen: 'var(--primary-green)',
                secondaryGreen: 'var(--secondary-green)',
                smoothGreen: 'var(--smooth-green)',
                smoothBeige: 'var(--smooth-beige)',
                beige: 'var(--beige)',
                primaryBrown: 'var(--primary-brown)'
=======
                primary: {
                    green: 'var(--primary-green)',
                },
                smooth: {
                    green: 'var(--smooth-green)',
                    beige: 'var(--smooth-beige)',
                },
                secondaryGreen: 'var(--secondary-green)',
                beige: 'var(--beige)',
                primaryBrown: 'var(--primary-brown)',
                darkGreen: 'var(--dark-green)',
                white: 'var(--white)',
            },
            fontFamily: {
                sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
                aladdin: ['var(--font-aladdin)', 'serif'],
            },
            borderRadius: {
                DEFAULT: '4px',
>>>>>>> 96f52365a33c5926dfff6e3eac921c938bfb91d8
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
