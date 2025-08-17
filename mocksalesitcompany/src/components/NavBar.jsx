import React, { useContext }from "react";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {CartContext} from '../Features/ContextProvider';

const NavBar = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className="d-flex justify-content-between bg-secondary p-3 px-5 text-white  ">
      <Link to="/" className="navbar-brand">
      Shop</Link>
     <Link 
     to="/cart" 
     className="navbar-link fs-5 text-white text-decoration-none ">
      <BsCart/>{cart.length}
      </Link>
    </div>
  );
};

export default NavBar;
