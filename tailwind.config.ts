import type {Config} from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    green: 'var(--primary-green)',
                    brown: 'var(--primary-brown)',
                },
                secondary: {
                    green: 'var(--secondary-green)',
                },
                smooth: {
                    green: 'var(--smooth-green)',
                    beige: 'var(--smooth-beige)',
                },
                beige: 'var(--beige)',
                darkGreen: 'var(--dark-green)',
                white: 'var(--white)',
            },
            fontFamily: {
                sans: ['var(--font-source-sans)', 'system-ui', 'sans-serif'],
                aladdin: ['var(--font-aladdin)', 'serif'],
            },
            borderRadius: {
                DEFAULT: '4px',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
