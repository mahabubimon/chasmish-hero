import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SingleGlass = ({ glass }) => {
  const { _id, title, details, image, price } = glass;
  return (
    <Col>
      <Card className="h-100 border-0">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text className="text-secondary">
            {details.slice(0, 72)}
          </Card.Text>
          <Card.Text className="fs-3">
            Price: <span className="text-danger">${price}.00</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/glass/${_id}`}>
            <Button className="mx-2 ">Buy Now</Button>
          </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default SingleGlass;
