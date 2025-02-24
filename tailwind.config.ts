import type {Config} from "tailwindcss";

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
                primaryBrown: 'var(--primary-brown)'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
