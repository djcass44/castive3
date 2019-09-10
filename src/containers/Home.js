import React, {useState} from "react";
import AppCard from "../components/home/AppCard";
import "typeface-roboto";
import {Collapse, IconButton, ListSubheader, makeStyles, Typography, useTheme} from "@material-ui/core";
import {mdiChevronDown, mdiChevronRight} from "@mdi/js";
import Icon from "@mdi/react";
import data from "../data";

const useStyles = makeStyles(theme => ({
	title: {
		textAlign: 'center',
		color: theme.palette.primary.main
	},
	credit: {
		textAlign: 'center',
		justifyContent: 'center'
	}
}));

export default () => {
	// hooks
	const classes = useStyles();
	const theme = useTheme();

	const cards = [];
	data.forEach(i => {
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
	data.forEach(i => {
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

	const [showApps, setShowApps] = useState(true);
	const [showOther, setShowOther] = useState(true);

	return (
		<div>
			<Typography className={classes.title} variant={"h2"}>
				Castive dot Dev
			</Typography>
			<ListSubheader inset>
				Apps
				<IconButton centerRipple={false} size={"small"} onClick={() => setShowApps(!showApps)}>
					<Icon path={showApps === true ? mdiChevronDown : mdiChevronRight} size={1}
					      color={theme.palette.text.secondary}/>
				</IconButton>
			</ListSubheader>
			<Collapse in={showApps}>
				{cards}
			</Collapse>
			<ListSubheader inset>
				Libraries &amp; experiments
				<IconButton centerRipple={false} size={"small"} onClick={() => setShowOther(!showOther)}>
					<Icon path={showOther === true ? mdiChevronDown : mdiChevronRight} size={1}
					      color={theme.palette.text.secondary}/>
				</IconButton>
			</ListSubheader>
			<Collapse in={showOther}>
				{experiments}
			</Collapse>
			<div className={classes.credit}>
				Django Cass © 2019
			</div>
		</div>
	)
};