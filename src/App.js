import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Route, Switch } from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SideCart from "./components/SideCart";

// Components
import Home from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import ContactPage from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import Default from "./pages/Default";

class App extends Component {
  render() {
    return (
      <>
        {/* navbar, sidebar, cart, footer  */}
        <Navbar />
        <Sidebar />
        <SideCart />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={AboutPage} />
          <Route path="/products" exact component={Product} />
          <Route path="/products/:id" component={SingleProduct} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" exact component={ContactPage} />
          <Route component={Default} />
        </Switch>
        <Footer />
      </>
    );
  }
}

export default App;
