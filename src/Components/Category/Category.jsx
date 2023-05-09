import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import Swal from "sweetalert2";


const Category = () => {
  let { categoryName } = useParams();
  console.log(categoryName);
  const [catName, setCatName] = useState([]);

  async function getCategoryName(name) {
    let { data } = await axios.get(
      `http://localhost:9000/product?category=${name}`
    );
    console.log(data);
    setCatName(data);
  }

  useEffect(() => {
    getCategoryName(categoryName);
  }, []);

  
  const info = useShoppingCart();
  const dispatch = info.dispatch;
  console.log(info);

  const showAlert = () => {
    Swal.fire({
      title: "Success",
      text: "Alert successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  return (
    <>
      <section id="categoryName" className="pb-5">
        <div className="product">
          <div className="title text-center py-5">
            <div className="layer">
              <div className="text">
                <h1 className="text-uppercase text-white">{categoryName}</h1>
                <p className="text-muted">top view in the week</p>
              </div>
            </div>
          </div>
          <div className="container my-5">
            <div className="row gy-5">
              {catName.map((catName) => (
                <div className="col-md-3" key={catName.id}>
                  <div className="card" style={{ width: "18rem" }}>
                    <Link to={`/itemDetails/${catName.id}`}>
                      <img
                        src={catName.image1}
                        className="card-img-top"
                        alt="..."
                        onMouseOver={(e) =>
                          (e.target.src = `${catName.image2}`)
                        }
                        onMouseOut={(e) => (e.target.src = `${catName.image1}`)}
                      />
                    </Link>
                    <button onClick={() => {
                        dispatch({ type: "ADD", payload: catName })
                        showAlert()
                      }
                      
                    } className="btn addCart shadow">Add to Cart</button>
                    <div className="card-body">
                      <h5 className="card-title">{catName.title}</h5>
                      <p className="card-text text-muted fw-bold">
                        ${catName.price}
                      </p>
                    </div>
                    <div className="d-flex justify-content-start ps-3">
                      <i class="fa-solid fa-star pe-1 "></i>
                      <i class="fa-solid fa-star px-1"></i>
                      <i class="fa-solid fa-star px-1"></i>
                      <i class="fa-regular fa-star-half-stroke"></i>
                      <i class="fa-regular fa-star px-1"></i>
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

export default Category;
