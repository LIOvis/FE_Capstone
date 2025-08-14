import { NavLink } from "react-router-dom";

import InCartWrapper from "./InCartWrapper";

export default function ProductListItem(props) {
  const product = props.product;
  let category = product.category.replaceAll(" ", "-");
  category = category.replaceAll("'", "");

  return (
    <div
      key={product.id}
      className={`product ${category}`}
      id={`product-${product.id}`}
    >
      <div className="product-image-wrapper">
        <NavLink to={`/product-detail/${product.id}`}>
          <img src={product.image} className="product-image" />
        </NavLink>
      </div>
      <div className="product-details-wrapper">
        <NavLink to={`/product-detail/${product.id}`}>
          <div className="truncate-wrapper">
            <h5>{product.title}</h5>
          </div>
        </NavLink>
        <p className="price">${product.price.toFixed(2)}</p>
        <InCartWrapper product={product} />
      </div>
    </div>
  );
}
