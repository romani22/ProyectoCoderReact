import { collection, addDoc } from 'firebase/firestore';
import db from './firebase-config.js';
import Productos from '../public/MaterialsPetShop.js';

const itemsCollectionRef = collection(db, 'items');

const promises = Productos.map((product) => addDoc(itemsCollectionRef, product));

Promise.all(promises).then(() => {
	console.log('Done!');
	process.exit(0);
});
