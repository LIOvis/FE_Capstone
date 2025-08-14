import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import InCartWrapper from "../InCartWrapper";
import { PopulateCart, inCart } from "../PopulateCart";

function CartProductList(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [removeProduct, setRemoveProduct] = useState([]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const RemoveItem = ({ isOpen, onClose }) => {
    const id = removeProduct.id;

    const removeClose = () => {
      inCart[id] = 0;
      handleCloseModal();
    };

    if (!isOpen) return null;

    return (
      <div className="remove-item-wrapper" onClick={onClose}>
        <div className="remove-item-content">
          <p>Are You Sure You Want To Remove This Item?</p>
          <div className="buttons-wrapper">
            <div className="button confirm" onClick={removeClose}>
              Yes
            </div>
            <div className="button cancel" onClick={onClose}>
              No
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-product-list">
      <RemoveItem isOpen={isModalOpen} onClose={handleCloseModal} />
      {props.products.map((product) => {
        let category = product.category.replaceAll(" ", "-");
        category = category.replaceAll("'", "");

        if (inCart[product.id] > 0) {
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
                <div className="edit-cart-wrapper">
                  <InCartWrapper product={product} />
                  <div
                    className="button remove-from-cart"
                    onClick={() => {
                      setRemoveProduct(product);
                      handleOpenModal();
                    }}
                  >
                    Remove From Cart
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

export default function Cart() {
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
    <div className="cart-page-wrapper">
      <PopulateCart products={products} />
      <CartProductList products={products} />
    </div>
  );
}
