import React from "react";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="py-3 fw-bolder">claue</h1>
              <div className="d-flex  text-muted">
                <i className="fa-solid fa-location-dot fs-4"></i>
                <h6 className="ps-2">
                  184 Main Rd E, St Albans VIC 3021, Australia
                </h6>
              </div>
              <div className="d-flex text-muted py-4">
                <i className="fa-solid fa-envelope fs-4"></i>
                <h6 className="ps-2">contact@company.com</h6>
              </div>
              <div className="d-flex text-muted">
                <i className="fa-solid fa-phone fs-4"></i>
                <h6 className="ps-2">+001 2233 456</h6>
              </div>
              <div className="pt-4 text-muted role">
                <i class="fa-brands fa-facebook-f fs-5 pe-3"></i>
                <i class="fa-brands fa-twitter fs-5 px-3"></i>
                <i class="fa-brands fa-instagram fs-5 px-3"></i>
                <i class="fa-brands fa-pinterest-p fs-5 px-3"></i>
                <i class="fa-brands fa-youtube fs-5 px-3"></i>
              </div>
            </div>
            <div className="col-md-2">
              <h3 className="py-3 fs-4">Categories</h3>
              <ul className="text-muted">
                <li className="py-1">Men</li>
                <li className="py-1">Women</li>
                <li className="py-1">Accessories</li>
                <li className="py-1">Shoes</li>
                <li className="py-1">Denim</li>
                <li className="py-1">Dress</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h3 className="py-3 fs-4">Infomation</h3>
              <ul className="text-muted">
                <li className="py-1">About Us</li>
                <li className="py-1">Contact Us</li>
                <li className="py-1">Terms & Conditions</li>
                <li className="py-1">Returns & Exchanges</li>
                <li className="py-1">Shipping & Delivery</li>
                <li className="py-1">Privacy Policy</li>
              </ul>
            </div>
            <div className="col-md-2">
              <h3 className="py-3 fs-4">Quick Links</h3>
              <ul className="text-muted">
                <li className="py-1">Store Location</li>
                <li className="py-1">My Account</li>
                <li className="py-1">Accessories</li>
                <li className="py-1">Orders Tracking</li>
                <li className="py-1">Size Guide</li>
                <li className="py-1">FAQs</li>
              </ul>
            </div>
            <div className="col-md-2">
              <p className="text-muted py-3">
                Subscribe to our newsletter and get 10% off your first purchase
              </p>
              <input type="text" className="form-control" />
              <button className="btn btn-dark btn-sm mt-2">subscribe</button>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="text-muted">
              Copyright © 2023 Claue. All rights reserved. Powered by
              BadrEldinSayed
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <div className="d-flex align-items-center justify-content-center">
              <h6 className="text-muted px-2" role="button">Blog</h6>
              <h6 className="text-muted px-2" role="button">Contact</h6>
              <h6 className="text-muted px-2" role="button">About Us</h6>
              <h6 className="text-muted px-2" role="button">Shop</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
