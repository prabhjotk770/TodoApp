import React, { useState } from "react";

const ListItem = (props) => {
  const [tick, setTick] = useState(false);
  const items = props.item;

  return (
    <div>
      {items.map((item, i) => {
        return (
          <div>
            {" "}
            <input
              type="checkbox"
              onChange={(event) => {
                let checked = event.target.checked;
                setTick(
                  items.map((a, id) => {
                    if (i === id) a.tick = checked;
                    return a;
                  })
                );
              }}
              key={i}
            />
            {item}
            <button onClick={() => props.delete(i)}>X</button>
          </div>
        );
      })}
    </div>
  );
};

export default ListItem;
