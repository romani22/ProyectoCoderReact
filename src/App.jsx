import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
function App() {
	const [Prodructos, setProdructos] = useState([]);
	const getProdructos = async () => {
		const result = await fetch(`https://api.api-ninjas.com/v1/dogs?trainability=5`, {
			headers: { 'X-Api-Key': 'IlgUCArWly+/1FjOBaoMww==0U1GuSxGn6o4Wj4m' },
			contentType: 'application/json',
		});
		const data = await result.json();
		setProdructos(data);
	};
	useEffect(() => {
		getProdructos();
	}, []);
	return (
		<div>
			<NavBar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<ItemListContainer productos={Prodructos} />} />
			</Routes>
		</div>
	);
}

export default App;
