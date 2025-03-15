import type { Config } from "tailwindcss";

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
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
