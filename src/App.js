import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateAdvert from "./pages/CreateAdvert";
import Header from "./components/Header";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/new_advert" element={<CreateAdvert />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
