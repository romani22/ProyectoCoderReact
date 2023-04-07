import { createContext, useEffect, useState } from 'react';
import db from '../../db/firebase-config';
import { collection, getDocs } from 'firebase/firestore';
const ItemsContext = createContext();

function ProductsProvider({ children }) {
	const [Productos, setProductos] = useState([]);
	const [Item, setItem] = useState([]);

	const itemsRef = collection(db, 'items');
	const getItems = async () => {
		const itemsCollection = await getDocs(itemsRef);
		const Items = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		setProductos(Items);
	};

	const getItemsForID = async (id) => {
		const itemsCollection = await getDocs(itemsRef);
		const Items = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
		let item = Items.filter((producto) => producto.id == id);
		setItem(item[0]);
	};

	return <ItemsContext.Provider value={{ Productos, Item, getItems, getItemsForID }}>{children}</ItemsContext.Provider>;
}
export { ItemsContext, ProductsProvider };
