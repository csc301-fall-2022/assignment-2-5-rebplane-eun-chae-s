import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import CreateItem from "./components/CreateItem";
import Calculate from "./components/Calculate";
import ItemTableHead from "./components/ItemTableHead";
import Item from "./components/Item";
import axios from "axios";

function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("/api/items/")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  function addItem(item) {
    if (items.length === 0) {
      item.id = 1;
    } else {
      item.id = items[items.length - 1].id + 1;
    }

    // axios.put: for editing new one
    axios.post("/api/items/", item).then((res) => {
      axios
        .get("/api/items/")
        .then((res) => setItems(res.data))
        .catch((err) => console.log(err));
    });
  }

  function deleteItem(id) {
    axios.delete(`/api/items/${id}`).then((res) => {
      axios
        .get("/api/items/")
        .then((res) => setItems(res.data))
        .catch((err) => console.log(err));
    });
  }

  return (
    <div>
      <Header />
      <ItemTableHead />
      {/* Maps the items in the array items to the table to be displayed*/}
      <table>
        <tbody>
          {/* Send the mapped values to map to Item rows*/}
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                deleteItem={deleteItem}
              />
            );
          })}
        </tbody>
      </table>

      <CreateItem addItem={addItem} />
      <Calculate />
    </div>
  );
}

export default Cart;
