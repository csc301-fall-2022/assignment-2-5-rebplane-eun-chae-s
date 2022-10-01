import React from 'react';

function Item(props) {
  return (
    <tr>
      <td> {props.name} </td>
      <td> {props.quantity} </td>
      <td> {props.price} </td>
      <td> <button className="deleteButton">-</button></td>
    </tr>
  );
}

export default Item;
