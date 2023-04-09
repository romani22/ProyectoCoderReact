import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer';
import ViewHome from './components/ViewHome';
import Checkout from './components/Checkout';
import ViewNotFound from './components/ViewNotFound';

function App() {
	return (
		<div className="margin">
			<NavBar />
			<Routes>
				<Route path="/" element={<Navigate to="/home" />} />
				<Route path="/home" element={<ViewHome />} />
				<Route path="/productos/:category" element={<ItemListContainer />} />
				<Route path="/:url/:id" element={<ItemDetailContainer />} />
				<Route path="/cart" element={<Checkout />} />
				<Route path="*" element={<ViewNotFound />} />
			</Routes>
		</div>
	);
}

export default App;
