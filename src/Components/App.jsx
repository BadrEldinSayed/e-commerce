import React, { useEffect, useState } from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Product from "./Product/Product";
import ItemDetails from "./ItemDetails/ItemDetails";
import Category from "./Category/Category";
import { Routes, Route } from "react-router-dom";
import Loading from "./Loading/Loading";
import ShoppingCartProvider from "../Context/ShoppingCartContext";
import Cart from "./Cart/Cart";
import Payment from "./Payment/Payment";
import NotFound from "./NotFound/NotFound";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ShoppingCartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="itemDetails/:productId" element={<ItemDetails />} />
            <Route path="category/:categoryName" element={<Category />} />
            <Route path="cart" element={<Cart />} />
            <Route path="payment" element={<Payment />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </ShoppingCartProvider>
      )}
    </>
  );
}

export default App;
