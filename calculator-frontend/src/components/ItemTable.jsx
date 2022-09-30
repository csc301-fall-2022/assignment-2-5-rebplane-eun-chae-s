import React from 'react';
import Item from "./Item"

function ItemTable() {

  // function addItem(event) {
  //
  // }
  //
  // function deleteItem(event) {
  //
  // }

  return (
    <div>
      <table>
      <thead>
        <tr>
          <th>Item Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <Item/>
        </tbody>
      </table>
    </div>
  );
}

export default ItemTable;
