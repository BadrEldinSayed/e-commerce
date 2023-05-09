import React from "react";
import { useShoppingCart } from "../../Context/ShoppingCartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const info = useShoppingCart();
  console.log(info.state);
  const dispatch = info.dispatch;

  const total = info.state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  return (
    <>
      <section id="cart" className="py-5">
        <div className="container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {info.state.map((product) => (
                <>
                  <tr>
                    <th scope="row">
                      <div className="d-flex">
                        <img src={product.image1} className="cart-img" alt="" />
                        <div className="pt-3 ps-4">
                          <h5>{product.title}</h5>
                          <i
                            class="fa-solid fa-pen-to-square pe-3 text-muted pt-2"
                            role="button"
                          ></i>
                          <i
                            onClick={() =>
                              dispatch({ type: "REMOVE", payload: product })
                            }
                            class="fa-solid fa-trash-can text-muted"
                            role="button"
                          ></i>
                        </div>
                      </div>
                    </th>
                    <td className="fs-5">${product.price}</td>
                    <td>
                      <div className="d-flex align-items-center outline">
                        <i
                          onClick={() => {
                            if (product.quantity > 1) {
                              dispatch({ type: "DECREASE", payload: product });
                            } else {
                              dispatch({ type: "REMOVE", payload: product });
                            }
                          }}
                          class="fa-solid fa-minus"
                          role="button"
                        ></i>
                        <span className="fs-5 fw-bolder px-4">
                          {product.quantity}
                        </span>
                        <i
                          onClick={() =>
                            dispatch({ type: "INCREASE", payload: product })
                          }
                          class="fa-solid fa-plus"
                          role="button"
                        ></i>
                      </div>
                    </td>
                    <td className="fs-5">
                      ${product.price * product.quantity}
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>

          {info.state.length > 0 && (
            <div className="total">
              <h1>Order Total: ${total}</h1>
              <div className="text-center mt-4">
                <Link to='/payment'>
                  <button className="btn btn-dark px-5 py-2 fs-5">
                    PROCEED TO CHECKOUT
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cart;
