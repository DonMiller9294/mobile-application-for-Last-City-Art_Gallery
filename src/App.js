import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TheNav from "./TheNav";
import TheArt from "./TheArt";
import Endparagraph from "./Endparagraph";
import Appointment from "./Appointment";

function App() {
	return (
		<div className="App">
			<TheNav />
			<TheArt />
			<Endparagraph />
			<Appointment />
		</div>
	);
}

export default App;
