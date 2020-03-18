import {
	mdiCallMerge,
	mdiElephant,
	mdiFileDocumentEditOutline,
	mdiImageOutline,
	mdiPostOutline,
	mdiProgressWrench
} from "@mdi/js";
import React from "react";

export default [
	{
		name: "JMP",
		description: "Application used for quickly navigating to links/urls.",
		url: "https://jmp.castive.dev",
		icon: "jmp.castive.dev",
		fallbackIcon: mdiCallMerge,
		source: "https://github.com/djcass44/jmp",
		colour: "#4285F4",
		app: true
	},
	{
		name: "Fav2",
		description: <span>
				Application for capturing &amp; serving image favicons from external websites.<br/><br/>
			</span>,
		url: "https://icon.dcas.dev/swagger-ui.html",
		icon: "spring.io",
		fallbackIcon: mdiImageOutline,
		source: "https://github.com/djcass44/fav2",
		colour: "#0F9D58",
		app: true
	},
	{
		name: "Wiki",
		description: "Application for writing notes/documentation in Markdown format.",
		url: "https://wiki.dcas.dev",
		icon: "wiki.dcas.dev",
		fallbackIcon: mdiFileDocumentEditOutline,
		colour: "#4285F4",
		app: true
	},
	{
		name: "Gradle Util Plugin",
		description: "Simple Gradle plugin for Kotlin DSL utilities",
		url: "https://plugins.gradle.org/plugin/dev.dcas.gradle-util",
		icon: "plugins.gradle.org",
		fallbackIcon: mdiElephant,
		source: "https://github.com/djcass44/gradle-util-plugin",
		colour: "#02303A",
		app: false
	},
	{
		name: "dcas.dev",
		description: <span>
			This website!
		</span>,
		url: "https://dcas.dev",
		icon: "dcas.dev",
		fallbackIcon: mdiProgressWrench,
		source: "https://github.com/djcass44/castive3",
		colour: "#3F51B5",
		app: true
	},
	{
		name: "Log2",
		description: <span>
				Kotlin library for simple logging. It allows for you to reduce the setup required for logging.
			</span>,
		fallbackIcon: mdiPostOutline,
		source: "https://github.com/djcass44/log2",
		colour: "#FF8B00"
	}
];