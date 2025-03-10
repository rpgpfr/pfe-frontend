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
                    green: 'var(--primary-green)'
                },
                darkGreen: 'var(--dark-green)',
                beige: 'var(--beige)',
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