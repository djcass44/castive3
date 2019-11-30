import React, {useState} from "react";
import "typeface-roboto";
import {Collapse, IconButton, Link, ListSubheader, makeStyles, Tooltip, Typography, useTheme} from "@material-ui/core";
import {mdiChevronDown, mdiChevronRight} from "@mdi/js";
import Icon from "@mdi/react";
import data from "../data";
import {Theme} from "../palette";
import HdrWeak from "@material-ui/icons/HdrWeak";
import HdrStrong from "@material-ui/icons/HdrStrong";
import getThemeMode, {LS_DARK} from "../data/getThemeMode";
import AppCard from "../components/home/AppCard";

const useStyles = makeStyles(theme => ({
	title: {
		textAlign: "center",
		color: theme.palette.primary.main,
		fontFamily: "Manrope",
		fontWeight: 500,
		padding: theme.spacing(2)
	},
	credit: {
		textAlign: 'center',
		justifyContent: 'center'
	}
}));

export default () => {
	// hooks
	const classes = useStyles();
	const theme = useTheme<Theme>();

	const [dark, setDark] = useState(getThemeMode() === "dark");

	const toggleTheme = () => {
		localStorage.setItem(LS_DARK, (!dark).toString());
		setDark(!dark);
		window.location.reload();
	};

	const [showApps, setShowApps] = useState(true);
	const [showOther, setShowOther] = useState(true);

	return (
		<div>
			<Typography className={classes.title} variant="h2">
				Django Cass
			</Typography>
			<Typography color="secondary" className={classes.credit}>
				<Link href="mailto:django@dcas.dev">Contact me</Link>&nbsp;&bull;&nbsp;
				<Tooltip title="Toggle theme">
					<IconButton size="small" centerRipple={false} onClick={() => toggleTheme()}>
						{dark ? <HdrStrong/> : <HdrWeak/>}
					</IconButton>
				</Tooltip>
			</Typography>
			<ListSubheader inset>
				Apps
				<IconButton centerRipple={false} size="small" onClick={() => setShowApps(!showApps)}>
					<Icon path={showApps ? mdiChevronDown : mdiChevronRight} size={1}
					      color={theme.palette.text.secondary}/>
				</IconButton>
			</ListSubheader>
			<Collapse in={showApps}>
				{data.map(i => {
					if (!i.app)
						return null;
					return (
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
				})}
			</Collapse>
			<ListSubheader inset>
				Libraries &amp; experiments
				<IconButton centerRipple={false} size="small" onClick={() => setShowOther(!showOther)}>
					<Icon path={showOther ? mdiChevronDown : mdiChevronRight} size={1}
					      color={theme.palette.text.secondary}/>
				</IconButton>
			</ListSubheader>
			<Collapse in={showOther}>
				{data.map(i => {
					if (i.app) return null;
					return (
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
				})}
			</Collapse>
			<div className={classes.credit}>
				<Link href="https://github.com/djcass44/castive3">View source</Link>
			</div>
		</div>
	)
};