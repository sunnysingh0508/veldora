import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                veldora: {
                    bg: "#0b0f14",
                    accent: {
                        primary: "#3b82f6",
                        secondary: "#06b6d4",
                    },
                    text: {
                        primary: "#e5e7eb",
                        muted: "#9ca3af",
                    },
                },
            },
        },
    },
    plugins: [],
};
export default config;
