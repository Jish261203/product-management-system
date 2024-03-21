	import AddProduct from "./components/AddProduct";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import EditProduct from "./components/EditProduct";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Index from "./components/Index";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<Index/>}></Route>

				<Route path="/home" element={<Home />}></Route>
				<Route path="/addProduct" element={<AddProduct />}></Route>
				<Route path="/editProduct/:id" element={<EditProduct />}></Route>
				<Route path="/register" element={<Register />}></Route>
				<Route path="/login" element={<Login />}></Route>
			</Routes>
		</>
	);
}

export default App;
