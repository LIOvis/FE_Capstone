import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import Loading from "../Loading";
import { PopulateCart } from "../PopulateCart";
import InCartWrapper from "../InCartWrapper";

function Products(props) {
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortKey, setSortKey] = useState("id");
  const [sortAsc, setSortAsc] = useState(true);

  const handleSortChange = (value) => {
    setSortKey(value);
  };

  const handleAscChange = (value) => {
    if (value === "true") {
      setSortAsc(true);
    } else {
      setSortAsc(false);
    }
  };

  useEffect(() => {
    setSortedProducts(sortByKey(props.products, sortKey, sortAsc));
  }, [props.products, sortKey, sortAsc]);

  return (
    <div className="products-list-wrapper">
      <div className="sort-wrapper">
        <select
          id="sort-key"
          name="sort-key"
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="">&mdash; Sort &mdash;</option>
          <option value="title">A - Z</option>
          <option value="price">Price</option>
          <option value="category">Category</option>
          <option value="id">Product ID</option>
        </select>
        <select
          id="sort-asc"
          name="sort-asc"
          onChange={(e) => handleAscChange(e.target.value)}
        >
          <option value="true">Ascending</option>
          <option value="false">Descending</option>
        </select>
      </div>
      <div className="product-list">
        {sortedProducts.map((product) => {
          let category = product.category.replaceAll(" ", "-");
          category = category.replaceAll("'", "");

          return (
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
                <InCartWrapper product={product} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const sortByKey = (array, key, asc) => {
  return [...array].sort((a, b) => {
    if (typeof a[key] === "string") {
      return asc ? a[key].localeCompare(b[key]) : b[key].localeCompare(a[key]);
    } else {
      return asc ? a[key] - b[key] : b[key] - a[key];
    }
  });
};

async function filterCategories(category) {
  await ProductList;
  const filter = document.getElementById(category);
  const elements = document.getElementsByClassName(category);

  if (!filter.checked) {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.add("hidden");
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].classList.remove("hidden");
    }
  }
}

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Get Products Error: ", err);
      });
  }, []);

  return (
    <div className="products-list-page-wrapper page-wrapper">
      {isLoading ? (
        <Loading />
      ) : (
        <div className="products-list-wrapper">
          <h1>Products</h1>
          <div className="filters-wrapper">
            <p>Categories:</p>
            <div className="category">
              <input
                type="checkbox"
                id="mens-clothing"
                name="mens-clothing"
                onChange={(e) => filterCategories(e.target.id)}
                defaultChecked={true}
              />
              <label htmlFor="mens-clothing">Men's Clothing</label>
            </div>
            <div className="category">
              <input
                type="checkbox"
                id="jewelery"
                name="jewelery"
                onChange={(e) => filterCategories(e.target.id)}
                defaultChecked={true}
              />
              <label htmlFor="jewelery">Jewelery</label>
            </div>
            <div className="category">
              <input
                type="checkbox"
                id="electronics"
                name="electronics"
                onChange={(e) => filterCategories(e.target.id)}
                defaultChecked={true}
              />
              <label htmlFor="electronics">Electronics</label>
            </div>
            <div className="category">
              <input
                type="checkbox"
                id="womens-clothing"
                name="womens-clothing"
                onChange={(e) => filterCategories(e.target.id)}
                defaultChecked={true}
              />
              <label htmlFor="womens-clothing">Women's Clothing</label>
            </div>
          </div>
          <Products products={products} />
          <PopulateCart products={products} />
        </div>
      )}
    </div>
  );
}
