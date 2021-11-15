import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="text-center pt-5">
      <h2>Please Input Correct URL</h2>
      <h2>Or</h2>
      <Link to="/">
        <Button variant="info">Back to Home Page</Button>
      </Link>
      <img
        className="img-fluid"
        src="https://i.ibb.co/R4tf55D/pagenotfound.jpg"
        alt=""
      />
    </div>
  );
};

export default NotFound;
