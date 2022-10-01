import React, { useState } from 'react';
import Item from "./Item"

function ItemTable(props) {

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
      </table>
    </div>
  );
}

export default ItemTable;
