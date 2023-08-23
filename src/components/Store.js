import { Col, Container, Row } from "react-bootstrap";
import { productsArr } from "./Product";
import CardComponent from "./Card";

const Store = () => {
  return (
    <Container>
      <Row md={2} className="g-4">
        {productsArr.map((product) => (
          <Col align="center" key={product.id}>
            <CardComponent product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Store;
