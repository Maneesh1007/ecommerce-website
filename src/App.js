import React from "react";
import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./components/Store";
import CartProvider from "./components/CartProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Store />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
