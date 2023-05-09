import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useShoppingCart } from "../../Context/ShoppingCartContext";

const ItemDetails = () => {
  let { productId } = useParams();
  const [item, setItem] = useState([]);
  // let {getItemsQuanitity, increaseCartQuanitity} = useShoppingCart();
  // let quantity = getItemsQuanitity(productId);

  async function getItemDetails(id) {
    let { data } = await axios.get(`http://localhost:9000/product/${id}`);
    console.log(data);
    setItem(data);
  }

  useEffect(() => {
    getItemDetails(productId);
  }, []);

  const handleimage = (e) => {
    console.log(e.target.src)
    let baseImgSrc = document.getElementById('baseImg');
    let willBase = e.target.src;
    baseImgSrc.src = willBase;
  }

  return (
    <>
      <section id="itemDetails">
        <div className="container">
          <div className="row">
            <div className="col-md-6" key={item.id}>
              <div className="base-img">
                <img id="baseImg" src={item.image1} className="w-100" alt="" />
              </div>
              <div className="my-3">
                <img onClick={handleimage} src={item.image1} className="w-25 me-3" role="button" alt="" />
                <img onClick={handleimage} src={item.image2} className="w-25" role="button" alt="" />
              </div>
            </div>
            <div className="col-md-5">
              <div className="item">
                <h4 className="fw-bolder">{item.title}</h4>
                <p className="text-muted">
                  Be the first to review this product
                </p>
                <span className="fs-2 text-muted">${item.price}</span>
                <p className="text-muted mt-3">{item.description}</p>
                <div className="d-flex mt-5">
                  <div className="d-flex align-items-center outline">
                    <i class="fa-solid fa-minus" role="button"></i>
                    <span className="fs-5 fw-bolder px-4">1</span>
                    <i class="fa-solid fa-plus" role="button"></i>
                  </div>
                  <button className="btn item-button">ADD TO CART</button>
                </div>
                <h6 className="mt-5">
                  Availability:{" "}
                  <span className="text-muted">{item.availability}</span>
                </h6>
                <h6 className="py-3">
                  SKU: <span className="text-muted">{item.sku}</span>
                </h6>
                <h6>
                  Brand: <span className="text-muted">{item.brand}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetails;
