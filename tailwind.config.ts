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
                smooth: {
                    green: 'var(--smooth-green)',
                    beige: 'var(--smooth-beige)',
                },
                brown: 'var(--brown)',
                beige: 'var(--beige)',
                darkGreen: 'var(--dark-green)',
                white: 'var(--white)',
                disabled : 'var(--disabled)',
                lightGrey: 'var(--light-grey)',
            },
            borderRadius: {
                default: '4px',
            },
            fontSize:{
                h1: 'var(--h1-size)',
                h2: 'var(--h2-size)',
                h3: 'var(--h3-size)',
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};

export default config;
