import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <Hero title="awesome gadgets" max>
        <Link to="/products">see all products</Link>
      </Hero>
    </>
  );
};

export default HomePage;
