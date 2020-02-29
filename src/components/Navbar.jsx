import React from "react";
import { FaBars, FaCartPlus } from "react-icons/fa";
import styled from "styled-components";

import { ProductConsumer } from "../context";

import Logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { cartItems, handleSidebar, handleCart } = value;
        return (
          <NavWrapper>
            <div className="nav-center">
              <FaBars className="nav-icon" onClick={handleSidebar} />
              <img src={Logo} alt="app logo" />
              <div className="nav-cart">
                <FaCartPlus className="nav-icon" onClick={handleCart} />
                <div className="cart-items">{cartItems}</div>
              </div>
            </div>
          </NavWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default Navbar;

const NavWrapper = styled.nav`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  width: 100%;
  padding: 1rem 1.5rem;
  background: var(--mainGrey);
  border-bottom: 3px solid var(--primaryColor);

  .nav-center {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: 0 auto;
  }

  .nav-icon {
    font-size: 1.5rem;
    cursor: pointer;
  }

  .nav-cart {
    position: relative;
  }

  .cart-items {
    background: var(--primaryColor);
    border-radius: 50%;
    color: var(--mainWhite);
    font-size: 0.85rem;
    position: absolute;
    padding: 0 5px;
    top: -8px;
    right: -8px;
  }
`;
