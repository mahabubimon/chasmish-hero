import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../login/adminRoute/AdminRoute";
import NotFound from "../../notfound/NotFound";
import Footer from "../../shared/footer/Footer";
import AddGlass from "../adminDashboard/addGlass/AddGlass";
import MakeAdmin from "../adminDashboard/makeAdmin/MakeAdmin";
import ManageAllOrders from "../adminDashboard/manageAllOrders/ManageAllOrders";
import ManageGlasses from "../adminDashboard/manageGlasses/ManageGlasses";
import MyOrders from "../userDashboard/myOrders/MyOrders";
import Payment from "../userDashboard/payment/Payment";
import Review from "../userDashboard/review/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { firebaseData } = useAuth();
  const { admin } = firebaseData;
  const userNavigation = [
    { name: "My Orders", to: `${url}/my-orders` },
    { name: "Payment", to: `${url}/payment` },
    { name: "Review", to: `${url}/review` },
  ];
  const adminNavigation = [
    { name: "Manage All Orders", to: `${url}/all-orders` },
    { name: "Add A Glass", to: `${url}/add-glass` },
    { name: "Manage Glasses", to: `${url}/manage-glasses` },
    { name: "Make Admin", to: `${url}/make-admin` },
  ];

  return (
    <>
      <section className="container">
        <Navbar collapseOnSelect expand="lg" variant="light">
          <Container className="pb-5">
            <Navbar.Brand as={Link} to="/" className="p-0">
              <img
                className="w-75 img-fluid"
                src="https://i.ibb.co/FwkP0xS/logo.png"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto pe-0">
                {admin ? (
                  <>
                    <h6 className="fw-bold text-uppercase">Admin Dashboard</h6>
                    {adminNavigation.map((item) => (
                      <Nav.Link
                        as={Link}
                        to={item.to}
                        key={item.name}
                        className="text-dark fs-5"
                      >
                        {item.name}
                      </Nav.Link>
                    ))}
                  </>
                ) : (
                  <>
                    <h6 className="fw-bold text-uppercase">User Dashboard</h6>
                    {userNavigation.map((item) => (
                      <Nav.Link
                        as={Link}
                        to={item.to}
                        key={item.name}
                        className="text-dark fs-5"
                      >
                        {item.name}
                      </Nav.Link>
                    ))}
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Switch>
          {/* User Route */}
          <Route exact path={`${path}/`}>
            <h2 className="p-5 m-5">
              Welcome to {admin ? "Admin" : "User"} Dashboard
            </h2>
          </Route>
          <Route exact path={`${path}/my-orders`}>
            <MyOrders />
          </Route>
          <Route exact path={`${path}/payment`}>
            <Payment />
          </Route>
          <Route exact path={`${path}/review`}>
            <Review />
          </Route>

          {/* Admin Route */}
          <AdminRoute path={`${path}/all-orders`}>
            <ManageAllOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/add-glass`}>
            <AddGlass />
          </AdminRoute>
          <AdminRoute path={`${path}/manage-glasses`}>
            <ManageGlasses />
          </AdminRoute>
          <AdminRoute path={`${path}/make-admin`}>
            <MakeAdmin />
          </AdminRoute>
          <Route path={`${path}*`}>
            <NotFound />
          </Route>
        </Switch>
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
