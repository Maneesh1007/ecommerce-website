// ProductDetailPage.js
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap"; // Import necessary components
import { productsArr } from "./Product";
import styles from "./Card.module.css";

const ProductDetailPage = () => {
  const { id } = useParams();

  // Fetch product details and reviews using the product ID
  const selectedProduct = productsArr.find(
    (product) => product.id === Number(id)
  );

  return (
    <Container>
      <Row>
        <Col md={6}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              src={selectedProduct.imageUrl}
              className={styles["image-zoom"]}
            />
            <Card.Body>
              <Card.Title>{selectedProduct.title}</Card.Title>
              <Card.Text>{selectedProduct.price}</Card.Text>
              <Button variant="primary">Add to Cart</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <h2>Images</h2>
          <div>
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                //src={image}
                alt={`Product ${selectedProduct.title} - Image ${index + 1}`}
              />
            ))}
          </div>
          <h2>Reviews</h2>
          <ul>
            {selectedProduct.reviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetailPage;
