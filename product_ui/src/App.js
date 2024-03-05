import "./App.css";
import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/addProduct" element={<AddProduct />}></Route>
			</Routes>
		</>
	);
}

export default App;
