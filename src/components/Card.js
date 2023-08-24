// eslint-disable-next-line

import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import CartContext from "./CartContext";
import styles from "./Card.module.css";

const CardComponent = (props) => {
  const product = props.product;

  const cart = useContext(CartContext);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        src={product.imageUrl}
        className={styles["image-zoom"]}
        style={{ cursor: "pointer" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.price}</Card.Text>
        <Button
          variant="primary"
          onClick={() => cart.addItem({ ...product, quantity: 1 })}
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
