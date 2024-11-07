import React from "react";
// import "./NavBar.css";
import { Link } from "react-router-dom";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <div className="NavBar">
      <Link to={"/"}>
        <button className="link">All products
        </button>
      </Link>
      <Link to={"/shoppingCart"}>
        <button className="link">
          Shopping Cart</button>
      </Link>
      
    </div>
  );
};

export default NavBar;
