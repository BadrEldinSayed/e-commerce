import React, { useState } from "react";
import axios from "axios";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import Swal from "sweetalert2";

const Payment = () => {
  const info = useShoppingCart();

  const total = info.state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const showAlert = () => {
    Swal.fire({
      title: "Success",
      text: "Alert successful",
      icon: "success",
      confirmButtonText: "OK",
    });
  };

  const [user, setUser] = useState([
    {
      card_number: 0,
      card_code: 0,
      first_name: "",
      last_name: "",
      country: "",
      city: "",
      zip_code: "",
      email: "",
      phone_number: 0,
      total_price: 0,
    },
  ]);

  async function sendDataToApi() {
    let { data } = await axios.post(`http://localhost:9000/payment`, user);
    console.log(data);
    if (data.message == 'success') {
      showAlert();
    }else {
      return;
    }
  }

  const getDataFromUser = (e) => {
    let myUser = { ...user };
    myUser[e.target.name] = e.target.value;
    setUser(myUser);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    showAlert();
    sendDataToApi();
  };

  return (
    <>
      <section id="payment">
        <div className="container">
          <form onSubmit={handleSumbit}>
            <div className="row">
              <div className="col-md-6">
                <div className="card-info">
                  <h2>Card information</h2>
                  <p>
                    Indicate details of the card from which money will be
                    debited
                  </p>
                  <div className="visa">
                    <img
                      className="d-block pb-4"
                      src="https://claue.arrowtheme.com/media/wysiwyg/payment2.png"
                      alt=""
                    />
                    <label htmlFor="" className="pt-3 pb-2">
                      Card number
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="0000 0000 0000 0000"
                      name="card-number"
                      onChange={getDataFromUser}
                    />

                    <label htmlFor="" className="pb-2 pt-4">
                      CVV code
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="000"
                      name="card-code"
                      onChange={getDataFromUser}
                    />
                    <label htmlFor="" className="pb-2 pt-4">
                      Total Price
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      placeholder="000"
                      name="total_price"
                      value={total}
                      disabled
                      onChange={getDataFromUser}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-5 mx-auto">
                <div className="personal-info">
                  <h2 className="pb-4">Personal information</h2>
                  <div className="d-flex my-4">
                    <input
                      onChange={getDataFromUser}
                      name="first-name"
                      type="text"
                      className="form-control py-2 me-2"
                      placeholder="First name"
                    />
                    <input
                      onChange={getDataFromUser}
                      name="last-name"
                      type="text"
                      className="form-control py-2"
                      placeholder="Last name"
                    />
                  </div>
                  <input
                    onChange={getDataFromUser}
                    name="country"
                    type="text"
                    className="form-control py-2 my-3"
                    placeholder="Country"
                  />
                  <div className="d-flex my-4">
                    <input
                      onChange={getDataFromUser}
                      name="city"
                      type="text"
                      className="form-control py-2 me-2"
                      placeholder="City"
                    />
                    <input
                      onChange={getDataFromUser}
                      name="zip-code"
                      type="text"
                      className="form-control py-2"
                      placeholder="zip code"
                    />
                  </div>
                  <input
                    onChange={getDataFromUser}
                    name="email"
                    type="email"
                    className="form-control py-2 my-4"
                    placeholder="Email"
                  />
                  <input
                    onChange={getDataFromUser}
                    name="phone-number"
                    type="number"
                    className="form-control py-2 my-4"
                    placeholder="Phone number"
                  />
                </div>
              </div>
            </div>
            <div className="text-center mt-5">
              <button  className="btn btn-primary px-5 py-1 fs-5">Pay</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Payment;
