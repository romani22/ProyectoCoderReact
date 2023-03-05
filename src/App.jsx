import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<NavBar />
			<div className='itemCenter'>
				<ItemListContainer greeting='HOLA' />
			</div>
		</>
	);
}

export default App;
