import React from "react";
import {Grid, makeStyles} from "@material-ui/core";
import {Route} from "react-router-dom";
import Home from "./Home";
import {withRouter, Switch} from "react-router-dom";

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

const Body = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Grid className={classes.centered} container spacing={5}>
				<Grid className={classes.padding} item sm={2}/>
				<Grid item xs={12} sm={8}>
					<Switch>
						<Route exact path="/" component={Home}/>
					</Switch>
				</Grid>
				<Grid className={classes.padding} item sm={2}/>
			</Grid>
		</div>
	)
};
export default withRouter(Body);