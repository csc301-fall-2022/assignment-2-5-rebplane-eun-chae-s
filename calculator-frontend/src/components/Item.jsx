import React from 'react';

function Item() {
  return (
    <tr>
      <td> Test item </td>
      <td> 10 </td>
      <td> $5.99 </td>
      <td> <button className="deleteButton">-</button></td>
    </tr>
  );
}

export default Item;
