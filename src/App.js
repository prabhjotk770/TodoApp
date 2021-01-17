import React, { useState } from "react";
import "./styles.css";
import ListItem from "./ListItem";

function App() {
  const [item, setItem] = useState([]);
  const [currentItem, setCurrentItem] = useState();
  const handleChange = (e) => {
    setCurrentItem(() => e.target.value);
  };

  const addItem = (e) => {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem !== "") {
      const newItems = [...item, newItem];
      setItem(() => newItems);
      setCurrentItem("");
    }
  };

  const clear = () => {
    setItem(() => []);
    console.log("clear");
  };

  const handleClick = (i) => {
    const items = [...item];
    items.splice(i, 1);
    setItem(items);
  };
  return (
    <div className="App">
      <h1>To Do List</h1>
      <form onSubmit={addItem}>
        <input type="text" onChange={handleChange} value={currentItem} />
        <span>
          {" "}
          <button type="submit">Add Item</button>
        </span>
      </form>
      <ListItem item={item} delete={handleClick} />
      <br />
      <button onClick={clear}>Clear all</button>
    </div>
  );
}

export default App;
