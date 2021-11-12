import React,{useState} from "react";

function PlantCard({plant}) {
  const [available, setAvailable] = useState(true)
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {available ? (
        <button onClick={()=> setAvailable(!available)} className="primary">In Stock</button>
      ) : (
        <button onClick={()=> setAvailable(!available)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
