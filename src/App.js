import NavbarComponent from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Store from "./components/Store";
import CartProvider from "./components/CartProvider";
function App() {
  return (
    <CartProvider>
      <NavbarComponent />
      <Store></Store>
    </CartProvider>
  );
}

export default App;
