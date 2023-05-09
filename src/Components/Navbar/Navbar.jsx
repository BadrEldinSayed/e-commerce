import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { useItemsLove } from "../../Context/itemsLoveContext";

const Navbar = () => {
  const info = useShoppingCart();
  // console.log(info.state.length);

  const info2 = useItemsLove();
  console.log("info2 " + info2);

  return (
    <>
      <div className="nav-top">
        <div className="social-icons">
          <i class="fa-brands fa-facebook-f px-2"></i>
          <i class="fa-brands fa-twitter px-2"></i>
          <i class="fa-brands fa-google px-2"></i>
          <i class="fa-brands fa-pinterest-p px-2"></i>
        </div>
        <p className="pt-2 text-muted">
          Summer sale discount off{" "}
          <span className="text-danger fw-bold">50%! </span> Shop Now
        </p>
        <button className="btn btn-danger">BuyNow</button>
      </div>

      <nav className="navbar navbar-expand-lg navbar-white bg-white sticky-top py-3 shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Claue
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="shop">
                  Shop
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="product">
                  Product
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="page">
                  Page
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="element">
                  Element
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="sale">
                  Sale
                </NavLink>
              </li>
            </ul>
            <div className="icons">
              <i class="fa-solid fa-magnifying-glass"></i>
              <Link style={{ position: "relative" }}>
                <i class="fa-regular fa-heart"></i>
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                  style={{
                    color: "white",
                    width: "1.4rem",
                    height: "1.4rem",
                    position: "absolute",
                    bottom: "70%",
                    left: "70%",
                    transform: "translate(25%, 25%)",
                  }}
                >
                  0
                </div>
              </Link>
              <Link to="cart" style={{ position: "relative" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="currentColor"
                  className="shopping-cart"
                >
                  <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
                </svg>
                <div
                  className="rounded-circle bg-danger d-flex justify-content-center align-item-center"
                  style={{
                    color: "white",
                    width: "1.4rem",
                    height: "1.4rem",
                    position: "absolute",
                    bottom: "70%",
                    left: "70%",
                    transform: "translate(25%, 25%)",
                  }}
                >
                  {info.state.length}
                </div>
              </Link>
            </div>
            
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
