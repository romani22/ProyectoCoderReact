import CardItem from '../CardItem';

const ItemListContainer = ({ productos }) => {
	return (
		<div className="container">
			{productos.map((producto, i) => {
				return (
					<CardItem
						identificacion={i}
						greeting="Mensaje "
						raza={producto.name}
						imagen={producto.image_link}
						id={producto.id}
					/>
				);
			})}
		</div>
	);
};

export default ItemListContainer;
