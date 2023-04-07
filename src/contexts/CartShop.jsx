import { createContext, useState } from 'react';

const CartShopContext = createContext();

function CartProvider({ children }) {
	const [cartItems, setCartItems] = useState([]);

	const addToCart = (item, quantity) => {
		item.cantidad = quantity;
		const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
		if (itemExists) {
			const newCartItems = cartItems.map((cartItem) => (cartItem.id === item.id ? { ...cartItem, cantidad: quantity } : cartItem));
			setCartItems(newCartItems);
		} else {
			setCartItems([...cartItems, item]);
		}
	};
	const removeFromCart = (itemId) => {
		const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
		setCartItems(updatedCartItems);
	};
	const getCartCount = () => {
		const cantidadTotal = Object.values(cartItems).reduce((acumulador, objeto) => {
			return acumulador + objeto.cantidad;
		}, 0);
		return cantidadTotal;
	};
	return <CartShopContext.Provider value={{ cartItems, addToCart, removeFromCart, getCartCount }}>{children}</CartShopContext.Provider>;
}
export { CartShopContext, CartProvider };
