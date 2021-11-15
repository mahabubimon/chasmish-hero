import axios from "axios";
import React from "react";
import { Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../shared/footer/Footer";
import Header from "../shared/header/Header";

const BuyNow = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const { user } = useAuth().firebaseData;
  const { glasses } = useAuth().glassesData;

  if (glasses.length === 0) {
    return (
      <div className="text-center mt-5 p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  const glass = glasses.find((glass) => glass._id === id);

  const { title, image, details, price } = glass;

  const onSubmit = (data) => {
    const url = "https://chasmish-hero.herokuapp.com/orders";
    axios
      .post(url, data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("added successfully");
          reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <section className="container row d-lg-flex py-5">
        <div className="col-lg-8">
          <h2>
            Glass: <span className="text-info">{title}</span>
          </h2>
          <img className="img-fluid w-75 py-4" src={image} alt="" />
          <p>{details}</p>

          <h4>
            Tour Package Special Price: BDT
            <span className="text-danger">{price}.00 </span>
          </h4>
        </div>
        <div className="col-lg-4">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Your Name:</label>
            <br />
            <input
              {...register("name", { required: false, maxLength: 20 })}
              value={user.displayName}
            />
            <br />
            <label>Your Email:</label>
            <br />
            <input {...register("email")} value={user.email} />
            <br />
            <br />
            <input {...register("title")} value={title} />
            <br />
            <br />
            <input {...register("price")} value={price} />
            <br />
            <label>Address:</label>
            <br />
            <input
              {...register("address", { required: true, maxLength: 20 })}
            />
            <br />
            <br />
            <Button type="submit" value="">
              Place Order
            </Button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BuyNow;
