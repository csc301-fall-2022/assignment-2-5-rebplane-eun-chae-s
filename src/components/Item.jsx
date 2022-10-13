import React from 'react';

function Item(props) {

  function handleClick() {
    props.deleteItem(props.id);
  }

  return (
    <tr>
      <td> {props.name} </td>
      <td> {props.quantity} </td>
      <td> ${props.price} </td>
      <td> <button className="btn btn-sm btn-dark btn-custom btn-delete" onClick={handleClick}>-</button></td>
    </tr>
  );
}

export default Item;
