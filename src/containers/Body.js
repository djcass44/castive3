import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import {Route, Switch} from "react-router-dom";
import Home from "./Home";

const useStyles = makeStyles(theme => ({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 24
	},
	centered: {
		flex: 1,
		justifyContent: 'center'
	},
	padding: {
		display: 'none',
		[theme.breakpoints.up('sm')]: {
			display: 'initial'
		}
	}
}));

export default () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Grid className={classes.centered} container spacing={5}>
				<Grid className={classes.padding} item sm={2}/>
				<Grid item xs={12} sm={8}>
					<Switch>
						<Route path="/" component={Home}/>
					</Switch>
				</Grid>
				<Grid className={classes.padding} item sm={2}/>
			</Grid>
		</div>
	)
};