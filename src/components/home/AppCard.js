import {Card, CardActions, CardContent, Typography, Button, makeStyles, IconButton, CardMedia} from "@material-ui/core";
import React from "react";
import Icon from "@mdi/react";
import {mdiSourcePull} from "@mdi/js";

const useStyles = makeStyles(() => ({
	card: {
		borderRadius: 12
	},
	media: {
		maxHeight: 128,
		maxWidth: 128,
		float: 'left'
	}
}));

const AppCard = ({name, description, url, source, colour}) => {
	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardMedia className={classes.media} component={'img'} image={`${url}/favicon.png`} title={`${name} icon`}/>
			<CardContent>
				<Typography variant={"h3"}>
					{name}
				</Typography>
				<Typography>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				<Button href={url} color={"primary"}>Open</Button>
				{source != null && <IconButton centerRipple={false} href={source}>
					<Icon path={mdiSourcePull} size={1} color={colour}/>
				</IconButton>}
			</CardActions>
		</Card>
	)
};
export default AppCard;