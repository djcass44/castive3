import React from "react";
import AppCard from "../components/home/AppCard";
import "typeface-roboto";
import {ListSubheader, makeStyles, Typography} from "@material-ui/core";
import {mdiCallMerge, mdiCloudOutline, mdiImageOutline, mdiPhoneLog, mdiPostOutline} from "@mdi/js";

const useStyles = makeStyles(theme => ({
	title: {
		textAlign: 'center',
		color: theme.palette.primary.main
	}
}));

const Home = () => {
	const classes = useStyles();
	const apps = [
		{
			name: "JMP",
			description: "Application used for quickly navigating to links/urls",
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
				Application for scraping/loading image favicons from websites.<br/><br/>
				<code>docker run -p 8080:8080 djcass44/fav2:master</code>
			</span>,
			url: "https://icon.jmp.castive.dev",
			icon: "https://icon.jmp.castive.dev/icon?site=https://icon.jmp.castive.dev",
			fallbackIcon: mdiImageOutline,
			source: "https://github.com/djcass44/fav2",
			colour: "#DB4437"
		},
		{
			name: "Log2",
			description: <span>
				Kotlin library for simple logging. It allows for you to reduce the setup required for logging.<br/><br/>
				<code>implementation("dev.castive:log2:SNAPSHOT")</code>
			</span>,
			fallbackIcon: mdiPostOutline,
			source: "https://github.com/djcass44/log2",
			colour: "#F4B400"
		},
	];

	const cards = [];
	apps.forEach(i => {
		if(i.app === true) {
			cards.push(
				<AppCard
					key={i.name}
					id={i.name}
					name={i.name}
					description={i.description}
					url={i.url}
					icon={i.icon}
					fallbackIcon={i.fallbackIcon}
					source={i.source}
					colour={i.colour}
				/>
			);
		}
	});
	const experiments = [];
	apps.forEach(i => {
		if(i.app == null || i.app === false) {
			experiments.push(
				<AppCard
					key={i.name}
					id={i.name}
					name={i.name}
					description={i.description}
					url={i.url}
					icon={i.icon}
					fallbackIcon={i.fallbackIcon}
					source={i.source}
					colour={i.colour}
				/>
			);
		}
	});
	return (
		<div>
			<Typography className={classes.title} variant={"h2"}>
				Castive dot Dev
			</Typography>
			<ListSubheader inset>Apps</ListSubheader>
			{cards}
			<ListSubheader inset>Libraries & Experiments</ListSubheader>
			{experiments}
		</div>
	)
};
export default Home;