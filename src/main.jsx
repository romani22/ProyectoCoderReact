import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { CartProvider } from './contexts/CartShop';
import { ProductsProvider } from './contexts/ItemsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ProductsProvider>
		<CartProvider>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</CartProvider>
	</ProductsProvider>
);
