import React, {useState} from "react";
import "typeface-roboto";
import {Grid, IconButton, Link, makeStyles, Tooltip, Typography} from "@material-ui/core";
import data from "../data";
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
	grid: {
		padding: theme.spacing(4)
	},
	credit: {
		textAlign: "center",
		justifyContent: "center"
	}
}));

export default () => {
	// hooks
	const classes = useStyles();

	const [dark, setDark] = useState(getThemeMode() === "dark");

	const toggleTheme = () => {
		localStorage.setItem(LS_DARK, (!dark).toString());
		setDark(!dark);
		window.location.reload();
	};

	return (
		<div>
			<Typography className={classes.title} variant="h2">
				Django Cass
			</Typography>
			<Typography color="secondary" className={classes.credit}>
				<Link href="mailto:django@dcas.dev">Contact me</Link>
				&nbsp;&nbsp;
				<Tooltip title="Toggle theme">
					<IconButton size="small" centerRipple={false} onClick={() => toggleTheme()}>
						{dark ? <HdrStrong/> : <HdrWeak/>}
					</IconButton>
				</Tooltip>
				&nbsp;&nbsp;
				<Link href="https://github.com/djcass44">My work</Link>
			</Typography>
			<Grid className={classes.grid} container spacing={1}>
				{data.map(i => {
					return (
						<Grid item md={12} lg={4}>
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
						</Grid>
					);
				})}
			</Grid>
			<div className={classes.credit}>
				<Link href="https://github.com/djcass44/castive3">View source</Link>
			</div>
		</div>
	)
};