import React, { useState }from "react";

function Item({ name, category }) {
  const [onCart, setCart] = useState(true)
  function handleCart(){
    setCart((onCart) => !onCart)
  }

  return (
    <li className={onCart? "": "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={onCart? "add": "remove"} onClick={handleCart}>{onCart ? "Add to Cart": "Remove from Cart"}</button>
    </li>
  );
}

export default Item;