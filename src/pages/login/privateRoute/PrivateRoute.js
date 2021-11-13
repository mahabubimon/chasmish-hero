import React from "react";
import { Spinner } from "react-bootstrap";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { firebaseData } = useAuth();
  const { user, isLoading } = firebaseData;

  if (isLoading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" variant="primary" />
      </div>
    );
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
