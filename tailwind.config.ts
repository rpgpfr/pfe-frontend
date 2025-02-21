import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}"
    ],
    theme: {
        extend: {
            colors: {
                primaryGreen: 'var(--primary-green)',
                secondaryGreen: 'var(--secondary-green)',
                smoothGreen: 'var(--smooth-green)',
                smoothBeige: 'var(--smooth-beige)',
                beige: 'var(--beige)',
                primaryBrown: 'var(--primary-brown)',
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
