import React, {useRef} from "react";

function NewPlantForm({addNewPlant}) {
  const name = useRef('')
  const image = useRef('')
  const price = useRef('')

  function handlePlantSubmit(e) {
    e.preventDefault()
  
  const newPlant ={
    name: name.current.value, 
    image: image.current.value,
    price: price.current.value
  }

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPlant)
    }).then(res => res.json())
    .then(addNewPlant)
    
    e.currentTarget.reset()
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handlePlantSubmit}>
        <input ref={name} type="text" name="name" placeholder="Plant name" />
        <input ref={image} type="text" name="image" placeholder="Image URL" />
        <input ref={price} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
