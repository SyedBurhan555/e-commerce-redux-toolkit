import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartlength = useSelector((state) => state.cart.data);

  return (
    <nav>
      <div className="logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>S.B.U</h1>
        </Link>
        <span className="icon">&#9776;</span>
      </div>
      <div className="search">
        <i className="fa fa-search" />
        <input type="search" title="Search" placeholder="search..." />
      </div>
      <ul id="menu">
        <span className="closebtn" onClick={close}>
          x
        </span>
        <li>
          Rest of Europe <i className="fas fa-arrow-down" />
        </li>
        <li>
          Store location <i className="fas fa-map-marker-alt" />
        </li>
        <li>
          Help <i className="far fa-map-marker-question" />
        </li>
        <li>
          Login <i className="fas fa-lock" />
        </li>
        <li>
          Register <i className="fas fa-user-check" />
        </li>
        <span className="line" />
        <Link to="/cart" className="cart-icon">
          <i className="far fa-shopping-cart" />
          <span className="cart-item">{cartlength.length}</span>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
