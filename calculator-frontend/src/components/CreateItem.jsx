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
    if (item.name !== "" && item.quantity >= 0 && item.price >= 0) {
      item.price = Math.round(item.price * 100) / 100;
      props.addItem(item);
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


  return(
    <form className="createItem">
    <table>
      <tbody>
      <td><input onChange={handleChange} name="name" value={item.name} placeholder="Item Name" required/></td>
      <td><input type="number" onChange={handleChange} name="quantity" value={item.quantity} placeholder="Quantity" required/></td>
      <td><input type="number" onChange={handleChange} name="price" value={item.price} placeholder="Price" required/></td>
      <td><button className="btn btn-dark btn-custom" onChange={handleChange} onClick={submitItem}> Add Item </button></td>
      </tbody>
    </table>
    </form>
  );
}

export default CreateItem;
