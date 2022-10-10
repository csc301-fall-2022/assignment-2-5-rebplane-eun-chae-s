import React from 'react';

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
