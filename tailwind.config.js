/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: "#10C1B4",
                secondary: "#1E4853",
                accent: "#153D84",
                "accent-light": "#A5B8E3",
                "background-light": "#FFFFFF",
                "background-dark": "#0A1114",
            },
            fontFamily: {
                display: ["Montserrat", "sans-serif"],
                sans: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/container-queries'),
    ],
}
