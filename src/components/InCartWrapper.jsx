import { useState, useEffect } from "react";

import { inCart } from "./PopulateCart";

import plusIcon from "../assets/plus.svg";
import minusIcon from "../assets/minus.svg";

export default function InCartWrapper(props) {
  const id = props.product.id;
  const [qty, setQty] = useState(inCart[id]);

  if (qty === undefined) {
    setQty(0);
  }

  useEffect(() => {
    if (inCart[id] !== qty) {
      inCart[id] = qty;
      setQty(inCart[id]);
    }
  });

  const subCart = () => {
    if (qty !== 0) {
      setQty(qty - 1);
    } else {
      setQty(0);
    }
    inCart[id] = qty;
  };

  const addCart = () => {
    setQty(qty + 1);
    inCart[id] = qty;
  };

  return (
    <div className="in-cart-wrapper">
      <h6>{qty > 0 ? "In Cart" : "Add to Cart"}</h6>
      <div className="plus-minus-wrapper">
        <img src={minusIcon} className="icon button" onClick={subCart} />
        <p className="in-cart">{qty}</p>
        <img src={plusIcon} className="icon button" onClick={addCart} />
      </div>
    </div>
  );
}
