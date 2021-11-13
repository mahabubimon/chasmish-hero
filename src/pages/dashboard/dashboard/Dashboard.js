import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
// import DashboardHome from "../dashboardHome/DashboardHome";
import MyOrders from "../myOrders/MyOrders";
import Payment from "../payment/Payment";
import Review from "../review/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { firebaseData } = useAuth();
  const { handleLogout } = firebaseData;
  const history = useHistory();
  const navigation = [
    { name: "Dashboard", to: `${url}` },
    { name: "My Orders", to: `${url}/my-orders` },
    { name: "Payment", to: `${url}/payment` },
    { name: "Review", to: `${url}/review` },
  ];
  return (
    <section className="container">
      <Navbar collapseOnSelect expand="lg" variant="light">
        <Container>
          <Navbar.Brand as={Link} to="/" className="p-2">
            <img
              className="w-75 img-fluid"
              src="https://i.ibb.co/FwkP0xS/logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto pe-0">
              {navigation.map((item) => (
                <Nav.Link
                  as={Link}
                  to={item.to}
                  key={item.name}
                  className="text-dark fs-5"
                >
                  {item.name}
                </Nav.Link>
              ))}
              <Nav.Link>
                <Button variant="danger" onClick={()=>handleLogout(history)}>
                  Logout
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path={path}>
          <MyOrders />
        </Route>
        <Route exact path={`${path}/payment`}>
          <Payment />
        </Route>
        <Route exact path={`${path}/my-orders`}>
          <MyOrders />
        </Route>
        <Route exact path={`${path}/review`}>
          <Review />
        </Route>
        {/* <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/addDoctor`}>
          <AddDoctor></AddDoctor>
        </AdminRoute> */}
      </Switch>
    </section>
  );
};

export default Dashboard;
