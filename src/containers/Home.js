import React from "react";
import AppCard from "../components/home/AppCard";
import "typeface-roboto";
import {ListSubheader, makeStyles, Typography} from "@material-ui/core";

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
			source: "https://github.com/djcass44/jmp",
			colour: "#4285F4"
		}
	];

	const cards = [];
	apps.forEach(i => cards.push(<AppCard key={i.name} id={i.name} name={i.name} description={i.description} url={i.url} source={i.source} colour={i.colour}/>));
	return (
		<div>
			<Typography className={classes.title} variant={"h2"}>
				Castive dot Dev
			</Typography>
			<ListSubheader inset>Apps</ListSubheader>
			{cards}
		</div>
	)
};
export default Home;