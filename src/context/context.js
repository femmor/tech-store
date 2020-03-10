import React, { Component } from "react";

import { linkData } from "./linkData";

// Context Object
const ProductContext = React.createContext();

class ProductProvider extends Component {
  state = {
    sidebarOpen: false,
    cartOpen: false,
    cartItems: 10,
    links: linkData
  };

  // HandleSidebar
  handleSidebar = () => {
    this.setState({
      sidebarOpen: !this.state.sidebarOpen
    });
  };

  // HandleCart
  handleCart = () => {
    this.setState({
      cartOpen: !this.state.cartOpen
    });
  };

  // closeCart
  closeCart = () => {
    this.setState({
      cartOpen: false
    });
  };

  // closeCart
  openCart = () => {
    this.setState({
      cartOpen: true
    });
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleSidebar: this.handleSidebar,
          handleCart: this.handleCart,
          openCart: this.openCart,
          closeCart: this.closeCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
