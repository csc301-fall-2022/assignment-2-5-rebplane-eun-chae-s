import React, { useState } from 'react';
import Header from "./Header";
import CreateItem from "./CreateItem";
import Calculate from "./Calculate";
import ItemTableHead from "./ItemTableHead";
import Item from "./Item"

function App() {

  const [items, setItems] = useState([])

  function addItem(item) {
      setItems(prevItems => {
        return [...prevItems, item];
      });
  }

  function deleteItem(id) {
      setItems(prevItems => {
        return prevItems.filter((item, index) => {
          return index !== id
        });
      });
  }

  return (
    <div>
      <Header />
      <ItemTableHead/>
      {/* Maps the items in the array items to the table to be displayed*/}
      <table>
        <tbody>
        {/* Send the mapped values to map to Item rows*/}
        {items.map((item, index) => {
          return (<Item
              key={index}
              id={index}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              deleteItem={deleteItem}/>
          )
        })}
        </tbody>
      </table>

      <Calculate/>
      <CreateItem addItem={addItem} />
    </div>
  );
}

export default App;
