import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Sidebar = () => {
  return (
    <ProductConsumer>
      {value => {
        const { links, sidebarOpen, handleSidebar } = value;
        return (
          <SideWrapper show={sidebarOpen}>
            <ul>
              {links.map(link => {
                return (
                  <li
                    key={link.id}
                    className="sidebar-link"
                    onClick={handleSidebar}
                  >
                    <Link to={link.path}>{link.text}</Link>
                  </li>
                );
              })}
            </ul>
          </SideWrapper>
        );
      }}
    </ProductConsumer>
  );
};

const SideWrapper = styled.nav`
  position: fixed;
  top: 61px;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  border-right: 4px solid var(--primaryColor);
  transition: var(--mainTransition);
  transform: ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};

  ul {
    list-style-type: none;
    padding: 0 !important;
  }

  .sidebar-link {
    display: block;
    font-size: 1.5rem;
    text-transform: capitalize;
    padding: 0.5rem 1.5rem;
    background: transparent;
    transition: var(--mainTransition);
  }

  .sidebar-link:hover {
    background: var(--primaryColor);
    color: var(--mainWhite);
    padding: 0.5rem 1.5rem 0.5rem 2.5rem;
  }

  .sidebar-link a {
    color: var(--mainBlack);
  }

  .sidebar-link a:hover {
    color: var(--mainWhite) !important;
    text-decoration: none;
  }

  @media (min-width: 576px) {
    width: 20rem;
  }
`;

export default Sidebar;
