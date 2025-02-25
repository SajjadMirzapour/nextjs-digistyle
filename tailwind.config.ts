import type { Config } from "tailwindcss";

export default {
    content: [
        // "src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
        // "src/app/components/**/*.{js,ts,jsx,tsx,mdx}",
        "src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
            },
            screens: {
                sm: "450px",
                md: "769px",
            },
        },
        keyframes: {
            shimmer: {
                "100%": {
                    transform: "translateX(100%)",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
