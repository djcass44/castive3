import {mdiCallMerge, mdiImageOutline, mdiLambda, mdiPackageUp, mdiPostOutline, mdiProgressWrench} from "@mdi/js";
import React from "react";

export default [
	{
		name: "JMP",
		description: "Application used for quickly navigating to links/urls.",
		url: "https://jmp.castive.dev",
		icon: "https://icon.jmp.castive.dev/icon?site=https://jmp.castive.dev",
		fallbackIcon: mdiCallMerge,
		source: "https://github.com/djcass44/jmp",
		colour: "#4285F4",
		app: true
	},
	{
		name: "Fav2",
		description: <span>
				Application for capturing &amp; serving image favicons from external websites.<br/><br/>
				<code>docker run -p 8080:8080 djcass44/fav2:master</code>
			</span>,
		url: "https://icon.jmp.castive.dev",
		icon: "https://icon.jmp.castive.dev/icon?site=https://icon.jmp.castive.dev",
		fallbackIcon: mdiImageOutline,
		source: "https://github.com/djcass44/fav2",
		colour: "#DB4437",
		app: true
	},
	{
		name: "Castive",
		description: <span>
			This website! This site was built in ReactJS using a combination of ES6 JavaScript and TypeScript and used the material-ui framework.
		</span>,
		url: "https://castive.dev",
		icon: "https://icon.jmp.castive.dev/icon?site=castive.dev",
		fallbackIcon: mdiProgressWrench,
		source: "https://github.com/djcass44/castive3",
		colour: "#3F51B5",
		app: true
	},
	{
		name: "Log2",
		description: <span>
				Kotlin library for simple logging. It allows for you to reduce the setup required for logging. <br/>(Should be on Maven Central soon!)<br/><br/>
				<code>implementation("com.github.djcass44:log2:3.4")</code>
			</span>,
		fallbackIcon: mdiPostOutline,
		source: "https://github.com/djcass44/log2",
		colour: "#F4B400"
	},
	{
		name: "aws-lambda-shellstart",
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
				A simple Drone CI plugin to package a Helm chart and push it to S3
			</span>,
		fallbackIcon: mdiPackageUp,
		source: "https://github.com/djcass44/drone-helm-s3",
		colour: "#9C27B0"
	}
];