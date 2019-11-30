import {
	mdiCallMerge,
	mdiFileDocumentEditOutline,
	mdiImageOutline,
	mdiLambda,
	mdiPackageUp,
	mdiPostOutline,
	mdiProgressWrench,
	mdiSecurity
} from "@mdi/js";
import React from "react";

export default [
	{
		name: "JMP",
		description: "Application used for quickly navigating to links/urls.",
		url: "https://jmp.castive.dev",
		icon: "https://icon.dcas.dev/icon?site=https://jmp.castive.dev",
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
		icon: "https://icon.dcas.dev/icon?site=https://spring.io",
		fallbackIcon: mdiImageOutline,
		source: "https://github.com/djcass44/fav2",
		colour: "#0F9D58",
		app: true
	},
	{
		name: "Wiki",
		description: "Application for writing notes/documentation in Markdown format.",
		url: "https://wiki.dcas.dev",
		icon: "https://icon.dcas.dev/icon?site=https://wiki.dcas.dev",
		fallbackIcon: mdiFileDocumentEditOutline,
		colour: "#4285F4",
		app: true
	},
	{
		name: "Microauth",
		description: "Not-so-micro-service for delegated authentication.",
		url: "https://auth.dcas.dev",
		icon: "https://icon.dcas.dev/icon?site=https://auth.dcas.dev",
		fallbackIcon: mdiSecurity,
		colour: "#0F9D58",
		app: true
	},
	{
		name: "dcas.dev",
		description: <span>
			This website!
		</span>,
		url: "https://castive.dev",
		icon: "https://icon.dcas.dev/icon?site=castive.dev",
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
	},
	{
		name: "shellstart",
		description: <span>
				AWS Lambda used for updating image(s) within a remote docker-compose deployment.
			</span>,
		fallbackIcon: mdiLambda,
		source: "https://github.com/djcass44/aws-lambda-shellstart",
		colour: "#0F9D58"
	},
	{
		name: "drone-helm-s3",
		description: <span>
				A simple Drone CI plugin to package a Helm chart and push it to an S3 helm registry
			</span>,
		fallbackIcon: mdiPackageUp,
		source: "https://github.com/djcass44/drone-helm-s3",
		colour: "#9C27B0"
	}
];