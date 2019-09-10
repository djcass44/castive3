import {Button, Card, CardActions, CardContent, IconButton, makeStyles, Tooltip, Typography} from "@material-ui/core";
import React from "react";
import Icon from "@mdi/react";
import {mdiSourcePull} from "@mdi/js";
import Avatar from "@material-ui/core/Avatar";
import {usePalette} from "react-palette";
import ReactImageFallback from "react-image-fallback";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
	card: {
		borderRadius: 12,
		margin: 16
	},
	title: {
		margin: 4
	},
	avatar: {
		backgroundColor: 'transparent',
		width: 96,
		height: 96,
		float: 'left',
		margin: 16
	}
}));

const AppCard = ({name, description, url, icon, fallbackIcon, source, colour}) => {
	const {data, loading, error} = usePalette(icon);
	const actualColour = loading === false && error == null ? data.vibrant : colour;

	const classes = useStyles();
	return (
		<Card className={classes.card}>
			<CardContent>
				<Avatar component={'div'} className={classes.avatar}>
					<ReactImageFallback style={{borderRadius: 64}} src={icon} fallbackImage={
						<Icon path={fallbackIcon} color={colour} size={'3.5rem'}/>
					} initialImage={
						<Icon path={fallbackIcon} color={colour} size={'3.5rem'}/>
					}/>
				</Avatar>
				<Typography variant={"h5"} className={classes.title} style={{color: actualColour}}>
					{name}
				</Typography>
				<Typography>
					{description}
				</Typography>
			</CardContent>
			<CardActions>
				{url != null && <Button href={url} style={{color: actualColour}}>Open</Button>}
				{source != null && <Tooltip title={"View source"}>
					<IconButton centerRipple={false} href={source}>
						<Icon path={mdiSourcePull} size={1} color={actualColour}/>
					</IconButton>
				</Tooltip>}
			</CardActions>
		</Card>
	)
};
AppCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	description: PropTypes.node.isRequired,
	url: PropTypes.string,
	icon: PropTypes.string,
	fallbackIcon: PropTypes.node.isRequired,
	source: PropTypes.string,
	colour: PropTypes.string.isRequired
};
AppCard.defaultProps = {
	url: null,
	icon: "",
	source: ""
};
export default AppCard;
