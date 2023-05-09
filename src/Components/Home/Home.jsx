import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import axios from "axios";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import Swal from "sweetalert2";

const Home = () => {
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);



  const showAlert = () => {
    Swal.fire({
      title: "Success",
      text: "Alert successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const info = useShoppingCart();
  const dispatch = info.dispatch;
  console.log(info);


  async function getCategory() {
    let { data } = await axios.get(`http://localhost:9000/gategory`);
    console.log(data);
    setCategory(data);
  }

  async function getProduct() {
    let { data } = await axios.get(`http://localhost:9000/product`);
    console.log(data);
    setProduct(data);
  }

  async function getStatus(status) {
    let { data } = await axios.get(
      `http://localhost:9000/product?status=${status}`
    );
    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getCategory();
    getProduct();
  }, []);

  return (
    <>
      <section id="home">
        <Carousel>
          <div className="img-1 hero">
            <div className="container">
              <h4>Spring - Summer 2020</h4>
              <h1>FLASH SALE OF 70%</h1>
              <p className="text-muted">
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolor eufugiat nulla pariatur. Excepteur sint
                occaecat cupidatat nonproident
              </p>
              <button className="btn shop-now">Shop Now</button>
            </div>
          </div>
          <div className="img-2 hero">
            <div className="container">
              <h4>Spring - Summer 2020</h4>
              <h1>FLASH SALE OF 70%</h1>
              <p className="text-muted">
                Duis aute irure dolor in reprehenderit in voluptate velit
                essecillum dolor eufugiat nulla pariatur. Excepteur sint
                occaecat cupidatat nonproident
              </p>
              <button className="btn shop-now">Shop Now</button>
            </div>
          </div>
          <div className="img-3 hero">
            <div className="container">
              <h4>Spring - Summer 2020</h4>
              <h1>FLASH SALE OF 70%</h1>
              <button className="btn shop-now">Shop Now</button>
            </div>
          </div>
        </Carousel>

        <div className="categories mb-5">
          <div className="container-fluid">
            <div className="row">
              {category.map((cat) => (
                <div className="col-md-4" key={cat.id}>
                  <Link to={`category/${cat.name}`}>
                    <img src={cat.image} alt="" className="w-100" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="product">
          <div className="container">
            <div className="title text-center pt-5">
              <h1>OUR PRODUCTS</h1>
              <p className="text-muted">top view in the week</p>
            </div>
            <ul>
              <li onClick={(e) => getProduct()}>Featured</li>
              <li onClick={(e) => getStatus("best-seller")}>Best Seller</li>
              <li onClick={(e) => getStatus("sale")}>Sale</li>
              <li onClick={(e) => getStatus("top-rate")}>Top Rate</li>
            </ul>
            <div className="row gy-5">
              {product.map((pro) => (
                <div className="col-md-3" key={pro.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`itemDetails/${pro.id}`}>
                      <img
                        src={pro.image1}
                        className="card-img-top"
                        alt="..."
                        onMouseOver={(e) => (e.target.src = `${pro.image2}`)}
                        onMouseOut={(e) => (e.target.src = `${pro.image1}`)}
                      />
                    </Link>

                    <button
                      onClick={() => {
                        dispatch({ type: "ADD", payload: pro })
                        showAlert()
                      }
                      
                    }
                      className="btn addCart shadow"
                    >
                      Add to Cart
                    </button>
                    <div className="card-body">
                      <h5 className="card-title">{pro.title}</h5>
                      <div className="d-flex justify-content-between">
                        <p className="card-text text-muted fw-bold">
                          ${pro.price}
                        </p>
                        <i class="fa-regular fa-heart" role="button"></i>
                      </div>
                      <div className="d-flex justify-content-start">
                        <i class="fa-solid fa-star pe-1"></i>
                        <i class="fa-solid fa-star px-1"></i>
                        <i class="fa-solid fa-star px-1"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <i class="fa-regular fa-star px-1"></i>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
