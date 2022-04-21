import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateAdvert from "./pages/CreateAdvert";
import SingleAdvert from "./pages/SingleAdvert";
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
					<Route path="/view_advert/:id" element={<SingleAdvert />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
