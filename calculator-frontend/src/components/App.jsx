import React from 'react';
import Header from "./Header"
import ItemTable from "./ItemTable"
import CreateItem from "./CreateItem"
import Calculate from "./Calculate"

function App() {
  return (
    <div>
      <Header />
      <ItemTable/>
      <Calculate/>
      <CreateItem/>
    </div>
  );
}

export default App;
