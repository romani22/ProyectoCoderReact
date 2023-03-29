import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
	apiKey: 'AIzaSyB0L2ADIJAs6u5t_qJvhijBIZgId8j8jX0',
	authDomain: 'ecommerce-1cdc3.firebaseapp.com',
	projectId: 'ecommerce-1cdc3',
	storageBucket: 'ecommerce-1cdc3.appspot.com',
	messagingSenderId: '561978467410',
	appId: '1:561978467410:web:4cb3f9d1cc5383e7c6eb8b',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
