import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import plusIcon from "../../assets/plus.svg";
import minusIcon from "../../assets/minus.svg";

function Products(props) {
  return (
    <div className="product-list">
      {props.products.map((product) => {
        product.inCart = 0;
        let category = product.category.replaceAll(" ", "-");
        category = category.replaceAll("'", "");

        // let filter = document.getElementById(category);
        // let hidden = "";
        // if (filter.checked) {
        //   hidden = "";
        // } else {
        //   hidden = "hidden";
        // }

        return (
          // <div key={product.id} className={`product ${category} ${hidden}`}>
          <div key={product.id} className={`product ${category}`}>
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
              <h6>Add to Cart</h6>
              <div className="plus-minus-wrapper">
                <img src={minusIcon} className="icon button" />
                <p className="in-cart">{product.inCart}</p>
                <img src={plusIcon} className="icon button" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

// async function FilterCategories(category) {
//   await Products;
//   let filter = document.getElementById(category);
//   const elements = document.getElementsByClassName(category);
//   console.log(elements);

//   if (!filter.checked) {
//     elements.forEach((element) => element.classList.add("hidden"));
//   } else {
//     elements.forEach((element) => element.classList.remove("hidden"));
//   }
// }

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error("Get Products Error: ", err);
      });
  }, []);

  return (
    <div className="products-list-page-wrapper">
      <h1>Products</h1>
      <div className="category-filters">
        <p>Categories:</p>
        <div className="category">
          <input
            type="checkbox"
            id="mens-clothing"
            name="mens-clothing"
            defaultChecked={true}
            // onChange={FilterCategories("mens-clothing")}
          />
          <label for="mens-clothing">Men's Clothing</label>
        </div>
        <div className="category">
          <input
            type="checkbox"
            id="womens-clothing"
            name="womens-clothing"
            defaultChecked={true}
            // onChange={FilterCategories("womens-clothing")}
          />
          <label for="womens-clothing">Women's Clothing</label>
        </div>
        <div className="category">
          <input
            type="checkbox"
            id="jewelery"
            name="jewelery"
            defaultChecked={true}
            // onChange={FilterCategories("jewelery")}
          />
          <label for="jewelery">Jewelery</label>
        </div>
        <div className="category">
          <input
            type="checkbox"
            id="electronics"
            name="electronics"
            defaultChecked={true}
            // onChange={FilterCategories("electronics")}
          />
          <label for="electronics">Electronics</label>
        </div>
      </div>
      <Products products={products} />
    </div>
  );
}
