import React, { useState } from 'react';

function CreateItem(props) {

  const [item, setItem] = useState({
      name: "",
      quantity: 0,
      price: 0
  });

  function handleChange(event) {
    setItem(prevItem => {
      return {
        ...prevItem,
        [event.target.name]: event.target.value
      };
    });
  }

  function submitItem(event) {
    if (item.name !== "" && item.quantity > 0 && item.price >= 0) {
      props.addItem(item)
      {/* Reset the item state variables*/}
      setItem({
        name: "",
        quantity: 0,
        price: 0
      })
    }
    else {
      alert("Plase enter a valid item name, quantity and price.")
    }
    {/* Prevents page refresh */}
    event.preventDefault();
  }

  return (
    <div className="form">
        <form className="createItem">
        Item Name <br/>
        <input onChange={handleChange} name="name" value={item.name} placeholder="Item Name" required/> <br/>
        Quantity <br/>
        <input type="number" onChange={handleChange} name="quantity" value={item.quantity} placeholder="Quantity" required/><br/>
        Price <br/>
        <input type="number" onChange={handleChange} name="price" value={item.price} placeholder="Price" required/><br/>
        <button className="largeButton" onChange={handleChange} onClick={submitItem}> Add Item </button>
        </form>
    </div>
  );
}

export default CreateItem;
