import {Button, CardActions, CardContent, IconButton, makeStyles, Theme, Tooltip, Typography} from "@material-ui/core";
import React, {ReactNode} from "react";
import Icon from "@mdi/react";
import {mdiSourcePull} from "@mdi/js";
import {usePalette} from "react-palette";
import ReactImageFallback from "react-image-fallback";
import Center from "react-center";

const useStyles = makeStyles((theme: Theme) => ({
	card: {
		borderRadius: 12,
		margin: theme.spacing(1),
		minHeight: 250
	},
	button: {
		fontFamily: "Manrope",
		fontWeight: "bold",
		textTransform: "none"
	},
	title: {
		margin: 4,
		fontFamily: "Manrope",
		fontWeight: 500
	},
	avatar: {
		height: 48,
		padding: theme.spacing(1)
	}
}));

interface AppCardProps {
	id: string;
	name: string;
	description: ReactNode;
	url?: string;
	icon?: string;
	fallbackIcon: string;
	source?: string;
	colour: string;
}

const AppCard: React.FC<AppCardProps> = ({name, description, url, icon, fallbackIcon, source, colour}) => {
	const {data, loading, error} = usePalette(icon || "");
	const actualColour = !loading && error == null ? data.vibrant : colour;

	const classes = useStyles();
	return (
		<div className={classes.card}>
			<Center>
				<ReactImageFallback className={classes.avatar} src={icon || ""} fallbackImage={
					<Icon path={fallbackIcon} color={colour} size='3.5rem'/>
				} initialImage={
					<Icon path={fallbackIcon} color={colour} size='3.5rem'/>
				}/>
			</Center>
			<CardContent>
				<Typography variant="h5" align="center" className={classes.title} style={{color: actualColour}}>
					{name}
				</Typography>
				<Typography align="center" color="textSecondary">
					{description}
				</Typography>
			</CardContent>
			<Center>
				<CardActions>
					{url != null && <Button className={classes.button} href={url} style={{color: actualColour}}>
						Open
					</Button>}
					{source != null && <Tooltip title="View source">
						<IconButton centerRipple={false} href={source}>
							<Icon path={mdiSourcePull} size={1} color={actualColour}/>
						</IconButton>
					</Tooltip>}
				</CardActions>
			</Center>
		</div>
	)
};
export default AppCard;
