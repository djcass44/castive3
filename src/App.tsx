import * as React from "react";
import {MuiThemeProvider} from "@material-ui/core";
import Body from "./containers/Body";
import theme from "./theme";

export default () => (
	<div className="App">
		<MuiThemeProvider theme={theme}>
			<Body/>
		</MuiThemeProvider>
	</div>
);
