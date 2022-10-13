import React, { useContext, useState, useEffect } from "react";
import Header from "../components/Header";
import CreateItem from "../components/CreateItem";
import Calculate from "../components/Calculate";
import ItemTableHead from "../components/ItemTableHead";
import Item from "../components/Item";
import axios from "axios";
import AuthContext from "../context/AuthContext";

// add useAxios & change ACCESS TOKEN minutes to 30 minutes

function Cart() {
  const { user, authTokens } = useContext(AuthContext);
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(null);
  const [grandTotal, setGrandTotal] = useState(null);
  const [taxes, setTaxes] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    axios
      .get("/api/items/", {
        headers: {
          Authorization: "Bearer " + String(authTokens.access),
        },
      })
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  }, []);

  function addItem(item) {
    // axios.put: for editing new one
    axios
      .post("/api/items/", item, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      })
      .then((res) => {
        axios
          .get("/api/items/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(authTokens.access),
            },
          })
          .then((res) => setItems(res.data))
          .catch((err) => console.log(err));
      });
  }

  function deleteItem(id) {
    axios
      .delete(`/api/items/${id}/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      })
      .then((res) => {
        axios
          .get("/api/items/", {
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + String(authTokens.access),
            },
          })
          .then((res) => setItems(res.data))
          .catch((err) => console.log(err));
      });
  }

  function calculateTotal() {
    if (0 <= discount && discount <= 100 && 0 <= taxes && taxes <= 100) {
      axios
        .get("/api/calculate/", {
          headers: {
            Authorization: "Bearer " + String(authTokens.access),
          },
        })
        .then((res) => {
          console.log(res.data);
          setTotal(res.data.toFixed(2));
          setGrandTotal(
            (res.data * (1 - discount / 100) * (1 + taxes / 100)).toFixed(2)
          );
        })
        .catch((err) => console.log(err));
      console.log("valid discount and taxes");
    } else {
      alert("Plase enter valid discount and taxes (between 0 and 1)");
    }
  }

  return (
    <div>
      {/* {user && <div>Hello, {user.username}</div>} */}
      <Header />
      <ItemTableHead />
      {/* Maps the items in the array items to the table to be displayed*/}
      <table>
        <tbody>
          {/* Send the mapped values to map to Item rows (if there are items)*/}
          {items.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
                user={user.user_id}
                deleteItem={deleteItem}
              />
            );
          })}
        </tbody>
      </table>

      <CreateItem addItem={addItem} />
      <Calculate
        calculateTotal={calculateTotal}
        setDiscount={setDiscount}
        setTaxes={setTaxes}
        taxes={taxes}
        discount={discount}
        total={total}
        grandTotal={grandTotal}
      />
    </div>
  );
}

export default Cart;
