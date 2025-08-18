import { useState, useEffect } from "react";

import Routing from "../navigation/Routing";

import Loading from "../Loading";
import InCartWrapper from "../InCartWrapper";

export default function ProductDetail(props) {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = props.match.params;

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Get Products Error: ", err);
        props.history.push("/not-found");
      });
  }, []);

  return (
    <div className="page-wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="product-detail-wrapper page-wrapper">
          <img src={product.image} />
          <div className="product-details">
            <p className="category">{product.category}</p>
            <h3 className="title">{product.title}</h3>
            <p className="description">{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <InCartWrapper product={product} />
          </div>
        </div>
      )}
    </div>
  );
}
