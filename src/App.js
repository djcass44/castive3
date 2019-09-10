import React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import Body from "./containers/Body";

export default () => (
	<div className="App">
		<MuiThemeProvider>
			<Body/>
		</MuiThemeProvider>
	</div>
);
