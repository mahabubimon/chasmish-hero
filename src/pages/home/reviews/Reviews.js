import StarIcon from "@mui/icons-material/Star";
import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, CardGroup, Col } from "react-bootstrap";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    axios
      .get("https://chasmish-hero.herokuapp.com/reviews")
      .then((res) => {
        setReviews(res.data);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <section id="reviews" className="text-center py-5 container">
      <h1 className="text-info pb-5">Happy Clients Reviews</h1>
      <CardGroup className="row row-cols-1 row-cols-md-3 g-4">
        {reviews.map((review) => (
          <Col key={review._id}>
            <Card className="h-100 border-0">
              <div>
                <Card.Img
                  className="w-25 rounded-circle"
                  variant="top"
                  src={review.image}
                />
              </div>
              <Card.Body>
                <Card.Title>{review.name}</Card.Title>
                <Rating
                  name="hover-feedbac"
                  value={review.rating}
                  size="large"
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
                <Card.Text className="text-secondary">
                  {review.review}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </CardGroup>
    </section>
  );
};

export default Reviews;
