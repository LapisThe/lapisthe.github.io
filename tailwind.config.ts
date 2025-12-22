const { default: flattenColorPalette } = require("tailwindcss/lib/util/flattenColorPalette");

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

	addBase({
		":root": newVars,
	});
}

const config: Config = {
	content: ["./src/app/**/*.{ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
	},
	plugins: [addVariablesForColors],
};
export default config;
