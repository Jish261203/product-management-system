import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";

const Home = () => {
	const [productList, setProductList] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [msg, setMsg] = useState("");

	useEffect(() => {
		init();
	}, []);

	const init = () => {
		productService
			.getAllProduct()
			.then((res) => {
				setProductList(res.data);
				setFilteredProducts(res.data); // Initialize filteredProducts with all products
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const deleteProduct = (id) => {
		productService
			.deleteProduct(id)
			.then((res) => {
				setMsg("Delete Successfully");
				init();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Function to handle search
	const handleSearch = (e) => {
		const query = e.target.value;
		setSearchQuery(query);
		const filtered = productList.filter((product) =>
			product.productName.toLowerCase().includes(query.toLowerCase())
		);
		setFilteredProducts(filtered);
	};

	return (
		<>
			<div className="container mt-3">
				<div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-header fs-3 text-center">
								All Product List
								{msg && <p className="fs-4 text-center text-success">{msg}</p>}
							</div>

							<div className="card-body">
								{/* Search Input Field */}
								<input
									type="text"
									className="form-control mb-3"
									placeholder="Search by product name"
									value={searchQuery}
									onChange={handleSearch}
								/>

								<table className="table">
									<thead>
										<tr>
											<th scope="col">Sl No</th>
											<th scope="col">Product Name</th>
											<th scope="col">Description</th>
											<th scope="col">Price</th>
											<th scope="col">Status</th>
											<th scope="col">Action</th>
										</tr>
									</thead>
									<tbody>
										{filteredProducts.map((p, index) => (
											<tr key={index}>
												<td>{index + 1}</td>
												<td>{p.productName}</td>
												<td>{p.description}</td>
												<td>{p.price}</td>
												<td>{p.status}</td>
												<td>
													<Link
														to={"editProduct/" + p.id}
														className="btn btn-sm btn-primary">
														Edit
													</Link>
													<button
														onClick={() => deleteProduct(p.id)}
														className="btn btn-sm btn-danger ms-1">
														Delete
													</button>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
