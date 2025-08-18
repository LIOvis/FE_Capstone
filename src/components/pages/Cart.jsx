import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import InCartWrapper from "../InCartWrapper";
import { PopulateCart, inCart } from "../PopulateCart";

function CartProductList(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRemoveModal, setIsRemoveModal] = useState(true);
  const [removeProduct, setRemoveProduct] = useState([]);
  const [subtotalCost, setSubtotalCost] = useState(0);
  const [totalInCart, setTotalInCart] = useState(0);

  console.log(subtotalCost);

  const getSubtotalCost = () => {
    let totalCost = 0;
    props.products.map((product) => {
      totalCost = totalCost + product.price * inCart[product.id];
    });
    console.log(totalCost);

    return totalCost;
  };

  const getTotalInCart = () => {
    let totalItems = 0;
    props.products.map((product) => {
      totalItems = totalItems + inCart[product.id];
    });
    return totalItems;
  };

  useEffect(() => {
    if (subtotalCost !== getSubtotalCost()) {
      setSubtotalCost(getSubtotalCost());
    }
  });
  useEffect(() => {
    if (totalInCart !== getTotalInCart()) {
      setTotalInCart(getTotalInCart());
    }
  });

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const OpenModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    if (isRemoveModal) {
      const id = removeProduct.id;

      const removeClose = () => {
        inCart[id] = 0;
        handleCloseModal();
      };

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
    } else {
      const checkoutClose = () => {
        props.products.map((product) => {
          inCart[product.id] = 0;
        });
        handleCloseModal();
      };

      return (
        <div className="checkout-cart-wrapper" onClick={onClose}>
          <div className="checkout-cart-content">
            <p className="checkout-title">Checkout ({totalInCart}) Items?</p>
            <div className="subtotal-cost">
              <p>Subtotal: </p>
              <p className="cost">${subtotalCost.toFixed(2)}</p>
            </div>
            <div className="shipping-cost">
              <p>Shipping: </p>
              <p className="cost">$10.00</p>
            </div>
            <div className="total-cost">
              <p className="total">Total: </p>
              <p className="cost total">${(subtotalCost + 10).toFixed(2)}</p>
            </div>
            <div className="buttons-wrapper">
              <div className="button confirm" onClick={checkoutClose}>
                Yes
              </div>
              <div className="button cancel" onClick={onClose}>
                No
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  if (totalInCart === 0) {
    return <div className="nothing-in-cart">Nothing In the Cart</div>;
  } else
    return (
      <div className="cart-product-list">
        <OpenModel isOpen={isModalOpen} onClose={handleCloseModal} />
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
                        setIsRemoveModal(true);
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
        <div
          className="button checkout-cart"
          onClick={() => {
            setIsRemoveModal(false);
            handleOpenModal();
          }}
        >
          Checkout Cart?
        </div>
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
    <div className="cart-page-wrapper page-wrapper">
      <PopulateCart products={products} />
      <CartProductList products={products} />
    </div>
  );
}
