import React from "react";
import NavbarComponent from "./components/Navbar";
//import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./components/Store";
import CartProvider from "./components/CartProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContactUs from "./components/ContactUs";
import ProductDetailPage from "./components/ProductDetail";
import AuthForm from "./LoginPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Store />} />
          <Route path="/contact" element={<ContactUs />}></Route>
          <Route path="/product/:id" element={<ProductDetailPage />}></Route>
          <Route path="/login" element={<AuthForm></AuthForm>}></Route>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
