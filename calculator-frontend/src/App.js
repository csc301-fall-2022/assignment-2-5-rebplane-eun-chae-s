import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";
import Calculate from "./components/Calculate";
import ItemTableHead from "./components/ItemTableHead";
import Item from "./components/Item";

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

      <CreateItem addItem={addItem} />
      <Calculate/>
    </div>
  );
}

export default App;
