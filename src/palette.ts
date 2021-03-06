export interface Theme {
	palette: PaletteGroup
}

export interface PaletteGroup {
	primary: Palette,
	secondary: Palette,
	warning: Palette,
	error: Palette,
	info: Palette,
	success: Palette,
	text: {
		primary: string,
		secondary: string
	}
	background: {
		default: string,
		paper: string
	},
	type: string
}

export interface Palette {
	main: string,
	light: string,
	dark: string
}

export const light = {
	primary: {
		main: "#4285F4",
		light: "#80b4ff",
		dark: "#0059c1"
	},
	secondary: {
		main: "#172B4d",
		light: "#445379",
		dark: "#000025"
	},
	warning: {
		main: "#F4B400",
		light: "#FFE380",
		dark: "#FF8B00"
	},
	error: {
		main: "#DB4437",
		light: "#FFEBE5",
		dark: "#BF2600"
	},
	info: {
		main: "#6554C0",
		light: "#EAE6FF",
		dark: "#5243AA"
	},
	success: {
		main: "#0F9D58",
		light: "#E3FCEF",
		dark: "#00875A"
	},
	background: {
		paper: "#FFFFFF",
		default: "#FAFAFA"
	},
	text: {
		primary: "rgba(0, 0, 0, 0.87)",
		secondary: "rgba(0, 0, 0, 0.67)",
		disabled: "rgba(0, 0, 0, 0.38)",
		hint: "rgba(0, 0, 0, 0.38)"
	},
	type: "light"
};

export const dark = {
	primary: {
		main: "#294ab4",
		light: "#2171cd",
		dark: "#0d3772"
	},
	secondary: {
		main: "#304FFE",
		light: "#3F51B5",
		dark: "#181d3e"
	},
	warning: {
		main: "#cd6700",
		light: "#e69400",
		dark: "#b44400"
	},
	error: {
		main: "#b40000",
		light: "#cd3a35",
		dark: "#921c1c"
	},
	info: {
		main: "#403294",
		light: "#6554C0",
		dark: "#37155c"
	},
	success: {
		main: "#00C853",
		light: "#4CAF50",
		dark: "#1B5E20"
	},
	background: {
		paper: "#242424",
		default: "#121212"
	},
	type: "dark"
};
