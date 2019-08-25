import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";
import Body from "./containers/Body";

const App = () => (
	<div className="App">
		<MuiThemeProvider>
			<Body/>
		</MuiThemeProvider>
	</div>
);

export default App;
