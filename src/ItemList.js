import React from "react";

export default function ItemList({ item }) {
  console.log(Object.keys(item));
  return (
    <div>
      <div>{Object.keys(item)}</div>
      {item.map((i) => (
        <li key={i.itemId}>
          <div>{i.title}</div>
          <div>{"$" + parseFloat(i.buyNowPrice).toFixed(2)}</div>
          <img src={i.imageURL}></img>
        </li>
      ))}
    </div>
  );
}
