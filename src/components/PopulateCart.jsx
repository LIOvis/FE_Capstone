import { useEffect } from "react";

export const inCart = {};

export function FetchCartProducts() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        PopulateCart(data);
      })
      .catch((err) => {
        console.error("Get Products Error: ", err);
      });
  }, []);
}

export function PopulateCart(props) {
  props.products.map((product) => {
    if (!inCart[product.id]) {
      inCart[product.id] = 0;
    }
  });
  console.log(inCart);
}
