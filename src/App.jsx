import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetail from './components/ItemDetail';
import ViewHome from './components/ViewHome';
function App() {
	const [Productos, setProductos] = useState([]);
	useEffect(() => {
		fetch('../../public/MaterialsPetShop.json')
			.then((res) => res.json())
			.then((data) => {
				setProductos(data);
			});
	}, []);
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<ViewHome />} />
				<Route path="/productos/:category" element={<ItemListContainer productos={Productos} />} />
				<Route path="/productos/:category/:id" element={<ItemDetail items={Productos} />} />
				<Route path="*" element={<h3>404 Not Found</h3>} />
			</Routes>
		</div>
	);
}

export default App;
