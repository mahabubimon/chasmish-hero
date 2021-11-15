import React, { useState } from "react";
import { Button, Row } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../shared/footer/Footer";
import Header from "../../shared/header/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [error, setError] = useState("");

  const { firebaseData } = useAuth();
  const {
    setUser,
    setIsLoading,
    registerNewUser,
    setNewUser,
    signIn,
    googleSignIn,
    saveUser,
    updateUser,
  } = firebaseData;

  const history = useHistory();
  const location = useLocation();
  const redirect_uri = location.state?.from || "/";

  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleToggle = (e) => {
    setIsLogin(e.target.checked);
  };

  const registerUser = (e) => {
    setIsLoading(true);
    e.preventDefault();
    registerNewUser(email, password)
      .then((data) => {
        updateUserName();
        handleSignInUser(e);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const updateUserName = () => {
    setIsLoading(true);
    setNewUser(userName)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleSignInUser = (e) => {
    setIsLoading(true);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        saveUser(user.email, user.displayName);
        history.push(redirect_uri);
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      })
      .finally(() => setIsLoading(false));
    e.preventDefault();
  };

  const handleRegistration = (e) => {
    if (password.length < 6) {
      setError("Password should be 6 Character");
    }
    isLogin ? handleSignInUser(e) : registerUser(e);
  };

  const handleSignIn = (provider) => {
    setIsLoading(true);
    provider()
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUser(user.email, user.displayName);
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
    <Header />
    <section className="container py-5">
      <Row>
        <div className="col-lg-7">
          <img
            className="img-fluid"
            src="https://i.ibb.co/T8Z0nNp/signup.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-5 ps-lg-5 py-5 align-center">
          <form onSubmit={handleRegistration}>
            <h2>{isLogin ? "Sign In" : "Register"}</h2>
            {isLogin || (
              <input onChange={handleUserName} type="text" placeholder="Name" />
            )}
            <br /> <br />
            <input
              onChange={handleEmail}
              type="email"
              placeholder="Email"
            />{" "}
            <br />
            <br />
            <input
              onChange={handlePassword}
              type="password"
              placeholder="Password"
            />
            <br />
            <br />
            <input type="checkbox" onClick={handleToggle} />
            Already have an account? <br />
            {error}
            <Button type="submit" variant="primary">
              {isLogin ? "Sign In" : "Register"}
            </Button>
          </form>
          <hr />
          <div className="pt-2">
            <h3> Sign-In with</h3>
            <Button
              onClick={() => handleSignIn(googleSignIn)}
              className="fs-1 p-1 m-1 text-primary"
              variant="light"
            >
              <FaGoogle /> Google Sign In
            </Button>
          </div>
        </div>
      </Row>
    </section>
    <Footer />
    </>
  );
};

export default Login;
