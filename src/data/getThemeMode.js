export const LS_DARK = "data-theme";

export default () => {
	// get the theme that the browser/os wants (dark or light)
	const dark = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
	const theme = localStorage.getItem(LS_DARK) === "true" ? "dark" : dark ? "dark" : "light";
	// inform the css about which theme we're using
	document.documentElement.setAttribute("data-theme", theme);
	return theme;
}