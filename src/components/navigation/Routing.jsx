import { Switch, Redirect, Route } from "react-router-dom";

import Cart from "../pages/Cart.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import NoPage from "../pages/NoPage.jsx";
import Contact from "../pages/Contact.jsx";
import ProductList from "../pages/ProductList.jsx";
import ProductDetail from "../pages/ProductDetail.jsx";

export default function Routing() {
  return (
    <Switch>
      <Route path="/home" component={Home} />
      <Redirect exact from="/" to="/home" component={Home} />
      <Route path="/product-list" component={ProductList} />
      <Route path="/product-detail/:id" component={ProductDetail} />
      <Route path="/cart" component={Cart} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NoPage} />
    </Switch>
  );
}
