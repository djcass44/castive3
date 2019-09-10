import prefersColorScheme from "prefers-color-scheme";

export const LS_DARK = "data-theme";

export default () => {
	// get the theme that the browser/os wants (dark or light)
	const wantedTheme = prefersColorScheme();
	const theme = localStorage.getItem(LS_DARK) === "true" ? "dark" : wantedTheme;
	// inform the css about which theme we're using
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
}