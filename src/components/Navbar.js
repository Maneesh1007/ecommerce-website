import { Button, Navbar, Modal, ModalBody } from "react-bootstrap";
import { useState, useContext } from "react";
import CartContext from "./CartContext";

const NavbarComponent = () => {
  const [show, setShow] = useState(false);

  const cart = useContext(CartContext);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const numberOfCartItems = cart.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);
  return (
    <>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Navbar.Brand href="/">HOME</Navbar.Brand>
        <Navbar.Brand href="/">STORE</Navbar.Brand>
        <Navbar.Brand href="/">ABOUT</Navbar.Brand>
        <Navbar.Toggle></Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="dark" onClick={handleShow}>
            Cart {numberOfCartItems}
          </Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.items.map((item, index) => (
            <div key={index}>
              <p>Title: {item.title}</p>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              {/* You can also render the image here */}
              <img src={item.imageUrl} alt={item.title} />
            </div>
          ))}
        </Modal.Body>
        <ModalBody className="justify-content-end">
          <h1>Total Amount</h1>
          <h3>{cart.totalAmount}</h3>
        </ModalBody>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default NavbarComponent;
