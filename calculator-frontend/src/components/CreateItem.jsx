import React from 'react';

function CreateItem() {
  return (
    <div className="form">
        <form className="createItem">
        Item Name <br/>
        <input name="name" placeholder="Item Name"/> <br/>
        Quantity <br/>
        <input name="quantity" id="quantity" placeholder="Quantity"/><br/>
        Price <br/>
        <input name="Price" id="price" placeholder="Price"/><br/>
        <button className="largeButton"> Add Item </button>
        </form>
    </div>
  );
}

export default CreateItem;
